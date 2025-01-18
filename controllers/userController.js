import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";


//register
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("User already exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashPassword,
    });
    res.status(201).json({ message:"user created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
};


//login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user){
        return res.status(404).json({ message: "User not found" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({id:user._id}, process.env.JWT_SECRET ); 

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

