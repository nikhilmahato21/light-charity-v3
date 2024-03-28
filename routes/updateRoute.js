import { Router } from "express";
import { createDonor, update, getDonors, getBloodBank, getAddress } from "../controllers/updateControllers.js";



const router = Router();

router.patch('/inventory',update);
router.post('/create-donor',createDonor);
router.get('/donors', getDonors);
router.get('/blood-bank', getBloodBank);
router.post('/get-address', getAddress);


export default router;