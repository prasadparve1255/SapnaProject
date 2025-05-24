import React from 'react';

function User() {
  const Data = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin'
  };

  return (
    <div style={{ padding: '20px', border: '1px solid black', borderRadius: '8px', maxWidth: '300px', margin: ' 100px auto' }}>
      <h2 style={{color:"lightcoral"}}>User Profile:-</h2>
      <p><strong>Name:</strong> {Data.name}</p>
      <p><strong>Email:</strong> {Data.email}</p>
      <p><strong>Role:</strong> {Data.role}</p>
    </div>
  );
}

export default User;
