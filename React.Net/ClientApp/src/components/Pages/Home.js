import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Form from "../Organisms/Form";
import Table from "../Organisms/Table";
import Layout from "../Templates/Layout";
import Swal from "sweetalert2";

export default function Home({ user }) {
  useEffect(() => {
    userList();
  }, []);

  const [list, setList] = useState([]);

  const userList = async () => {
    const response = await fetch("api/addresses/userlist/" + user.id);
    //const response = await fetch("api/addresses");
    setList(await response.json());
  };

  const [form, setForm] = useState({
    Street: "",
    User: user.username,
    UserId: user.id.toString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const createAddress = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(form),
    };

    const response = await fetch("api/addresses", requestOptions);
    const data = await response.json();

    Swal.fire({
      title: "Elemento agregado",
      icon: "success",
    });

    userList();
  };

  return (
    <Layout>
      <br />
      <form>
        <div className="row g-3 align-items-center mb-3 d-flex justify-content-center">
          <div className="col-auto">
            <label htmlFor="Street" className="form-label">
              Dirección
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              id="Street"
              name="Street"
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-primary"
              onClick={createAddress}
            >
              Guardar
            </button>
          </div>
        </div>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Dirección</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.street}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
