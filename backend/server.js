const express = require('express')
const app = express()
const mongoose = require("mongoose");
const cors = require('cors')
const PORT = 8000
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://Bidhan:12345@cluster0.dwgvtnp.mongodb.net/users')
.then(()=>console.log("DATABASE CONNECTED"))

const UsersModel = require('./model')
app.post("/save",async(req,res)=>{
    console.log(req.body)
    try{
        const user = UsersModel(req.body)
        await user.save();
        console.log("Data Sucessfully Saved")
        res.send("Sucesss")
    }catch(err){
        console.log(err)
    }

})

app.listen(PORT,()=>{
    console.log("Hello world")
})