import { Router } from "express";
import { currentDonor } from "../controllers/donorControllers.js";



const router = Router();

router.get('/current-donor', currentDonor);



export default router;