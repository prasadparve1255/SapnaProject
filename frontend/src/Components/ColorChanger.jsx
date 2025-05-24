import React from 'react'
import { useState } from 'react';

function ColorChanger() {
    const colors=["lightblue","pink","lightpink","purple","lightcyan","yellow","orange","green"];

    const[bgcolrs,setBgcolors]=useState("white");

    const buttonHandler=()=>{

      if(bgcolrs.length===colors.length)
      {
        alert("Colors are ended! Resetting...");
         setUsedColors([]);
        setBgcolors("white");
      }
      else{
        const bgindex=Math.floor(Math.random()*colors.length)
        setBgcolors(colors[bgindex]);
      }
    
    }

  return (
    <>
    <br></br>
   <div className="text-center" style={{ backgroundColor: bgcolrs, height: "30vh",width:"40vh",margin:"auto" }}>

        <h4>Click to Change Colors:-</h4>
        <button style={{margin:"50px"}} className="btn btn-success" onClick={buttonHandler}>Click</button>
    </div>
    </>
  
  )
}

export default ColorChanger
