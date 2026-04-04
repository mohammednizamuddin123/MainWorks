const express = require("express")
const app =express()
const cors=require("cors")

app.use(cors())
app.use(express.json())
 
let users=[
    {
        id:1,
        name:"mammuty",
        age: 74
    },
    {
        id:2,
        name:"mohanlal",
        age: 61
    },
    {
        id:3,
        name:"dileep",
        age: 53
    },
]
// get all users

app.get("/users",(req,res)=>{
    res.send(users)
})
//get one user

app.get("/users/:id",(req,res)=>{
    let id =req.params.id
    for (let i=0;i<users.length;i++){
        if(users[i].id== id){
            user=users[i]
        }
    }
    if (user==null){
        res.send("user not found")
    }else{
        res.send(user)
    }
})
//create new user

app.post("/users",(req,res)=>{
    let newUser={
        id: users.length+1,
        name: req.body.name,
        age: req.body.age
    }
    users.push(newUser)
    res.send({newUser,message:"user created"})
})

// update a user(put)

app.put("/users/:id",(req,res)=>{
    let updateUser=null ;
    for (let i=0;i<users.length;i++){
        if (users[i].id==req.params.id){
            if(req.body.name){
                users[i].name=req.body.name
            }
            if(req.body.age){
                users[i].age=req.body.age
            }
            updateUser=users[i]
        }
    }
    if (updateUser ==null){
        res.send("User Not Found ")
    }else{
        res.send({users,message:"User Updated"})
    }
    
})

app.delete("/users/:id",(req,res)=>{
    let newUsers=[] ;
    for (let i=0;i<users.length;i++){
        if (users[i].id!=req.params.id){
            newUsers.push(users[i])
        }
    }

    if(newUsers.length != users.length){
        users=newUsers
    res.send({users,message:"User Deleted"})
    }else{
        res.send("User Not Found")
    }
})
app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000`);
    
})