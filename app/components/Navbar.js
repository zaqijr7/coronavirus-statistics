import React from 'react';
import { Link } from 'react-router-dom';

// inport logo
import logo from '../images/codemy.png';

// import photo profile
import profile from '../images/me.jpg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" className="logo-brand ms-4" />
        </Link>
        <div className="d-flex align-items-center">
          <div className="position-relative me-2">
            <span className="badge bg-danger badge-costum position-absolute">
              9
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-bell-fill text-muted"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </div>
          <img src={profile} alt="" className="photo-profile mx-4" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
