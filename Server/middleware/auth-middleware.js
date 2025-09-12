import jwt from "jsonwebtoken";
import { User } from "../models/user-model.js";
export const authMiddleware = async(req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided." });
  }
  const jwtToken = token.replace("Bearer ", "").trim();
  console.log("Token from auth middleware", jwtToken);
  try {
    const isverified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({ email: isverified.email }).select({password:0});
    console.log(userData);
    req.user = userData
    req.token = token
    req.userID = userData._id

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized. Invalid token" });
  }
};
