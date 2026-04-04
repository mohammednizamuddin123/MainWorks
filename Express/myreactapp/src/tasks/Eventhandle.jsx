import React from 'react'

function Eventhandle() {
    function btnHandle(){
        alert("Button Clicked")
    }
  return (
    <>
    <button onClick={btnHandle}>Click Me</button></>
  )
}

export default Eventhandle