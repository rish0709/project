import mongoose from "mongoose";
const User = new mongoose.Schema({

    name:String,
    DOB: String,
    Age: Number,
    Email: String,
    Department: String,
    Image: String
})

export const model = mongoose.model("UserData", User);
