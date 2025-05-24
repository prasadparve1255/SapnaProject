import React from 'react';

function About() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '60px 30px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: 'linear-gradient(135deg, #d4c1ec 0%, #a0d8d3 100%)', // pastel lavender to teal
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
            fontSize: '3rem',
            marginBottom: '25px',
            fontWeight: '700',
            color: '#5e2a7e', // deep purple
            letterSpacing: '1.5px',
          }}
        >
          About Inventory Management System
        </h1>
        <p style={{ fontSize: '1.3rem', marginBottom: '20px' }}>
          Efficiently manage your products, stock, and sales with our simple and powerful inventory system.
        </p>
        <p style={{ fontSize: '1.3rem' }}>
          Built using the MERN stack, this system provides real-time tracking and seamless user experience.
        </p>
      </div>
    </div>
  );
}

export default About;
