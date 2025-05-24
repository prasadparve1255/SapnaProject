import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

function UseMemo() {
    const [count, setCount] = useState(10)
    const[item,setItem]=useState(0)
    const mul=useMemo(function multiCount()
    {
        console.log("Multicount")
      return item*10
    
    },[item])


  return (
 <>
    <div style={{textAlign:"center"}}>
        <h3>{count}</h3>
        <button className="btn btn-success" onClick={()=>setCount(count+1)}>Increment Count</button>
        <br></br><br></br>
       
        <button className="btn btn-warning" onClick={()=>setItem(item+1)}>Increment Item </button>
        <h3>{item}</h3>
       
        <p>MultiCount: {mul}</p>
    </div>
 </>
  )
}

export default UseMemo


