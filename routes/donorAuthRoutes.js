import { Router } from "express";

import { DonorLogin, DonorRegister, DonorRegisterVerify } from "../controllers/donorAuthControllers.js";

const router = Router();

router.post('/register',DonorRegister);
router.post('/register/verify',DonorRegisterVerify);
router.post("/login" , DonorLogin);


export default router;