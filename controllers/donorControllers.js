import { StatusCodes } from "http-status-codes";
import Donor from "../models/Donor.js"

export const currentDonor = async(req, res) =>{
    const donor = await Donor.findById(req.donor.donorId);
    res.status(StatusCodes.OK).json({ donor });
}