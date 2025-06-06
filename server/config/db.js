import moongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import 'colors';


export const connectDB = async() => {
    console.log('Attempting to connect to MongoDB...'); // Added log
    try{
        console.log('Connecting with URI:', process.env.MONGO_URI); // Added log
        const conn = await moongoose.connect(process.env.MONGO_URI);
        console.log('mongoose.connect() call completed.'); // Added log
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    }
    catch(error){
        console.error(`Error: ${error.message}`.red.bold);
        process.exit(1); // Exit the process with failure, 1 indicates an error, 0 means success
    }

}