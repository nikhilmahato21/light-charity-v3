import { Router } from "express";
import { update, getDonors, getBloodBank } from "../controllers/updateControllers.js";



const router = Router();

router.patch('/inventory',update);
router.get('/donors', getDonors);
router.get('/blood-bank', getBloodBank);


export default router;