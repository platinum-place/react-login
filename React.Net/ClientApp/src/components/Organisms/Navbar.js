import React from "react";
import { NavLink } from "react-router-dom";

export default function navbar() {
  const logout = () => {
    localStorage.setItem("user", null);
  };

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand ps-3" href="index.html">
        React.Net
      </a>
      <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        &nbsp;
      </div>
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-user fa-fw"></i>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <NavLink className="dropdown-item" onClick={logout} to="/login">
                Cerrar sesión
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
