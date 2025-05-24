import React, { useState } from "react";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    pswd: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    setError("");
  };

  const loginHandler = (e) => {
    e.preventDefault();

    if (!login.email || !login.pswd) {
      setError("Both email and password are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(login.email)) {
      setError("Please enter a valid email.");
      return;
    }

    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <div style={{ textAlign: "center", marginTop: "10vh", color: "green" }}>
          <h2>Login Successfully!</h2>
          <p className="text-primary">Welcome, {login.email}!</p>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            margin: "0 auto 30px",
          }}
        >
          <form onSubmit={loginHandler}>
            <h3 className="text-center mb-4">Login</h3>

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

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                autoComplete="username"
                value={login.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="pswd"
                className="form-control"
                placeholder="Password"
                autoComplete="current-password"
                value={login.pswd}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
