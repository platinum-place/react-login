import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    Name: "",
    Username: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const registerUser = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(form),
    };

    const response = await fetch("api/users", requestOptions);
    const data = await response.json();
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/");
  };

  return (
    <form>
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-floating mb-3 mb-md-0">
            <input
              className="form-control"
              name="Name"
              id="Name"
              type="text"
              onChange={handleChange}
              placeholder="Nombre"
            />
            <label htmlFor="Name">Nombre</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input
              className="form-control"
              name="Username"
              id="Username"
              type="text"
              onChange={handleChange}
              placeholder="Nombre de usuario"
            />
            <label htmlFor="Username">Nombre de usuario</label>
          </div>
        </div>
      </div>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          name="Password"
          id="Password"
          type="password"
          onChange={handleChange}
          placeholder="Contraseña"
        />
        <label htmlFor="Password">Contraseña</label>
      </div>
      <div className="mt-4 mb-0">
        <div className="d-grid">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={registerUser}
          >
            Registrar
          </button>
        </div>
      </div>

      <div className="mt-4 mb-0">
        <div className="d-grid">
          <NavLink className="btn btn-secondary btn-block" to="/login">
            Regresar a login
          </NavLink>
        </div>
      </div>
    </form>
  );
}
