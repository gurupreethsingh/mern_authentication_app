import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = ({ username, role, isLoggedIn }) => {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center p-2 bg-light">
      <h4>Ecoders</h4>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link text-secondary" to="/">
            Home
          </Link>{" "}
        </li>
        {isLoggedIn && role.includes("admin") && (
          <li className="nav-item">
            <Link className="nav-link text-secondary" to="/admin">
              Admin
            </Link>{" "}
          </li>
        )}
        {isLoggedIn && (
          <li className="nav-item">
            <Link className="nav-link text-secondary" to="/profile">
              Profile
            </Link>{" "}
          </li>
        )}

        {isLoggedIn && role.includes("Test Engineer") && (
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-secondary"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Testing
            </Link>{" "}
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/testing">
                  Test Scenarios
                </Link>{" "}
              </li>
              <hr className="dropdown-divider" />
              <li>
                <Link className="dropdown-item" to="/testing">
                  Test Case Template
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link className="dropdown-item" to="/testing">
                  Tracability Matrix
                </Link>{" "}
              </li>
            </ul>
          </li>
        )}

        {isLoggedIn && (
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-secondary"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Defect Tracking
            </Link>{" "}
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/defectreport">
                  All Defects
                </Link>{" "}
              </li>
              <hr className="dropdown-divider" />
              <li>
                <Link className="dropdown-item" to="/defectreport">
                  Defect Report Template
                </Link>{" "}
              </li>
              <li>
                {" "}
                {/* Remove unnecessary <hr> */}
                <Link className="dropdown-item" to="/defectreport">
                  Log New Defect
                </Link>{" "}
              </li>
            </ul>
          </li>
        )}

        {!isLoggedIn && (
          <li className="nav-item">
            <Link className="nav-link text-secondary" to="/login">
              Login
            </Link>{" "}
          </li>
        )}
        {!isLoggedIn && (
          <li className="nav-item">
            <Link className="nav-link text-secondary" to="/register">
              Register
            </Link>{" "}
          </li>
        )}
      </ul>
      {isLoggedIn && (
        <div>
          {username} - {role}
        </div>
      )}
    </div>
  );
};

export default Header;
