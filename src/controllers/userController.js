import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "./../config/env.js"

//register
export const registerUser = async (req, res) => {
  const { 
    full_name, email, password } = req.body;

  try {
     // Check if user already exists (Using email)
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("User already exists");
    }
       // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create a new user
    await User.create({
      full_name,
      email,
      password: hashPassword,
    });
    res.status(201).json({ message:"user created successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error registering user",
      error: error.message,
    });
  }
};


//login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user){
        return res.status(404).json({ message: "User not found" });
      }
      // Compare the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

       // Generate JWT Token
      const token = jwt.sign({id:user._id}, JWT_SECRET ); 

      const {password:removepassword, isdelected,...others}=user._doc;
      return res.status(200).json({ message: "Login successful",user:others ,token });

    }catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
  };
  

export const getUser = async (req, res) => {
  res.send("get user");
};

export const updateUser = async (req, res) => {
  res.send("update user");
};

export const deleteUser = async (req, res) => {
  res.send("delete user");
};

