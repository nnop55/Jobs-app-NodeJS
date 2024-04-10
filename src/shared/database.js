import mongoose from "mongoose";
import { dbParams } from "./config.js";

export async function connectToDb() {
  try {
    const uri = `mongodb+srv://${dbParams["username"]}:${dbParams["pass"]}@cluster0.q0oqjga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
