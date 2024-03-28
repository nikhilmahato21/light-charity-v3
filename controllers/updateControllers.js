import { StatusCodes } from "http-status-codes";
import BloodBank from "../models/BloodBank.js";
import Donor from "../models/Donor.js";
import { hashPassword } from "../utils/password.js";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import { getCoordinates } from "./location.js";


export const getDonors = async (req, res) => {
  
    const bloodBank = await BloodBank.findById(req.user.userId);

    if (bloodBank) {
      const donors = bloodBank.donors || [];

      res.status(200).json({ donors });
    } else {

      throw new NotFoundError("Blood Bank not found");
    }
};

export const getBloodBank = async (req, res) =>{
  const bloodBank = await BloodBank.findById(req.user.userId);
  if (bloodBank) {
    res.status(200).json({ bloodBank });
  } else {
    throw new NotFoundError("Blood Bank not found");
  }
}


export const update = async (req, res) => {
    const {  quantity , email } = req.body;
    const existingDonor = await Donor.findOne({ email }).select(" -password -donatedAt -createdAt -updatedAt -__v");
   
    if(!existingDonor){
      throw new BadRequestError("no donor found");
    }

    existingDonor.donated = quantity;
     const donorToadd = existingDonor;
     donorToadd.date = new Date();
     
    await BloodBank.findOneAndUpdate(
      { _id: req.user.userId }, 
      { $push: { donors: donorToadd } }, 
      { new: true }
    );

    const bloodbank = await BloodBank.findOneAndUpdate(
      { _id: req.user.userId, 'inventory.bloodGroup': existingDonor.bloodGroup },
      { $inc: { 'inventory.$.quantity': quantity } }, 
      { new: true }
  );

     await Donor.findOneAndUpdate(
    { _id: existingDonor._id},
    { $inc: { 'donated': quantity } },  
    { new: true }
 
);

    const donatedAt = {
        bloodbank: bloodbank.name,
        donated: quantity,
        date: formattedDate
    }

  await Donor.findOneAndUpdate(
  { _id: existingDonor._id},
  { $push: { 'donatedAt': donatedAt } },  
  { new: true }

   );

    res.status(StatusCodes.OK).json({ msg: 'Inventory Updated' ,bloodbank })

};







export const createDonor = async (req, res) => {
    
      const { email, bloodGroup, donated, number } = req.body;
      const existingDonor = await Donor.findOne({ email });

      const donorToadd = req.body;
      var date = new Date();

      // date formate

      var formattedDate = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });

      donorToadd.date = formattedDate;


      // if donor already have an account


      if (existingDonor) {


        // pushing the donor on blood-bank's donors list
        
        await BloodBank.findOneAndUpdate(
        { _id: req.user.userId }, 
        { $push: { donors: donorToadd } }, 
        { new: true }
      );

      // incrementing the inventory with respected blood group 

      const bloodbank = await BloodBank.findOneAndUpdate(
        { _id: req.user.userId, 'inventory.bloodGroup': bloodGroup },
        { $inc: { 'inventory.$.quantity': donated } }, 
        { new: true }
    );

     
    // incrementing the donor's donated amount 

    const donor = await Donor.findOneAndUpdate(
      { _id: existingDonor._id},
      { $inc: { 'donated': donated } }, 
      { new: true }
  );  

  // pushing the blood-bank , date and amount to donor's donatedAt list
      
     const donatedAt = {
      bloodbank: bloodbank.name,
      donated: donated,
     date: formattedDate
   }
   
  await Donor.findOneAndUpdate(
    { _id: existingDonor._id},
    { $push: { 'donatedAt': donatedAt } },  
    { new: true }
  
     );

      res.status(StatusCodes.OK).json({ msg: 'donor added to donors list'})

   }else{

      // if donor does not have account 

      donorToadd.date = formattedDate;
        await BloodBank.findOneAndUpdate(
        { _id: req.user.userId }, 
        { $push: { donors: donorToadd } }, 
        { new: true }
      );

      
      // creation of donor

      req.body.password = number;
      const hashedPassword = await hashPassword(req.body.password);
      req.body.password = hashedPassword;
      const donor = await Donor.create(req.body);

      //  inc the inventory

      const bloodbank = await BloodBank.findOneAndUpdate(
        { _id: req.user.userId, 'inventory.bloodGroup': bloodGroup },
        { $inc: { 'inventory.$.quantity': donated } }, 
        { new: true }
    );

   // pushing the blood-bank , date and amount to donor's donatedAt list
             
    const donatedAt = {
      bloodbank: bloodbank.name,
      donated: donated,
      date: formattedDate
  }
  
        
    await Donor.findOneAndUpdate(
      { _id: donor._id},
      { $push: { 'donatedAt': donatedAt } },  
      { new: true }
    
       );

      res.status(StatusCodes.OK).json({ msg: 'donor registered successfully and added to donors list'});
    }
      
  };


  export const getAddress = async (req, res) => {
    const { address } = req.body;
    try {
        const coordinates = await getCoordinates(address);
        res.status(StatusCodes.OK).json( coordinates);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to fetch coordinates' });
    }
  }