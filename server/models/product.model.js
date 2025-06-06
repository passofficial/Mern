import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: { 
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);

export default Product;
// This code defines a Mongoose schema for a Product model with fields for name, price, and image.
// The name is a required string, the price is a required number with a minimum value of 0, and the image is a required string.
// The schema also includes timestamps to track when the product was created and last updated.
// The Product model is then exported for use in other parts of the application.
// This code defines a Mongoose schema for a Product model with fields for name, price, and image.
// The name is a required string, the price is a required number with a minimum value of 0, and the image is a required string.
// The schema also includes timestamps to track when the product was created and last updated.
// The Product model is then exported for use in other parts of the application.
// This code defines a Mongoose schema for a Product model with fields for name, price, and image.