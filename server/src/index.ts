import express from "express";
require('dotenv').config();
const cors=require('cors');
const app=express();
app.use(cors());
const port = process.env.PORT ||3200
app.get('/',(req,res)=>{
    res.json({
        sucess:true,
        message:"testing backend reload"
    })
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})