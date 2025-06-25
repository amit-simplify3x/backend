
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path:"./env"
})


connectDB()
.then(
    ()=>{
      
    app.listen(process.env.PORT||8000,()=>{
        console.log(`sercer is runnig at port :${process.env.PORT}`)
    })
    }
)
.catch((error)=>{
    console.log("mongodb connection failed!!!",err)
})