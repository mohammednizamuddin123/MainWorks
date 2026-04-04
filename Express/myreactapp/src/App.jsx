import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error.message);

      }
      );
  }, []);
  let [name, setName] = useState("");
  let [mark, setMark] = useState("");

  async function addNewUser() {
    let newUser = await axios.post("http://localhost:3000/users", {
      name: name,
      mark: Number(mark)
    });
    setUsers([...users, newUser.data]);
    setName("")
    setMark("")
  }
  async function handleEdit(id) {
    const newMark = prompt("Enter Update Mark");
    let updateUser = await axios.patch(`http://localhost:3000/users/${id}`, {
      mark: Number(newMark)
    })
    setUsers(
      users.map((u) => {
        return u.id === id ? updateUser.data : u;
      })
    );
  }
  async function handleDelete(id) {
    let conf=confirm("Delete This User");
    if(!conf) return;

    await axios.delete(`http://localhost:3000/users/${id}`)
    setUsers(users.filter((u)=>{return u.id!=id}))

    
  }
  return (
    <>
      <h1>Axios</h1>
      <h2>Get Users</h2>
      <ul>
        {users.map((user, i) => {
          return (
            <li key={i}>
              Name:{user.name}|Mark:{user.mark}
              <button onClick={() => { handleEdit(user.id) }}>Edit</button>
              <button onClick={() => { handleDelete(user.id) }}>Delete</button>

            </li>
          )
        })}
      </ul>
      <br />
      <br />

      <input type="text" placeholder='Enter Name' onChange={(e) => { setName(e.target.value) }} value={name} />
      <br /> <br />

      <input type="number" placeholder='Enter Mark' onChange={(e) => { setMark(e.target.value) }} value={mark} />
      <br /> <br />

      <button onClick={addNewUser}>Add User</button>
    </>
  )
}

export default App