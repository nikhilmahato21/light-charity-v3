import { StatusCodes } from "http-status-codes";
import Donor from "../models/Donor.js";
import BloodBank from "../models/BloodBank.js";

export const currentDonor = async (req, res) => {
  const donor = await Donor.findById(req.donor.donorId);

  res.status(StatusCodes.OK).json({ donor });
};

// search near by

export const getNearBloodbanks = async (req, res) => {
  const longitude = req.donor.location.coordinates[0];
  const latitude = req.donor.location.coordinates[1];

  const hospitals = await BloodBank.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
        $maxDistance: 10000,
      },
    },
  });

  if (hospitals) {
    const hospitalsToSend = hospitals.map((hospital) => ({
      id: hospital._id,
      name: hospital.name,
      location: hospital.location,
      Inventory: hospital.inventory,
    }));

    res.status(StatusCodes.OK).json({ hospitals: hospitalsToSend });
  } else {
    res.status(StatusCodes.OK).json({ msg: "no bloodbanks near you" });
  }
};
