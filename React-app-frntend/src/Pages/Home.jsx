import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navTo =useNavigate()
  function toUsers(){
    navTo("/users")
    
  }
  function toProduct(){
    navTo("/product")
    
  }
  return (<>
   <button onClick={toUsers}> Go to Users</button>
   <h1>----------------------</h1>
   <button onClick={toProduct}> Go to Product</button>
  </>
  )
}

export default Home
