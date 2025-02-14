import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  full_name: {
    type: "string",
    required: true,
  },

  email: {
    type: "string",
    required: true,
    unique: true,
  }, 
  password: {
    type: "string",
    required: true,
  },
  isadmin: {
    type: "boolean",
    default: false,
  },
  isdelected: {
    type: "boolean",
    default: false,
  },
  
});

const User = mongoose.model("user", userSchema);

export default User;
