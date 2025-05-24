import React, { useState } from 'react'

function Task() {

    const [name, setName] = useState()
    const [m1, setM1] = useState()
    const [m2, setM2] = useState()
    const [m3, setM3] = useState()
    const [total, setTotal] = useState()
    const [per, setPer] = useState()
    const[result,setResult]=useState(false)

    const inputHandler = (e) => {
        setName(e.target.value)
    }
    const inputHandler1 = (e) => {
        setM1(e.target.value)
    }
    const inputHandler2 = (e) => {
        setM2(e.target.value)
    }
    const inputHandler3 = (e) => {
        setM3(e.target.value)
    }


   const buttonHandler=()=>{
    let sum = parseInt(m1) + parseInt(m2) + parseInt(m3)
    setTotal(sum)
    let percentage = (sum / 300) * 100
    setPer(percentage)
    setResult(true)
   }
    return (
        <>
        <br></br>
            <div style={{ margin: "auto", textAlign: 'center', background: 'lightgray', width: '230px', border: '2px solid black',borderRadius:'10px' }}>
                User Name:- <input type="text" onChange={inputHandler} /><br></br><br></br>
                M1:-<input type="number" onChange={inputHandler1} /><br></br><br></br>
                M2:-<input type="number" onChange={inputHandler2} /><br></br><br></br>
                M3:-<input type="number" onChange={inputHandler3} /><br></br><br></br>
                <button className="btn btn-success"onClick={buttonHandler}>Show MarkSheet</button>
                {
                    result ? <>
                    <p>Name:-{name}</p>
                    <p>M1:-{m1}</p>
                    <p>M2:-{m2}</p>
                    <p>M3:-{m3}</p>
                    <p>Total:-{total}</p>
                    <p>Percentage:-{per}%</p>
                     </> :""
                }
            </div>
        </>
    )
}

export default Task