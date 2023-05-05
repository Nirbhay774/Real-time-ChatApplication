import UserModel from "../Models/UserModel.js";
import Jwt  from "jsonwebtoken";
const JWT = "kjabskdfbkasbdfkjbaskdbfb"



export const protect = async (req, res, next) => {
    console.log("jnaosngn" , req.headers.authorization.split(" ")[1])
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log("Token " , token)

      //decodes token id
      const decoded = Jwt.verify(token,JWT );

      req.user = await UserModel.findById(decoded.id).select("-password");
console.log("sucesfsd")
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};

