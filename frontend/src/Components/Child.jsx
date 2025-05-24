import React from 'react'

function Child(props) {
  return (
<>
<div className="text-center">
<h3>Child Component:</h3>
<button className= "btn btn-primary" onClick={()=>props.sendMsg("Hey Students,welcome to props as callback program")}>Send Data </button><br></br><br></br>
</div>
</>
  )
}

export default Child