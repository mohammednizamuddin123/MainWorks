const express = require("express")
const app =express()
const cors=require("cors")
const userRouter=require("./Routing/userRouter.js")


app.use(cors())
app.use(express.json())
 
app.use("/users",userRouter)

app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000`);
    
})