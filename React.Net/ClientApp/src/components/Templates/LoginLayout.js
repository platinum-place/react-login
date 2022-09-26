import React from "react";
import Loginfooter from "../Organisms/Loginfooter";

export default function LoginLayout({ children }) {
  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container">{children}</div>
        </main>
      </div>
      <Loginfooter />
    </div>
  );
}
