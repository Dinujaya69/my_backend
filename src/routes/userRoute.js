import express from "express";
import { registerUser, deleteUser, getUser, loginUser, updateUser } from "../controllers/userController.js";

const userRouter = express.Router();

//post routes
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

//get routes
userRouter.get("/get", getUser);
userRouter.put("/update", updateUser);

//delete route
userRouter.delete("/delete", deleteUser);



export default userRouter;