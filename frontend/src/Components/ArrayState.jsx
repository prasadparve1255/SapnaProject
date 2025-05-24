// import React, { useState } from "react";
// import './ArrayState.css'

// const ArrayState = () => {
//     const [form,setForm]=useState({
//         name: "",
//         email: "",
//         password: "",
//     })
//     const[record,setRecord]=useState([])
//     const[err,setErr]=useState({

//     })

//     const submitHandler=(e)=>{
//      e.preventDefault()
//      setRecord([...record,form])
//      setForm({name:"",email:"",password:""})
//      console.log (record)

//     }

//     const handleChange=(e)=>{
//         setForm({...form, [e.target.name]: e.target.value})
//     }

//   return (
//     <>
//     <br></br>
//     <div className="container">
//       <h3 className="text-center text-success">Registration Form</h3>
//       <form onSubmit={submitHandler}>
//         <div>
//           <label>Username:</label>
//           <input type="text" name="name" value={form.name} onChange={handleChange}  />
 
//         </div>

//         <div>
//           <label>Email:</label>
//           <input type="email" name="email" value={form.email} onChange={handleChange} />
//         </div>

//         <div>
//           <label>Password:</label>
//           <input type="password"  name="password" value={form.password} onChange={handleChange} />
//         </div>
//         <button className="btn1" type="submit">Submit</button>

//         <br></br>
  

//       </form>
// <br></br>
// <div className="text-center " >
//     <table cellPadding={3} border="3" width="500px">
//         <thead>
//             <tr   className="text-success">
//                 <th>User Name</th>
//                 <th>Email</th>
//                 <th>Password</th>
//             </tr>
//         </thead>
//         <tbody>
//             {record.map((e, index) => (
//                 <tr key={index}>  
//                     <td>{e.name}</td>
//                     <td>{e.email}</td>
//                     <td>{e.password}</td>
//                 </tr>  
//             ))}
//         </tbody>
//     </table>
// </div>

//     </div>
//     </>
//   );
// };

// export default ArrayState;




import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const gotoStudents = () => {
    navigate('/stnds'); // Make sure this path exists in your Routes
  };

  return (
    <div
      style={{
        background: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)', // 💙 Cool blue gradient
        minHeight: '100vh',
        padding: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '20px',
          padding: '3rem',
          textAlign: 'center',
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
        }}
      >
        <h1
          style={{
            color: '#2c3e50',
            marginBottom: '1rem',
            fontSize: '2.5rem',
            textShadow: '1px 1px 3px #ccc'
          }}
        >
          Welcome to the Student Info Portal
        </h1>
        <p
          style={{
            color: '#555',
            fontSize: '1.2rem',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}
        >
          Explore detailed student profiles, their performance, and enrolled courses all in one place.
        </p>
        <button
          onClick={gotoStudents}
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            background: 'linear-gradient(to right, #6a11cb, #2575fc)', 
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
        >
          View Students
        </button>
      </div>
    </div>
  );
}

export default Home;

