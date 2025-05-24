import React from 'react';

function Students() {
  const students = [
    { id: 1, name: "Aarav Sharma", age: 20, grade: "A", course: "Computer Science" },
    { id: 2, name: "Diya Mehta", age: 19, grade: "B+", course: "Information Technology" },
    { id: 3, name: "Raj Patel", age: 21, grade: "A-", course: "Mechanical Engineering" },
    { id: 4, name: "Sneha Joshi", age: 22, grade: "B", course: "Electronics" },
    { id: 5, name: "Vivaan Reddy", age: 20, grade: "A+", course: "Civil Engineering" },
    { id: 6, name: "Isha Khan", age: 19, grade: "A", course: "Business Administration" },
    { id: 7, name: "Karan Malhotra", age: 23, grade: "B-", course: "Architecture" },
    { id: 8, name: "Meera Desai", age: 21, grade: "A", course: "Pharmacy" },
    { id: 9, name: "Aryan Gupta", age: 20, grade: "C+", course: "Mass Communication" },
    { id: 10, name: "Pooja Nair", age: 22, grade: "B+", course: "Biotechnology" },
    { id: 11, name: "Rohan Shetty", age: 20, grade: "A", course: "Data Science" },
    { id: 12, name: "Nisha Rao", age: 19, grade: "A-", course: "Artificial Intelligence" },
    { id: 13, name: "Yash Verma", age: 21, grade: "B+", course: "Cyber Security" },
    { id: 14, name: "Priya Singh", age: 20, grade: "A+", course: "Graphic Design" },
    { id: 15, name: "Ankit Jain", age: 22, grade: "B", course: "Finance" },
    { id: 16, name: "Sara D'Souza", age: 20, grade: "A", course: "Marketing" },
    { id: 17, name: "Aditya Kulkarni", age: 23, grade: "B-", course: "Robotics" },
    { id: 18, name: "Neha Bhatt", age: 19, grade: "B+", course: "Environmental Science" },
    { id: 19, name: "Mohit Chauhan", age: 21, grade: "C", course: "Law" },
    { id: 20, name: "Tanya Roy", age: 20, grade: "A-", course: "Psychology" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: 'dodgerblue' }}> Students Data</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
        {
          students.map((student) => (
            <div  key={student.id} style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '15px',
              width: '250px',
              backgroundColor: '#f0f8ff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3>{student.name}</h3>
              <p><strong>Age:</strong> {student.age}</p>
              <p><strong>Grade:</strong> {student.grade}</p>
              <p><strong>Course:</strong> {student.course}</p>
              <p><strong>ID:</strong> {student.id}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Students;
