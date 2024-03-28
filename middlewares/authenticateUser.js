import { UnauthenticatedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/token.js";

export const authenticateBloodbank = async (req, res, next) =>{
  const {bloobankToken} = req.cookies;
  if(!bloobankToken) throw new UnauthenticatedError("you are not authorized for this route plz check the token");
  try {
     const {userId, inventory, donors} = verifyJWT(bloobankToken);
     req.user = {userId,inventory, donors}
     next();
  } catch (error) {
    throw new UnauthenticatedError("you are not authorized for this route");
  }
}





export const authenticateDonor = async (req, res, next) =>{
  const {donorToken} = req.cookies;
  if(!donorToken) throw new UnauthenticatedError("you are not authorized for this route");
  try {
     const {donorId, donatedAt } = verifyJWT(donorToken);
     req.donor = {donorId, donatedAt}
     next();
  } catch (error) {
    throw new UnauthenticatedError("you are not authorized for this route");
  }
}



