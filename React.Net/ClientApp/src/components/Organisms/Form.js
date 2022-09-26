import React from "react";

export default function Form({ user }) {
  return (
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
          />
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-primary">
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
}
