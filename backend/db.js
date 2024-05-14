import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const Connection = async () => {
    try {
        mongoose.connect(`${process.env.URI}`, {dbName : "bookstoreMS"});
        console.log("Connected to Database Successfully.");
    } catch(err) {
        console.log("Error: " + err);
    }
}

Connection()  ;