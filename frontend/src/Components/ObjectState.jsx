import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function ObjectState() {

    const [user, setUser] = useState({
        uname: "",
        email: "",
        pswd: ""
    })
    const[status,setStatus]=useState(false)

    const inputHandler = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })

    }

    const submitHandler = (e) => {
        e.preventDefault()
        setStatus(true)
    }

    return (
        <div className="container mt-5 rounded">
            <div className="card p-4 shadow-lg w-25 m-auto">
                <h3 className="text-center text-success">User Registration</h3>

                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label">User Name</label>
                        <input type="text" className="form-control" name="uname" onChange={inputHandler} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-control" name="email" onChange={inputHandler} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="pswd" onChange={inputHandler} required />
                    </div>
                    <div className="text-center">

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
        
                </form>
                {
                   status ? <>
                     <p>User Name:-{user.uname}</p>
                    <p>Email:-{user.email}</p>
                    <p>Password:-{user.pswd}</p>
                   </> :""
                }
              
            </div>
        </div>
    );
}

export default ObjectState;
