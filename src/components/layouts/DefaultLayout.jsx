import React from "react";
import Navbar from "../navbar/Navbar";

export default function Layout({ children }) {
  console.log("test");
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  );
}
