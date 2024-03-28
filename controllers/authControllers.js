
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors/customErrors.js";
import BloodBank from "../models/BloodBank.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { createJWT } from "../utils/token.js";


// register...

export const register = async (req, res) => {
  const { email } = req.body;
    const existingBank = await BloodBank.findOne({ email });
    if (existingBank) {
       throw new BadRequestError("email already existed")
    }
    const hashedPassword = await hashPassword(req.body.password)
    req.body.password = hashedPassword;
    const bank = await BloodBank.create(req.body)
    res.status(StatusCodes.OK).json({ msg: 'registered successfully'});
    };

    // login...

    export const login = async (req, res) =>{
        const user = await BloodBank.findOne({email: req.body.email});  
        const isValidUser = user && (await comparePassword(req.body.password, user.password));
        if(!isValidUser) throw new UnauthenticatedError("invalid credentials");
    
          const bloobankToken = createJWT({userId: user._id, inventory: user.inventory, donors: user.donors});
          const oneDay = 60*60*1000*24;
    
          res.cookie("bloobankToken", bloobankToken,{ 
          httpOnly: true,
          expires: new Date(Date.now() + oneDay),
          secure: process.env.NODE_ENV === "production"
          })
            res.status(StatusCodes.OK).json({msg: "logged in successfully"})
          
    };