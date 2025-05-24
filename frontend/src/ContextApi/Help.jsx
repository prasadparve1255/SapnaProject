import React from 'react'
import { Link } from 'react-router-dom';

function Help() {
  const students = [
    { stud_id: 1,  },
    { stud_id: 2,  },
    { stud_id: 3, },
    { stud_id: 4,  },
    { stud_id: 5, }
  ];

  return (
    <>
      <div>
        <h3 className="text-success"> Help Page</h3>

        <div className="text-primary display-6 m-auto">
          {
            students.map((e) => {
              return (
                <>
                 <Link to={`${e.stud_id}`} ><p>{e.stud_id} </p></Link> 
                </>
              )
            })
          }

        </div>
      </div>
    </>

  )
}

export default Help