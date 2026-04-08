const express=require("express")

const router=express.Router()

let products=[
    {
        id:1,
        name:"Iphone 11",
        price: 31100,
        image:"productimages/iphone11.png"
    },
    {
        id:2,
        name:"Iphone 12 pro",
        price: 42000,
        image:"productimages/iphone12pro.png"
    },
    {
        id:3,
        name:"Iphone 13 pro max",
        price: 55600,
        image:"productimages/iphone13promax.png"
    },
    {
        id:4,
        name:"Iphone 15 pro max ",
        price: 62100,
        image:"productimages/iphone15promax.png"
    },
    {
        id:5,
        name:"Iphone 17 pro max",
        price: 121000,
        image:"productimages/iphone17promax.png"
    }
]

router.get("/",(req,res)=>{
    res.send(products)
})
//get one user

router.get("/:id",(req,res)=>{
    let id =req.params.id;
    let product;
    for (let i=0;i<products.length;i++){
        if(products[i].id== id){
            product=products[i]
        }
    }
    if (user==null){
        res.send("product not found")
    }else{
        res.send(product)
    }
})
//create new user

router.post("/",(req,res)=>{
    let newProduct={
        id: products.length+1,
        name: req.body.name,
        price: req.body.price,
        image:req.body.image
    }
    while(products.some(el=>el.id==newProduct.id)){
        newProduct.id++
    }
    products.push(newProduct)
    res.send({newProduct,message:"product created"})
})

// update a user(put)

router.put("/:id",(req,res)=>{
    let updateProduct=null ;
    for (let i=0;i<products.length;i++){
        if (products[i].id==req.params.id){
            if(req.body.name){
                products[i].name=req.body.name
            }
            if(req.body.price){
                products[i].price=req.body.price
            }
            
            if(req.body.image){
                products[i].image=req.body.image
            }
            updateProduct=products[i]
        }
    }
    if (updateProduct ==null){
        res.send("Product Not Found ")
    }else{
        res.send({updateProduct,message:"Product Updated"})
    }
    
})

router.delete("/:id",(req,res)=>{
    let newProducts=[] ;
    let deletedProduct=null;
    for (let i=0;i<products.length;i++){
        if (products[i].id!=req.params.id){
            newProducts.push(products[i])
        }
        if(products[i].id==req.params.id){
            deletedProduct=products[i]

        }

    }

    if(newProducts.length != products.length){
        products=newProducts
    res.send({deletedProduct,message:"Product Deleted"})
    }else{
        res.send("Product Not Found")
    }
})

//new changes


module.exports=router