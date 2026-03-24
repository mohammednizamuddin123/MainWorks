const { log } = require("console")
const http= require("http")
const fs= require ("fs")
const path=require ("path")


const server = http.createServer((req,res)=>{
    let filePath=""
    switch(req.url){
        case "/":filePath=path.join("pages","index.html"); break;
        case "/about":filePath=path.join("pages","about.html"); break;
        case "/contact":filePath=path.join("pages","contact.html"); break;
        default :filePath=path.join("pages","notfound.html");
    }
    

    
    
    fs.readFile(filePath,(err,data)=>{
    if(err) return res.end("file read error!")
    
        res.writeHead(200,{"content-type":"text/html"})
        res.end(data)
});
})


server.listen(3001,()=>{
    console.log("server running in http://localhost:3001/");
    
})