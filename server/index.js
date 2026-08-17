import express from 'express'
import dotenv from 'dotenv'
import dbconnect from './config/db.js';
dotenv.config()
dbconnect()

const app=express();

app.get("/",(req,res)=>{
    res.json("Welcome");
})

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Running at http://localhost:${PORT}`);
})