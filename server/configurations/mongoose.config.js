
import mongoose from "mongoose";
export const connectToMongoose = async () => {
    try {
        await mongoose.connect("mongodb+srv://rishabhagrawal005:loveyoumom@cluster0.tkqcmkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Mongoose is connected.");
    } catch (err) {
        console.log(err)
        console.log("Failed To Connect To Mongoose.");
    }
}