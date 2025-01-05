import { tree } from "@node_modules/next/dist/build/templates/app-page";
import mongoose from "mongoose";

let isConnected = false // Track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("DB is already Connected");
        return;
    } 
    
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:'share_prompt',
            useNewURLParser: true,
            useUnifiedTopology:true,
        })
        isConnected = true;
        console.log("DB connected");
        

    } catch (error) {
        console.log(error);
        
    }
}