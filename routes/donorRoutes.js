import { Router } from "express";
import { currentDonor, getNearBloodbanks, nearbyBloodBanks } from "../controllers/donorControllers.js";



const router = Router();

router.get('/current-donor', currentDonor);
router.get("/near-banks", nearbyBloodBanks);



export default router;