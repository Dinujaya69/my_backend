import express from "express";
import { createUser, deleteUser, getUser, loginUser, updateUser } from "../controllers/userController.js";

const userRouter = express.Router();

//post routes
userRouter.post("/create", createUser);
userRouter.post("/login", loginUser);

//get routes
userRouter.get("/get", getUser);
userRouter.put("/update", updateUser);

//delete route
userRouter.delete("/delete", deleteUser);



export default userRouter;