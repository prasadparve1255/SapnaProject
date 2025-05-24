import React from 'react'
import { useState } from 'react';
import './Practice.css'

function New() {
    const [students,setStudents]=useState([]);

    const inputHandler=()=>{
        const inputNames=prompt("Enter the names seperated by comma ")

        if(inputNames)
        {
            setStudents(inputNames.split(",")).map(name=>name.trim());

        }
    }

    const suffled=students.sort(() => 0.5 - Math.random())

  return (
   <>
   <hr/>
   <h3>Click to Add Names:</h3>
   <button onClick={inputHandler}> Add Names</button>

   <h3>Random Student List</h3>
 <ul>
    {
        suffled.map((name,index)=>(
       <li key={index}>{name}</li>     
        ) )
    }
 </ul>
   
   </>

  )
}

export default New