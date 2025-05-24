import React from 'react'
import { useParams,Link } from 'react-router-dom'

function Details() {
    const {stud_id} = useParams();

    const students = [
        { stud_id: 1, name: "Amit", age: 20, marks: 85 },
        { stud_id: 2, name: "Priya", age: 19, marks: 92 },
        { stud_id: 3, name: "Raj", age: 21, marks: 78 },
        { stud_id: 4, name: "Sneha", age: 20, marks: 88 },
        { stud_id: 5, name: "Vikram", age: 22, marks: 74 }
      ];
  return (
   <>
   <div>
<h3>Students Details:-</h3>
<div style={{background:"lightgray",margin:"20vh auto",width:"250px",padding:"6px"}}>
    {students.map((e) => {
         if(e.stud_id==stud_id)
         {
        return (
            <>
            <p>Students Name:- {e.name}</p>
            <p>Students Age:- {e.age}</p>
            <p>Students Marks:- {e.marks}</p>
            </>
        )
    }
    })
}

</div>
<Link to="/help"><h4>Back To Help </h4></Link>
</div>


   </>
  )
}

export default Details