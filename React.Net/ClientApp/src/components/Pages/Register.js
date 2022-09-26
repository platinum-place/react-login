import React from "react";
import { NavLink } from "react-router-dom";
import RegisterForm from "../Organisms/RegisterForm";
import LoginLayout from "../Templates/LoginLayout";

export default function Register() {
  return (
      <LoginLayout>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">
                  Registrar usuario
                </h3>
              </div>
              <div className="card-body">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </LoginLayout>
  );
}
