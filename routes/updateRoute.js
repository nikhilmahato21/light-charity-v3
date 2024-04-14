import { Router } from "express";
import { createDonor, update, getDonors, getBloodBank } from "../controllers/updateControllers.js";



const router = Router();

router.patch('/inventory',update);
router.post('/create-donor',createDonor);
router.get('/donors', getDonors);
router.get('/blood-bank', getBloodBank);


export default router;