import React from 'react'
import Child from './Child'
import { useState } from 'react'

function PropsAscall() {
    const[txt,setTxt]=useState()
    const[notifi,setNotifi]=useState(true)

    function recieveMsg(msg)
    {
     setTxt(msg)
    }
  return (
<>
<div className='container m-3 text-center'>
<p>Recieve message from  child:{txt}-</p>
<Child sendMsg={recieveMsg}></Child>
<button className="btn btn-success" onClick={()=>setNotifi(false)}>Clear Notification</button>

{
    notifi && <h2>You Have Some Notification </h2>
}


</div>

</>
  )
}

export default PropsAscall