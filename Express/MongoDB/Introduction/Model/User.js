const mongoose=require("mongoose")
const userSchema= new mongoose.Schema({
    name:{type:String,required:true,maxLength:15,minLength:3},
    age:{type:Number,required:true,validate:{validator:v=>v>=18,message:props=>`must age 18 ${props.value}`}},
    email:{type:String,required:true,unique:true,index:true,match:/.+\@.+\..+/},
    password:{type:Number,required:true},
    role:{type:String,default:"user"},
    courses:{type:String,enum:["python","javascript","html","css"]}
})
module.exports=mongoose.model("users",userSchema)