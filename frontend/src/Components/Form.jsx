import React, { useState } from 'react'

function Form() {

    const [name, setName] =useState()
    const [age, setAge] =useState()
    const [city,setCity]=useState()
    const [result,setResult]=useState(false)



  //   const inputHandler= (e)=>{

  //  setName(e.target.value)
  //    }

  //    const inputHandler1=(e)=>{
  //       setAge(e.target.value)
  //    }

  //    const inputHandler2=(e)=> 
  //    {
  //    setCity(e.target.value)

  //    }


      const buttonHandler=()=>{
        console.log(`Name: ${name} Age: ${age}  City: ${city}`)
        setResult(true)
      }
  return (
<>
<br></br>
    <div  style={{ margin: "auto",textAlign: "center", background: "mistyrose",  width: "250px", border: "2px solid black",borderRadius:'10px' }} >

       <br></br> User Name:-<input type="text"  name="uname" onChange={(e)=>setName(e.target.value)}/>
        <br/><br></br>
        Age:-<input type="number"  name="age" onChange={(e)=>setAge(e.target.value)}/>
        <br/><br></br>
        City:-<input type="text" name="city" onChange={(e)=>setCity(e.target.value)}/><br></br>
        
        <br></br><button  className="btn btn-success" onClick={buttonHandler}>Show Result</button>

        {result ?<> 
        <p>User Name:-{name}</p>
        <p>Age:-{age}</p>
        <p>City:-{city}</p>
        </>:""
}
    </div>

</>
  )
}

export default Form