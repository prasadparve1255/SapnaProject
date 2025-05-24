import React, { useState } from 'react';

function StuRe() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    course: ''
  
  });

  const inputHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}, for your enquiry!`);
    setForm({ name: '', email: '', course: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Student Registration Form</h3>
      <form onSubmit={submitHandler} style={styles.form}>
        <label style={styles.label}>Name:</label>
        <input type="text" name="name" value={form.name} onChange={inputHandler} style={styles.input} required />

        <label style={styles.label}>Email:</label>
        <input type="email" name="email" value={form.email} onChange={inputHandler} style={styles.input} required />

        <label style={styles.label}>Course:</label>
        <select name="course" value={form.course} onChange={inputHandler} style={styles.input} required>
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="MERN">MERN</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
        </select>

        <label style={styles.label}>Message:</label>
        <textarea name="message" value={form.message} onChange={inputHandler} style={styles.textarea} required></textarea>

        <button type="submit" style={styles.button}>Submit Enquiry</button>
      </form>
    </div>
  );
}

// CSS-in-JS for better styling
const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '2px solidrgb(108, 140, 116)',
    borderRadius: '8px',
    boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
  },
  title: {
    color: 'green',
    textAlign: 'center',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: 'bold',
    marginTop: '10px',
  },
  input: {
    padding: '8px',
    marginTop: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '8px',
    marginTop: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '60px',
  },
  button: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default StuRe
