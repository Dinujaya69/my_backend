import express from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct,  } from "../controllers/ProductController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../utils/multerConfig.js"; 

const productsRouter = express.Router();


//post routes
productsRouter.post('/add', upload.single("image"), authMiddleware,createProduct);

//get routes
productsRouter.get('/',getProducts);
productsRouter.get('/:id',authMiddleware,getProduct);

//delete routes
productsRouter.delete('/delete/:id',authMiddleware,deleteProduct);

//update routes
productsRouter.put('/update/:productId', upload.single("image"), authMiddleware,updateProduct);








export default productsRouter;