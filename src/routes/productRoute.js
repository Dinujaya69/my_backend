import express from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct,  } from "../controllers/ProductController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../utils/multerConfig.js"; 
const productRouter = express.Router();


//post routes
productRouter.post('/add', upload.single("image"), authMiddleware,createProduct);

//get routes
productRouter.get('/',authMiddleware,getProducts);
productRouter.get('/:id',authMiddleware,getProduct);

//delete routes
productRouter.delete('/delete/:id',authMiddleware,deleteProduct);

//update routes
productRouter.put('/update/:productId', upload.single("image"), authMiddleware,updateProduct);








export default productRouter;