import express from 'express';
import cors from 'cors';
import { connectToMongoose } from './configurations/mongoose.config.js';
import { createEmployeeController, getUsersController, deleteUsersController, filterRecordsController, sortRecordsController } from './controllers/user.controller.js';
import multer from 'multer';
import path from "path";
const app = express();

app.use(cors());


app.use(express.json());
// app.get("/", (req, res) => {
//     res.send("home page");
//     console.log("in server");
// });

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './backend/client/images/profile');
    },
    filename : (req, file, cb) =>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer(storage);


app.post("/create", upload.single("image"), async(req, res) => {
    console.log("in create route in api");
    createEmployeeController(req, res);
});

app.get("/read", (req, res) => {
    getUsersController(req, res);
});

app.delete("/delete/:id", (req, res) => {
    deleteUsersController(req, res);
});

app.get("/filter/:department", (req, res) => {
    filterRecordsController(req, res);

})

app.get("/sort/:field", (req, res) => {
    sortRecordsController(req, res);
})
app.listen(7000, () => {
    connectToMongoose();
    console.log("server is started on port 7000");

})

