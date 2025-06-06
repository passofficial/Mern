import express from 'express';
import dotenv from 'dotenv';
import mongoose, { get } from 'mongoose';
import Product from '../models/product.model.js'; // Assuming you have a product model defined in models/product.js
import {getAllProducts,createProduct} from '../controller/product.controller.js';

dotenv.config();
const router = express.Router();

router.get("/", async(req, res) => getAllProducts(req, res));
router.post("/", async(req,res) => createProduct(req, res)); 
router.patch("/", async(req,res) => {
    const {id} = req.params;
    const product = req.body; //user will send this data in the request body
    if(mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(400).json({ success:false, message: "Invalid product ID" });
    }
    try{
       const updatedProduct = await Product.findByIdAndUpdate(id,product);
       console.log(updatedProduct);
       return res.status(200).json({ success:true, message: "Product updated successfully" });

    }catch(error) {
        return res.status(500).json({ success:false, message: error.message });
        console.error(error.message);   
    }
});
router.delete("/:id", async(req,res) => {
   
    try{
        await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({ success:true, message: "Product deleted successfully" });
    }catch(error) {
        return res.status(500).json({ success:false, message: error.message });
        console.error(error.message);   
    }
});

export default router;