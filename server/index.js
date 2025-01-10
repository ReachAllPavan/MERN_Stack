const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserModel =require('./models/userModel.js')

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL).then(()=>{
    console.log("mongo DB is connected ");
    app.listen(PORT,()=>{
        console.log("server is running at port ",PORT)
    })
}).catch(err=>console.log(err));

app.post("/create",async (req,res) => {
    try {
        const {name,task,email,doubt,status}=req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }
        const newPost = new UserModel({name,task,email,doubt,status});
        const savedPost= await newPost.save();
        res.status(200).json(savedPost);

    } catch (error) {
        res.status(404).json({error:error.message})
    }
})

app.get("/send",async (req,res) => {
    try {
        const posts = await UserModel.find();
        res.json(posts);
    } catch (error) {
        console.log(error)
    }
})

app.get('/',(req,res)=>{
    res.json("Hi Myself Naga Pavan")
})