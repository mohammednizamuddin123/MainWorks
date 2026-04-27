const mongoose=require("mongoose")
const express= require("express")
const User=require("./Model/User")
const app=express()
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/mernstackDB")
.then(()=>{
    console.log("DB Connected");
    
})
.catch((err)=>{
    console.log(err);
    
})
app.post("/users",async (req,res)=>{
    // const user=req.body 
    const result=await User.create(req.body)
    res.json({
        message:"User Created",
        user:result

    })

})
 app.listen(3000,()=>{
    console.log("http://localhost:3000");
    
 })