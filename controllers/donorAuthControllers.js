import { INTERNAL_SERVER_ERROR, StatusCodes } from "http-status-codes";
import Donor from "../models/Donor.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import {
  BadRequestError,
  UnauthenticatedError,
} from "../errors/customErrors.js";
import { createJWT } from "../utils/token.js";
import nodemailer from "nodemailer";

let donor = {};
let OTP = "";
const numbers = "123456789";
let donorId = "";

// <<<<<<<<<<<<<<<<<<<<<< Registration >>>>>>>>>>>>>>>>>>>...

export const DonorRegister = async (req, res) => {
  const { email } = req.body;
  const existingDonor = await Donor.findOne({ email });
  if (existingDonor) {
    throw new BadRequestError("email already existed");
  }
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  donor = req.body;

  const config = {
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(config);
  OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += numbers[Math.floor(Math.random() * 9)];
  }

  var mailOption = {
    from: process.env.SMTP_USER,
    to: email,
    subject: "otp verification",
    text: `your email varification otp is ${OTP}`,
  };

  transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "something went wrong" });
    } else {
      res.status(StatusCodes.OK).json({
        message: "A email verification code has been sended to your email",
      });
    }
  });
};

// <<<<<<<<<<<<<<<<< OTP verification >>>>>>>>>>>>>>>>>...

export const DonorRegisterVerify = async (req, res) => {
  const { otp } = req.body;
  if (!otp) throw new BadRequestError("enter the otp");
  if (otp.toString() !== OTP) throw new BadRequestError("otp is incorrect");
  await Donor.create(donor);

  const { email } = donor;

  const donorToPass = await Donor.findOne({ email });
  const donorToken = createJWT({
    donorId: donorToPass._id,
    donatedAt: donorToPass.donatedAt,
    location: donorToPass.location,
  });
  const oneDay = 60 * 60 * 1000 * 24;
  res.cookie("donorToken", donorToken, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });

  res
    .status(StatusCodes.OK)
    .json({ message: "registered successfully", donor: donor });
};

//<<<<<<<<<<<<<<<<< Login >>>>>>>>>>>>>>>>>>>>...

export const DonorLogin = async (req, res) => {
  const donor = await Donor.findOne({ email: req.body.email });
  const isValidUser =
    donor && (await comparePassword(req.body.password, donor.password));
  if (!isValidUser) throw new UnauthenticatedError("invalid credentials");

  const donorToken = createJWT({
    donorId: donor._id,
    donatedAt: donor.donatedAt,
    location: donor.location,
  });
  const oneDay = 60 * 60 * 1000 * 24;

  res.cookie("donorToken", donorToken, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json({ msg: "logged in successfully" });
};

//logout
export const logout = (req, res) => {
  res.cookie("donorToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "logged out!" });
};

// forgot password request handler

export const forgotPassword = async (req, res) => {
  const donor = await Donor.findOne({ email: req.body.email });
  const { email } = req.body;
  donorId = donor._id;
  if (!donor) throw new BadRequestError("no email found");

  const config = {
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(config);
  OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += numbers[Math.floor(Math.random() * 9)];
  }

  var mailOption = {
    from: process.env.SMTP_USER,
    to: email,
    subject: "otp verification",
    text: `your email varification otp is ${OTP}`,
  };
  transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "something went wrong" });
    } else {
      res.status(StatusCodes.OK).json({
        message: "A email verification code has been sended to your email ",
      });
    }
  });
};

//  forgot password otp verification

export const resetPasswordVerification = async (req, res) => {
  const { otp } = req.body;
  console.log(otp);
  if (!otp) throw new BadRequestError("enter the otp");
  if (otp.toString() !== OTP) throw new BadRequestError("otp is incorrect");
  res.status(StatusCodes.OK).json({ msg: "plese reset the password" });
};

// password reset

export const resetpassword = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  const newPassword = req.body.password;
  console.log(req.body.password);
  await Donor.findOneAndUpdate(
    { _id: donorId },
    { $set: { password: newPassword } },
    { returnOriginal: false }
  );
  res.status(StatusCodes.OK).json({ msg: "password reset successfully" });
};
