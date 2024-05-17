import mongoose from "mongoose";
import { model } from "../models/user.model.js";

export const storeUserDataInDatabase = async(name, DOB, Age, Email,Department,Image) => {
    const user = new model({name, DOB, Age, Email,Department,Image});
    await user.save();
    console.log(user, "user data in repo");
    return true;

}

export const readUserData = async() => {
    const user = await model.find().limit(10);
    console.log(user, "data received from database in repo");
    return user;
}

export const updateUserData = async(email, updatedData) => {
    const emp = await model.find({email});
    try{
        const updatedData = await model.updateOne({email}, {updatedData});
        return true;
    }
    catch(err){
        console.log(err, "error updating data in repo");
        return false;
    }
    

}

export const deleteUserData = async(id) => {
    console.log(id, "deleted id in repo");
    try{
    await model.findByIdAndDelete(id);;
    const users = await model.find();
    console.log(users, "all users in delete repo");

    return users;
    }
    catch(err){
        console.log(err, "error deleting record in repo");

    }
}

export const filterRecordsByDepartment = async(department) => {
    const results = await model.find({Department: department});
    console.log(results, "filtered records in repo");
    return results;
}

export const sortRecords = async(field) => {
    const results = await model.find().sort({[field]:1})
    return results;
}