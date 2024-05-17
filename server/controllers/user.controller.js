import { storeUserDataInDatabase, readUserData, updateUserData, deleteUserData, filterRecordsByDepartment, sortRecords  } from "../repositories/user.repo.js";

export const createEmployeeController = async(req, res) => {
    
    const {name, dob, age, email, department, image} = req.body;
    
    const result = await storeUserDataInDatabase(name, dob, age, email,department, image);
    if (result){
        console.log("data stored in database succesfully controller");
    }
    else{
        console.log("error in create api");
    }


}

export const getUsersController = async(req, res) => {
    const result = await readUserData();
    if (result){
        res.send(result);
        console.log("user data recieved in controller");
    }
    else{
        console.log("error fetching data in controller");
    }
}

export const deleteUsersController = async(req, res) => {
    const id = req.params.id;
    const result = await deleteUserData(id);  //have to update after
    if (result){
        res.send(result);
        console.log("user data deleted in controller");
    }
    else{
        console.log("error deleting data in controller");
    }
}

export const filterRecordsController = async(req, res) => {
    const department = req.params.department;
    console.log(department, "Department name in controller");
    const result = await filterRecordsByDepartment(department);
    res.send(result);

}

export const sortRecordsController = async(req, res) => {
    const field = req.params.field;
    const results = await sortRecords(field);
    res.send(results);

}
