const express=require("express")
const bodyparser=require('body-parser')
const mongoose = require("mongoose")
const schema1 = require("./models")
const app= express()
app.use(bodyparser.json())
const databaseurl="mongodb://127.0.0.1:27017/student"
mongoose.connect(databaseurl,{ useNewUrlParser: true } ,(err)=>{
if (!err)
console.log("database connected")
})

app.post("/",async (req,res)=>{
    try{
        //console.log(req.body);
        student = new schema1({
            Name:req.body.Name,
            Age:req.body.Age,
            Usn:req.body.Usn,
        })
        student=await student.save()
        res.json(student)
       res.json({message: req.body});
    }
    catch(err){
        res.json({
            message:err
        })
    }
})
app.get("/:Age",async (req,res)=>{
    try{
        result=await schema1.find({
            Age:req.params.Age
        })
        res.json(result)
    }
    catch(err){
        message:err
    }
})
app.get("/",async (req,res)=>{
    try{
        result2= await schema1.find()
        res.json(result2)
    }

    catch(err){
        message:err
    }
})
app.listen(3000)

