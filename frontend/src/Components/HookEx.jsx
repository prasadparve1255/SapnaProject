import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function HookEx() {

    const[count,setCount]=useState(0);
    const[data,setData]=useState(10)

    useEffect(()=>{
        // console.log("useEffect Hook is called");
        setTimeout(()=>{
            console.log("useEffect Hook is called after 2 seconds");
        },2000)
   //2nd argument in useEffect is dependency:-
    },[])
  return (
  <>
  <br></br>
  <div style={{textAlign:'center'}}>
    <h3>UseEffect example</h3>
    <p>Count:- {count}</p>
    <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Increment Count</button>
   <br></br><br></br>
    <button className="btn btn-warning" onClick={()=>setData(data+1)}>Increment Data:-</button>
    <p>Data:-{data}</p>
  </div>
  </>
  )
}

export default HookEx