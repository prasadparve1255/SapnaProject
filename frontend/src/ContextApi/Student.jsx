import React from 'react';
import {Link, Outlet } from 'react-router-dom';

function Student() {
  return (
    <>
    <div>
   <Link to="senquiry" ><strong>Student Enquiry</strong></Link>
   <br></br>
   <Link to="sregist" ><strong>Student Registration </strong></Link>


    </div>
    <Outlet></Outlet>
    </>
  );
}

export default Student;
