import { Router } from "express";
import {
  currentDonor,
  getNearBloodbanks,
  nearbyBloodBanks,
  updateDonor,
} from "../controllers/donorControllers.js";

const router = Router();

router.get("/current-donor", currentDonor);
router.get("/near-banks", nearbyBloodBanks);
router.patch("/update-donor", updateDonor);

export default router;
