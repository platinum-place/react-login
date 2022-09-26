import React from "react";
import Navbar from "../Organisms/Navbar";
import Footer from "../Organisms/Footer";
import Sidebar from "../Organisms/Sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          {/* <Sidebar /> */}
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
