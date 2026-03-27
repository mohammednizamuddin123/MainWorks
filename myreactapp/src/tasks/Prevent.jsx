import React from 'react'

function Prevent() {
    function formHandle(e){
        e.PreventDefault()}
    
  return (
    <>
    <form onSubmit={formHandle}>
        <input type="text" name='username' />
        <input type="email" name='useremail' />
        <button type='submit'>Submit</button>
        </form>    
        </>
  )
}

export default Prevent