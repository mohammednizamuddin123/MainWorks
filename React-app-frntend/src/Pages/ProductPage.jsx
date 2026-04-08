import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import "../../src/Styling/ProductPage.css"
function ProductPage() {

  const [iphones,setIphones]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/products")
    .then(res=>setIphones(res.data))
    .catch(err=>console.log(err.message))
  })
  return (
    <>
    <div className='product-container'>

      {
        iphones.map((el,i)=>{
          return(<div>
            <img src={el.image} alt="" />
            <h4>{el.name}</h4>
           </div>
          )
        })
      }
      </div>
    </>
  )
}

export default ProductPage
