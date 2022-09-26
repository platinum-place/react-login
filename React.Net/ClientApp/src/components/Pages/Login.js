import React from "react";
import LoginForm from "../Organisms/LoginForm";
import LoginLayout from "../Templates/LoginLayout";

export default function Login() {
  return (
    <LoginLayout>
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header">
              <h3 className="text-center font-weight-light my-4">Ingresar</h3>
            </div>
            <div className="card-body">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
}
