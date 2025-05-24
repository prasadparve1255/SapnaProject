
import React, { useState } from 'react';
import './Practice.css';

function Practice() {
  const [form, setForm] = useState({ name: '', email: '' ,age:''});

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Name: ${form.name}, Email: ${form.email},Age:${form.age}`);
  };

  const inputHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={inputHandler}
        value={form.name}
      />
      <input
        type="text"
        name="email"
        placeholder="Enter your Email"
        onChange={inputHandler}
        value={form.email}
      />
            <input
        type="text"
        name="age"
        placeholder="Enter your Age"
        onChange={inputHandler}
        value={form.age}
      />
      <div style={{textAlign:"center"}}>
      <button type="submit">Submit</button>
      </div>
 
    </form>
  );
}

export default Practice;
