const mongoose = require('mongoose');
const {connectDb}=require('./config/db')
connectDb();

    const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        subject:{
            type: String,
            required: true,
        },
        message:{
            type:String,
            required:true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    });
    const User = mongoose.model('users', UserSchema);
    User.createIndexes();

    const express = require('express');
    const app = express();
    const cors = require("cors");
    console.log("App listen at port 5000");
    app.use(express.json());
    app.use(cors());
    
    app.get("/", (req, resp) => {
        resp.send("App is Working");
    });
    
    app.post("/register", async (req, resp) => {
        try {
            const user = new User(req.body);
            let result = await user.save();
            result = result.toObject();
            if (result) {
                delete result.password;
                resp.send(req.body);
                console.log(result);
            }
      } catch (e) {
            resp.send("Something Went Wrong");
        }
    });
    app.listen(5000);