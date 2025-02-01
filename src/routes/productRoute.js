import express from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct,  } from "../controllers/ProductController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../utils/multerConfig.js"; 
const Router = express.Router();


//post routes
Router.post('/add', upload.single("image"), authMiddleware,createProduct);

//get routes
Router.get('/',getProducts);
Router.get('/:id',authMiddleware,getProduct);

//delete routes
Router.delete('/delete/:id',authMiddleware,deleteProduct);

//update routes
Router.put('/update/:productId', upload.single("image"), authMiddleware,updateProduct);








export default Router;