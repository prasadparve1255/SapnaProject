import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate("/")
  }
  return (
    <>
      <div>

        <h3>Dashboard Component</h3>

        <Link to="profile">Profile Page</Link>
        <br></br>
        <Link to="setting">Settings Page</Link>

        <br></br>
        <button className="btn btn-success" onClick={clickHandler}>Go To Home</button>
      </div>
      <Outlet></Outlet>
    </>
  )
}

export default Dashboard;