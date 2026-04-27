const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const app =express()
app.use(express.json())

const users=[]
const secret_key= "my_jwt_secret_key"


//register
app.post("/register",async(req,res)=>{
    let newUser=req.body
    newUser.password=await bcrypt.hash(newUser.password,10)
    newUser.id=users.length+1
    users.push(newUser)
    res.send("User Registered")
    console.log(users);
    })

    //login
    app.post("/login",async(req,res)=>{
        let{email,password}=req.body

        const user = users.find(users.email===email)
        if(!user) return res.send("User Not Found")

            const match = await bcrypt.compare(password,user.password)
            if(!match) return res.send("Wrong Password")

                //login succes

                const token = jwt.sign({email},secret_key)
                res.send(token)
})

function auth(req,res,next){
    const token =req.headers.token
    if(!token) return res.send("No Token")

        jwt.verify(token,secret_key,(err,data)=>{
            if(err) return res.send("Invalid Token")

                req.user=data
                next()
        })

}

app.get("/profile",auth,(req,res)=>{
const user = users.find(u=>u.email===req.user.email)
if(!user) return res.send("User Not Found")
    res.send(user)
})

app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000`);
})