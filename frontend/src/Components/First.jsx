// import React, { useState } from "react";

// function First() {
//   const [first, setFirst] = useState("");
//   const [second, setSecond] = useState("");

//   function handleFirst(e) {
//     setFirst(e.target.value);
//   }

//   function handleSecond(e) {
//     setSecond(e.target.value);
//   }

//   return (
//     <>
//       <br></br>
//       <div
//         style={{ margin: "auto",textAlign: "center", background: "lightcyan",  width: "250px",
//           border: "2px solid black",borderRadius:'10px'
         
//         }}
//       >
//         <label>Enter First Name:</label>
//         <input type="text" onChange={handleFirst} value={first} />
//         <br />
//         <br />
//         <label>Enter Last Name:</label>
//         <input type="text" onChange={handleSecond} value={second} />
//         <br />
//         <br />
//         <h2>Result: {first} {second}</h2>
//       </div>
//     </>
//   );
// }

// export default First;

import React from 'react'
import { useState ,useEffect} from 'react';

function First() {

const[time,setTime]=useState(new Date().toLocaleTimeString());
const[date,setDate]=useState(new Date().toLocaleDateString())


useEffect(()=>{
  const interval=setInterval(()=>{
    setTime(new Date().toLocaleTimeString())
    setDate(new Date().toLocaleDateString())
  },1000)
  return clearInterval(interval)
},[])
 


  return (
    <>
    <br></br>
  <div  style={{ margin: "auto",textAlign: "center", background: "lightgray",  width: "250px", border: "2px solid black",borderRadius:'10px' }} >

 <h1>Current Time:-</h1>
 <p>{time}</p>
 <h2>Today Date:-</h2>
 <p>{date}</p>

  </div>
  </>
  )
}

export default First
