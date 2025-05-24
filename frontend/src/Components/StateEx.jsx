import React, { useState } from 'react'
// import './App.css'

function StateEx() {

    const [count,setCount]=useState(0)
    const [data,setData]=useState(10)
    const[sq,setSq]=useState(2)
    const [cub,setCube]= useState(3)
    const [first,setFirst]=useState()
    const [second,setSecond]=useState()



   
    function inc()
    {
        if(count>=10)
        {
            alert("sorry...u cant increase  the value")
            setCount(0)
        }
        else{
            setCount(count+1)
        }
    
    }

    function dec()
    {
    if(data<=0){
    
        alert("sorry...u cant decrease the  value")
        setData(10)
    }
    else
    { 
        setData(data-1)
    }
}

function square()
{

  setSq(sq*2)
}
  
function cube()
{

  setCube(cub*3)
}
function f1()
{
   setFirst(first*2)
}

function f2()
{
  setSecond(second*3)
}
function inputHandler(e, setter) {
  setter(Number(e.target.value)); 
}

  return (
<>
<br></br>
<div style={{margin:"auto",textAlign:'center',background:'lightgray',width:'230px',border:'2px solid black',borderRadius:'10px'}}>
   <br></br> <button onClick={inc}>Increment Value</button>
    <p>{count}</p>
    <button onClick={dec} >Decrement Value</button>
    <p>{data}</p>
   
    <button onClick={square}>Square</button>
   
    <h3>{sq}</h3>
    <button onClick={cube}>Cube</button>
    <h3>{cub}</h3>
 </div>
 <br></br>
 <div style={{margin:"auto",textAlign:'center',background:'lightgray',width:'230px',border:'2px solid black'}}>
   Enter First Number:- <input type="number"onChange={(e)=>inputHandler(e,setFirst)} ></input><br></br><br></br>
   Enter Second Number:- <input type="number"  onChange={(e)=>inputHandler(e,setSecond)}></input><br></br><br></br>
   <button className='btn btn-success' onClick={f1}>Square</button>&nbsp;
   <button   className='btn btn-success' onClick={f2}>Cube</button>&nbsp;
   <p><br></br><button className='btn btn-primary'>Result:-{first} {second}</button></p>
   </div>

   
    </>

  )
}

export default StateEx