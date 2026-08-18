import express from 'express'
import dotenv from 'dotenv'
import dbconnect from './config/db.js';
import authrouter from './routes/auth.route.js';
dotenv.config()
dbconnect()

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("Welcome");
})

app.use('/api/auth',authrouter);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Running at http://localhost:${PORT}`);
})