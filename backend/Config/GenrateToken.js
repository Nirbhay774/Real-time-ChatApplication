import jwt from "jsonwebtoken";
const JWT = "kjabskdfbkasbdfkjbaskdbfb"

const generateToken = (id) => {
    return jwt.sign({ id }, JWT, {
      expiresIn: "30d",
    });
  };
  
export default generateToken;
  