
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const Connection = async () => {
    try {
        mongoose.connect(`${process.env.URI}`);
        console.log("Connected to Database");
    } catch(err) {
        console.log("Error: " + err);
    }
}

Connection()  ;