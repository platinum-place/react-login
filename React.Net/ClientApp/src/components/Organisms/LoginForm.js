import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Home from "../Pages/Home";

export default function LoginForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
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

  const login = async () => {
    const response = await fetch(
      "api/users/ingresar/" + form.Username + "/" + form.Password
    );
    const data = await response.json();

    if (data.status == 400) {
      Swal.fire({
        title: "Usuario no encontrado",
        icon: "error",
      });
    } else {
      localStorage.setItem("user", JSON.stringify(data[0]));
      navigate("/");
    }
  };

  return (
    <form>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="Username"
          type="text"
          name="Username"
          onChange={handleChange}
          placeholder="Username"
        />
        <label htmlFor="Username">Usuario</label>
      </div>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="Password"
          type="password"
          name="Password"
          onChange={handleChange}
          placeholder="Password"
        />
        <label htmlFor="Password">Contraseña</label>
      </div>

      <div className="mt-4 mb-0">
        <div className="d-grid">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={login}
          >
            Ingresar
          </button>
        </div>
      </div>

      <div className="mt-4 mb-0">
        <div className="d-grid">
          <NavLink className="btn btn-secondary btn-block" to="/register">
            Registrar
          </NavLink>
        </div>
      </div>
    </form>
  );
}
