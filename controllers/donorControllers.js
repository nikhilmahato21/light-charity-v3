import { StatusCodes } from "http-status-codes";
import Donor from "../models/Donor.js";
import BloodBank from "../models/BloodBank.js";

// get current donor

export const currentDonor = async (req, res) => {
  const donor = await Donor.findById(req.donor.donorId);
  res.status(StatusCodes.OK).json({ donor });
};

// search near by

export const getNearBloodbanks = async (req, res) => {
  const longitude = req.body.long;
  const latitude = req.body.lat;

  const hospitals = await BloodBank.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
        $maxDistance: 1000,
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
export const nearbyBloodBanks = async (req, res) => {
  const longitude = req.body.long;
  const latitude = req.body.lat;

  const userLocation = {
    type: "Point",
    coordinates: [parseFloat(longitude), parseFloat(latitude)],
  };

  const pipeline = [
    {
      $geoNear: {
        near: userLocation,
        distanceField: "distance",
        maxDistance: 100000 * 100000,
        spherical: true,
      },
    },
  ];
  const bloodBanks = await BloodBank.aggregate(pipeline);

  if (bloodBanks.length > 0) {
    // Extract relevant data from each blood bank with distance
    const bloodBanksToSend = bloodBanks.map((bloodBank) => ({
      id: bloodBank._id,
      name: bloodBank.name,
      location: bloodBank.location,
      distance: bloodBank.distance,
      inventory: bloodBank.inventory,
      // Distance calculated by $geoNear
    }));

    res.status(StatusCodes.OK).json({ hospitals: bloodBanksToSend });
  } else {
    res.status(StatusCodes.OK).json({ msg: "No blood banks found near you" });
  }
};
