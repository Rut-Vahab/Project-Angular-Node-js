import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
dotenv.config();
import cors from "cors"
import recipeRoute from "./routes/recipeRoute.js"
import usersRoute from "./routes/usersRoute.js"
import nodemailer from "nodemailer"
import bodyParser from "body-parser";
import mailRouter from "./routes/mailRoute.js";
const app = express()
app.use(cors())
app.use(express.json()); 
// app.use(express.static('public'))
// app.use(express.static('uploads'))
app.use('/uploads', express.static('uploads'));


app.use('/recipe',recipeRoute)
app.use('/users',usersRoute)
app.use(mailRouter)


const MONGO_URI = process.env.MONGO_URI || 'mongodb://0.0.0.0:27017/project';
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("is runing on port: "+PORT);    
})

mongoose.connect(MONGO_URI).
then(()=>{
console.log("is connect");
}).
catch(()=>{
    console.log("err");
})










