import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Users() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '60px',
          backgroundColor: '#dbeafe',
          minHeight: '100vh',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            width: '350px',
            marginBottom: '30px',
          }}
        >
          <h3 style={{ marginBottom: '20px' }}>User Authentication</h3>

          <div style={{ marginBottom: '20px' }}>
            <Link to="signup">
              <button className="btn btn-success" style={{ marginRight: '10px' }}>
                Signup
              </button>
            </Link>

            <Link to="login">
              <button className="btn btn-info">Login</button>
            </Link>
          </div>

          <Link to="/pro">
            <button className="btn btn-primary">Back To Products</button>
          </Link>
        </div>

        <div style={{ width: '100%' }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Users;
