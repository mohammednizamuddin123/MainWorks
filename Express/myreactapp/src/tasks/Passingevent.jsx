import React from 'react'

function Passingevent() {
    function handleBtn(n,i){
        alert(`hello${n}, id:${i}`)

    }
  return (
    <>
    <h1>name:nizam</h1>
    <p>id:5</p>
    <button onClick={()=>{handleBtn("nizam",5)}}></button>
    </>
  )
}

export default Passingevent