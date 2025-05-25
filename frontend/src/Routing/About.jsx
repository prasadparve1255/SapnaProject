import React from 'react';

function About() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '60px 30px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: 'linear-gradient(135deg, #d4c1ec 0%, #a0d8d3 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '40px 50px',
          borderRadius: '18px',
          maxWidth: '700px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
          textAlign: 'center',
          color: '#3a3a3a',
          lineHeight: '1.7',
          fontWeight: '500',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            fontWeight: '700',
            color: '#5e2a7e',
          }}
        >
          About Inventory System
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
          This Inventory Management System helps you track and manage your products easily and efficiently.
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
          You can add, edit, delete, and view stock in real time with a user-friendly interface.
        </p>
        <p style={{ fontSize: '1.2rem' }}>
          Built using the MERN stack, it's perfect for small and medium businesses to manage inventory digitally.
        </p>
      </div>
    </div>
  );
}

export default About;
