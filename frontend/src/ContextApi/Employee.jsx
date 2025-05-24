import React from 'react';

function Employee() {

  const employees = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', salary: '$80,000' },
    { id: 2, name: 'Jane Smith', position: 'UI/UX Designer', salary: '$70,000' },
    { id: 3, name: 'Alice Johnson', position: 'Project Manager', salary: '$90,000' }
  ];

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h3 style={{color:"purple"}}>Employee Details</h3>
      <table  style={{margin:"auto"}} border="1" cellPadding="10" cellSpacing="0">
        <thead style={{color:"green"}}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr >
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
