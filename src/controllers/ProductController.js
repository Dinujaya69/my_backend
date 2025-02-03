import Product from "../models/product.js";

export const createProduct =async (req, res, next) => {
    try {
        const { ProductName, description, price, category } = req.body;
        const newProduct = new Product({
            ProductName,
            description,
            price,
            category,
            image: req.file ? req.file.path.replace(/\\/g, "/") : null,
        });
        await newProduct.save();
        res.status(201).json({ message: "Product created successfully" });
    } catch (error) {
        next(error);
    }
};


export const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};


export const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}


export const deleteProduct = (req, res, next) => {
    try {
        const product = Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        next(error);
    }
}


//update product
export const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        product.ProductName = req.body.ProductName || product.ProductName;
        product.description = req.body.description || product.description;
        product.price = req.body.price || product.price;
        product.category = req.body.category || product.category;
        product.image = req.file ? req.file.path : product.image;

        const updatedProduct = await product.save();

        res.status(200).json({
            success: true,
            data: {
                _id: updatedProduct._id,
                ProductName: updatedProduct.ProductName,
                description: updatedProduct.description,
                price: updatedProduct.price,
                category: updatedProduct.category,
                image: updatedProduct.image,
            },
            message: "Product updated successfully",
        });
    } catch (error) {
        next(error);
    }
};

