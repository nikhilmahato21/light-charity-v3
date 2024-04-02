import { Router } from "express";
import { currentDonor, getNearBloodbanks } from "../controllers/donorControllers.js";



const router = Router();

router.get('/current-donor', currentDonor);
router.get("/near-banks", getNearBloodbanks);



export default router;