import { data } from "jquery";
import React, { useEffect, useState } from "react";

export default function Table({ user }) {
  const [list, setList] = useState([]);

  const userList = async () => {
    const response = await fetch("api/address/" + user.Id);
    const list = await response.json();
  };

  useEffect(() => {
    userList();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Dirección</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr>
            <th scope="row">{item.Id}</th>
            <td>{item.street}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
