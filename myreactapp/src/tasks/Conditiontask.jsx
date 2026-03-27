import React from 'react'
import Condition from '../components/condition'

function Conditiontask() {


    let loginAdmin = true;
    return (
        <Condition role={loginAdmin ? "Admin" : "User"} />
    )
}

export default Conditiontask