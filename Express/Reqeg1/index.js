import express from 'express';

const app = express();

app.get("/search",(req,res)=>{
    let{name,age}=req.query;
    console.log(name,age);
    res.send(` name:${name},age:${age}  ;form submitted`)
    
})



app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
