import { Router } from "express";

import {
  DonorLogin,
  DonorRegister,
  DonorRegisterVerify,
  forgotPassword,
  resetPasswordVerification,
  resetpassword,
} from "../controllers/donorAuthControllers.js";

const router = Router();

router.post("/register", DonorRegister);
router.post("/register/verify", DonorRegisterVerify);
router.post("/login", DonorLogin);
router.post("/forgot-password", forgotPassword);
router.post("/forgot-password-verify", resetPasswordVerification);
router.put("/reset-password", resetpassword);

export default router;
