import React from 'react'
import { useState } from 'react'

function FormEx() {
    const [number, setNumber] = useState(
        {
            fnumber: "",
            snumber: "",
            tnumber: ""
        })
    const [status, setStatus] = useState(false)
    const [largets, setLargest] = useState(null)

    const inputHandler = (e) => {
        setNumber({ ...number, [e.target.name]: e.target.value })
    }


    const submitHandler = (e) => {
        e.preventDefault()
     

        const fNum = Number(number.fnumber)
        const sNum = Number(number.snumber)
        const tNum = Number(number.tnumber)

        const max = Math.max(fNum, sNum, tNum)
        setLargest(max)


        if (!number.fnumber || !number.snumber || !number.tnumber) {
            alert("Please fill all the boxes");
            return;
        }
        else{
            setStatus(true)
        }
  
    }

    return (
        <>
            <div className="container mt-5">
                <div className="card p-4 shadow-lg w-25 m-auto">

                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label className="form-label">First Number</label>
                            <input type="number" className="form-control" name="fnumber" onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Second Number</label>
                            <input type="number" className="form-control" name="snumber" onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Third Number</label>
                            <input type="number" className="form-control" name="tnumber" onChange={inputHandler} />
                        </div>
                        <div className="text-center">

                            <button type="submit" className="btn btn-success">Show</button>
                        </div>

                    </form>

                    {
                        status ? <>
                            <p> Value of First Number:-{number.fnumber}</p>
                            <p> Value of Second Number:-{number.snumber}</p>
                            <p> Value of Third Number:-{number.tnumber}</p>
                            <h4 className="text-primary">Largest Number: {largets}</h4>
                        </> : ""
                    }
                </div>
            </div>

        </>
    )
}

export default FormEx