import mongoose from "mongoose";

const  ProductSchema = new mongoose.Schema({
  ProductName: {
    type: "string",
    required: true,
  },

  price: {
    type: "number",
    required: true,
    
  }, 
  description: {
    type: "string",
    required: true,
  },
  image: {
    type: "string",
    required: true,
    default: false,
  },
  category: {
    type: "string",
    required: true,
  },  
  
});

const Product = mongoose.model("product", ProductSchema);

export default Product;
