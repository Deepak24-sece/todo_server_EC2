//we will handle connectivity b/w express and mongodb

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("db has been connected");
    } catch(err) {
        console.error(err);
    }
}

export default connectDb;  