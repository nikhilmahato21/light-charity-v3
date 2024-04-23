import { StatusCodes } from "http-status-codes";
import BloodBank from "../models/BloodBank.js";
import Donor from "../models/Donor.js";
import { hashPassword } from "../utils/password.js";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";





// get all donors

export const getDonors = async (req, res) => {

    const bloodBank = await BloodBank.findById(req.user.userId);
    if (bloodBank) {
      const donors = bloodBank.donors || [];
      res.status(200).json({ donors });
    } else {
      throw new NotFoundError("Blood Bank not found");
    }
};




// get current bloodbank

export const getBloodBank = async (req, res) =>{
  const bloodBank = await BloodBank.findById(req.user.userId);
  if (bloodBank) {
    res.status(200).json({ bloodBank });
  } else {
    throw new NotFoundError("Blood Bank not found");
  }
}





// update exsisting donor


export const update = async (req, res) => {
    const {  quantity , email } = req.body;
    const existingDonor = await Donor.findOne({ email }).select(" -password -donatedAt -createdAt -updatedAt -__v");
   
    if(!existingDonor){
      throw new BadRequestError("no donor found");
    }

    existingDonor.donated = quantity;
     const donorToadd = existingDonor;
     const date = new Date();

     var formattedDate = date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    donorToadd.date = formattedDate;
     
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







// new donor


