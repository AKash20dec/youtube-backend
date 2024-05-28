import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})


connectDB()










/* METHOD 1 To connect to DB

import express from "express"
const app = express()

( async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error: ", error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on Port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ",error)
        throw err
    }
})() */