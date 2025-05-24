import React, { useState } from "react";

function NewOne() {
  const [student, setStudent] = useState([
    { name: "John", age: 23 },
    { name: "Jane", age: 21 },
    { name: "Jim", age: 22 },
    { name: "Sapna", age: 20 },
    { name: "Shubham", age: 19 },
    { name: "Rahul", age: 31 },
  ]);

  const [status, setStatus] = useState(false);

  const showHandler = () => {
    setStatus(true);
  };

  const deleteHandler = (index) => {
    const updatedStudents = student.filter((_, i) => i !== index);
    setStudent(updatedStudents);
  };

  return (
    <>
      <br />
      <div style={{ textAlign: "center" }}>
        <button className="btn btn-success" onClick={showHandler}>
          Show Data
        </button>

        {status && (
          <table
            border="1"
            style={{
              width: "50%",
              margin: "20px auto",
              borderCollapse: "collapse",
              textAlign: "center",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#28a745", color: "white" }}>
                <th style={{ padding: "10px" }}>Name</th>
                <th style={{ padding: "10px" }}>Age</th>
                <th style={{ padding: "10px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {student.map((stu, index) => (
                <tr key={index}>
                  <td style={{ padding: "10px" }}>{stu.name}</td>
                  <td style={{ padding: "10px" }}>{stu.age}</td>
                  <td style={{ padding: "10px" }}>
                    <button className="btn btn-danger" onClick={() => deleteHandler(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default NewOne;
