import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan, { format } from "morgan";
import mongoose from 'mongoose';
import { StatusCodes } from "http-status-codes";

// cookie parser

import cookieParser from "cookie-parser";

 
// routes import
import bloodbankAuthRouter from './routes/authRoutes.js';
import BloodbankUpdateRouter from "./routes/updateRoute.js"
import donorAuthRouter from "./routes/donorAuthRoutes.js"
import donorRouter from "./routes/donorRoutes.js"

// public 
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

// middlewares
import errorHandler from "./middlewares/errorHandler.js";
import{ authenticateBloodbank, authenticateDonor} from "./middlewares/authenticateUser.js";



const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname,"./client/dist")))
app.use(cookieParser());
app.use(errorHandler);
app.use(express.json());

// test rout

app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' });
});

// Bloodbank's - routes

app.use("/api/v1/light/bloodbank/update",authenticateBloodbank, BloodbankUpdateRouter)
app.use("/api/v1/light/bloodbank/auth",bloodbankAuthRouter)


// donor's - routes

app.use("/api/v1/light/donors/donor", authenticateDonor, donorRouter);
app.use("/api/v1/light/donors/auth", donorAuthRouter);




// Hospital's routes


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});




// not found error..

app.use('*', (req, res) => {
  res.status(404).json({msg: "not found"});
});

// unexpected err...

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "something went wrong"
  res.status(statusCode).json({msg});
})



const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
};

