import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan, { format } from "morgan";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import session from "express-session";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

// cookie parser

import cookieParser from "cookie-parser";

// routes import
import bloodbankAuthRouter from "./routes/authRoutes.js";
import BloodbankUpdateRouter from "./routes/updateRoute.js";
import donorAuthRouter from "./routes/donorAuthRoutes.js";
import donorRouter from "./routes/donorRoutes.js";

// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// middlewares
import errorHandler from "./middlewares/errorHandler.js";
import {
  authenticateBloodbank,
  authenticateDonor,
} from "./middlewares/authenticateUser.js";
import { callback } from "chart.js/helpers";
import Donor from "./models/Donor.js";
import { log } from "console";

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.resolve(__dirname, "./client/dist")));
app.use(cookieParser());
app.use(errorHandler);
app.use(express.json());

app.use(
  session({
    secret: "mnbdcbhdvchvcvhj234",
    resave: "false",
    saveUninitialized: true,
  })
);

// Bloodbank's - routes

app.use(
  "/api/v1/light/bloodbank/update",
  authenticateBloodbank,
  BloodbankUpdateRouter
);
app.use("/api/v1/light/bloodbank/auth", bloodbankAuthRouter);

// donor's - routes

app.use("/api/v1/light/donors/donor", authenticateDonor, donorRouter);
app.use("/api/v1/light/donors/auth", donorAuthRouter);

// Configure Passport.js
app.use(passport.initialize());
app.use(passport.session());

// google auth

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const donor = await Donor.findOne({ email: profile.emails[0].value });
        if (!donor) {
          await Donor.create({
            name: profile.displayName,
            email: profile.emails[0].value,
          });
        }
        return done(null, donor);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
passport.serializeUser((donor, done) => {
  done(null, donor);
});

passport.deserializeUser((donor, done) => {
  done(null, donor);
});
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/donor/dashboard",
    failureRedirect: "http://localhost:5173/donor/login",
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

// not found error..

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

// unexpected err...

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "something went wrong";
  res.status(statusCode).json({ msg });
});

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
