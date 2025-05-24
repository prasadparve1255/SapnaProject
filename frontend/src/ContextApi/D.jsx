import React , { useContext }  from 'react'
import {data,data1} from './A'


function D() {
    const name=useContext(data)
    const age=useContext(data1)
    
  return (
    <>
 
      <div>D</div>
      <p>My Name is:- {name} and I am {age} years old </p> 
    </>
  
  )
}

export default D