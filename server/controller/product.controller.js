import Product from '../models/product.model.js';


export const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find();
        return res.status(200).json({ success: true, products });
    }
    catch(error) {
        console.error(error.message);
        return res.status(500).json({ success: false, message: error.message });    
    }   
}

export const createProduct = async (req, res) => {
    const product = req.body; //user will send this data in the request body
    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: "Please fill all the fields" });
    }
    const newProduct = new Product(product)

    try{
        await newProduct.save();
        return res.status(201).json({ success:true, message: "Product created successfully" });
    }
    catch(error) {
        console.error(error.message);   
        return res.status(500).json({ success:false, message: error.message });
    }
}