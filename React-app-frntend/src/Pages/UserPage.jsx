import React, { useEffect, useState } from 'react'
import axios from "axios"

function UserPage() {

    
  const [users,setUsers]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/users")
    .then(res=>{setUsers(res.data)
      console.log(res.data)
    })
    .catch(err =>console.log(err))
    
  },[])
  useEffect(()=>{
    console.log(users)
    
  },[users])

async function addNewUser() {
  let name= prompt("Enter User Name")
  let age= prompt("Enter User Age")
  if (!name || !age) return;

  let res =await axios.post("http://localhost:3000/users",{name,age});
  alert(res.data.message)
  setUsers(prev =>[...prev,res.data.newUser])
  
}
async function updateUser(id) {
  let name= prompt("Enter User Updated Name")
  let age= prompt("Enter User Updated Age")
  if (!name || !age) return;

  let res =await axios.put(`http://localhost:3000/users/${id}`,{name,age});
  alert(res.data.message)
  setUsers(res.data.users)
  
  
}

async function deleteUser(id) {
  if (!confirm(`${id} User Delete Confirm`))return
  let res= await axios.delete(`http://localhost:3000/users/${id}`)
  if (!res.data.users){
    alert(res.data)
  }else{
    setUsers(res.data.users)
  }
  
}
return(
  <div>
  <button onClick={addNewUser}>Add New User </button>
  <ul>
  {
     users.map(u=><><li key={u.id}> id:{u.id}|name:{u.name}|age:{u.age}</li>
    <button onClick={()=>{updateUser(u.id)}}>Edit</button>
    <button onClick={()=>{deleteUser(u.id)}}>Delete</button>

    </> )
  }

    </ul>
  </div>)
}



export default UserPage
