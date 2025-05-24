import React from 'react'
import { useRef } from 'react'

function RefHook() {

    const refElm= useRef()
    const refElm2 = useRef()


    const changeStyle=()=>
    {
        refElm.current.style.color="orange"
        refElm.current.style.fontFamily="monospace"
        refElm.current.style.textAlign="center"
        refElm.current.style.backgroundColor="lightgray"
    }

    const resetFun=()=>{
        refElm2.current.value=""
        refElm2.current.focus()
    
    }
    const texthandlr=()=>{
        refElm2.current.style.color="blue"
        refElm2.current.style.textTransform="uppercase"
    }
  return (
  <>
  <br></br>
  <div style={{textAlign:"center"}}>
    <h3 ref={refElm}>Heyy Students!!!</h3>
    User Name:- <input type="text" ref={refElm2} onChange={texthandlr} /> <br></br><br></br>
    <button className="btn btn-primary" onClick={resetFun} >Reset</button>
    <br></br><br></br>
   
    <button className="btn btn-warning" onClick={changeStyle}>Change Css Style</button>
  </div>
  </>
  )
}

export default RefHook