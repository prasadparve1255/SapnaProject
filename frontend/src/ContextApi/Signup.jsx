import React, { useState } from "react";

function SignupForm() {
  const [form, setForm] = useState({
    uname: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const inputHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // clear error as user types
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Validation
    if (!form.uname || !form.email || !form.password) {
      setError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Enter a valid email.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // If everything is valid
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <div style={{ textAlign: "center", marginTop: "10vh", color: "green" }}>
          <h2>Signup Successfully! </h2>
          <p className="text-primary">Welcome, {form.uname}!</p>
        </div>
      ) : (
        <div
          style={{
            maxWidth: "400px",
            margin: "10vh auto",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
          }}
        >
          <h2 style={{ textAlign: "center", color: "seagreen" }}>
            Signup Form
          </h2>

          {error && (
            <div
              style={{
                color: "red",
                marginBottom: "15px",
                textAlign: "center",
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={submitHandler}>
            <div style={{ marginBottom: "15px" }}>
              <label>User Name:</label>
              <br />
              <input
                type="text"
                name="uname"
                value={form.uname}
                autoComplete="username"
                onChange={inputHandler}
                style={{ width: "100%", padding: "8px" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Email:</label>
              <br />
              <input
                type="email"
                name="email"
                value={form.email}
                autoComplete="email"
                onChange={inputHandler}
                style={{ width: "100%", padding: "8px" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Password:</label>
              <br />
              <input
                type="password"
                name="password"
                value={form.password}
                autoComplete="new-password"
                onChange={inputHandler}
                style={{ width: "100%", padding: "8px" }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "seagreen",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default SignupForm;
