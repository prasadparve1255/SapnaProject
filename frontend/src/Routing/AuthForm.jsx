import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuthForm() {
  const [showLogin, setShowLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const navigate = useNavigate();
  let apiurl = "http://localhost:5000/register";
  let apiUrl = "http://localhost:5000/login";

  const inputHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const lHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    axios.post(apiUrl, login)
    
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        setIsLoggedIn(true);
        navigate("/allstudent");
      })
      .catch((err) => {
        alert(err.response?.data?.message || "Login failed ❌");
      });
  };

  const signupHandler = (e) => {
    e.preventDefault();

    if (
      form.name === "" ||
      form.email === "" ||
      form.password === "" ||
      form.confirmPassword === ""
    ) {
      alert("Please fill all fields ❗");
      return;
    }

    if (form.password !== form.confirmPassword) {
      return alert("Passwords do not match ❌");
    }

    const { name, email, password } = form;

    axios.post(apiurl, { name, email, password })
    // const res =  axios.post("http://localhost:5000/register", form);
      .then((res) => {
        alert(res.data.message);
        setShowLogin(true);
      })
      .catch((err) => {
        alert(err.response?.data?.message || "Signup failed ❌");
        console.log(err);
      });
  };

  return (
    <div className="container mt-5">
      <div className="mb-3">
        <button
          className="btn btn-outline-info fw-bold"
          onClick={() => navigate("/")}
        >
          ⬅ Home
        </button>
      </div>

      {/* <h2 className="text-center mb-4 fw-bold text-info">Student Form</h2> */}

      <div className="d-flex justify-content-center mb-3">
        <button
          className={`btn me-2 ${
            showLogin ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
        <button
          className={`btn ${
            !showLogin ? "btn-warning" : "btn-outline-warning"
          }`}
          onClick={() => setShowLogin(false)}
        >
          Signup
        </button>
      </div>

      <div
        className="card shadow p-4 mx-auto"
        style={{ maxWidth: "450px", borderRadius: "20px" }}
      >
        {showLogin ? (
          <>
            <h4 className="text-center mb-4 text-success fw-bold">🔐 Login</h4>
            <form onSubmit={loginHandler}>
              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={login.email}
                  onChange={lHandler}
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Password</label>
                <input
                  type="password"
                  name="password"
                  value={login.password}
                  onChange={lHandler}
                  className="form-control"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-outline-success w-50 fw-bold"
                >
                  Login
                </button>
              </div>

              {isLoggedIn && (
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-danger w-50 fw-bold mt-2"
                    onClick={() => {
                      localStorage.removeItem("token");
                      setIsLoggedIn(false);
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </form>
          </>
        ) : (
          <>
            <h4 className="text-center mb-4 text-primary fw-bold">📝 Signup</h4>
            <form onSubmit={signupHandler}>
              <div className="mb-3">
                <label className="form-label fw-bold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={inputHandler}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={inputHandler}
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={inputHandler}
                  className="form-control"
                  placeholder="Create a password"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label fw-bold">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={inputHandler}
                  className="form-control"
                  placeholder="Re-enter your password"
                  required
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary w-50 fw-bold"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
