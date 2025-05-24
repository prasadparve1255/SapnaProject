import React from 'react'
import { useState } from 'react'

function Tasky() {

    const [text,setTxt]=useState("")
    const maxLength=20;

    const textHandler=(e)=>{
        if(text.length < maxLength){
            setTxt(e.target.value)
        }
    }

    const resetHandler = () => {
        setTxt("React Application");
      };
    
    
  return (
 <>
 <div style={{ textAlign: "center", margin: " 20px auto ",backgroundColor:"lightgray",width:"250px",height:"150px" }}>
<input type="text" value={text} placeholder="type Something!" onChange={textHandler}

style={{ padding: "8px", width: "250px", border: "1px solid lightgry" }}
/>
<p>Character Count:{text.length} /{maxLength}</p>
      {text.length === maxLength && (
        <p style={{ color: "red", fontWeight: "bold" }}>Character limit reached!</p>
      )}
          <button className="btn btn-primary" onClick={resetHandler}       >  Reset
      </button>
 </div>
 </>
  )
}

export default Tasky