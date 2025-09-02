import { User } from "../models/user-model.js";
import bcrypt from "bcryptjs";

// Home Logic
export const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to my Home Muskan");
  } catch (error) {
    console.log(error);
  }
};

// Registration Logic
export const register = async (req, res) => {
  try {
    // console.log(req.body)
    const { username, email, phone, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "Email already exist" });
    }
    const userCreated = await User.create({ username, email, phone, password });
    res.status(200).json({
      msg: "Registration Successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.error("Registration Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Login Logic
export const login = async (req, res) => {
  try {
    const {email, password} = req.body

    const userExists = await User.findOne({email})
    if(!userExists){
      res.status(400).json({message:"Invalid Credentials"})
    }
    // const user = await bcrypt.compare(password, userExists.password)
    const user = await userExists.comparePassword(password)

    if(user){
      res.status(200).json({
      msg: "Login Successfully",
      token: await userExists.generateToken(),
      userId: userExists._id.toString(),
    });
    }else{
      res.status(401).json({
        message:"Invalid email or password."
      })
    }
  } catch (error) {
    console.error("Registration Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const user = async(req,res)=> {
  try {
    const userData = req.user
    console.log(userData)
     return res.status(200).json({userData})
  } catch (error) {
    console.log(`Error from the user Route ${error}`)
  }
}
