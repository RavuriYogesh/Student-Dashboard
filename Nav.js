// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
  
<div className="container mt-5">

<nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid">
    <h1 className="navbar-brand text-light font-weight-bold">Student Dashboard</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto"> {/* ms-auto class pushes items to the right */}
        <li className="nav-item">
          <Link className="nav-link text-light" to="/">User Management</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/roles">Role Management</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>
  );
};

export default Nav;



