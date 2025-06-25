import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
   
    console.log(`mongodb connected !! DB HOST: ${connectionInstance.connection.host}`)
  } catch (error) {
    console.log("mongo db connections error", error);
  }
};

export default connectDB