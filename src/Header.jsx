import React from "react";
import "./App.css";

export default function Header() {
  return (
    <header>
      <div className="header-logo">
        <img src="/logo.png" alt="logo" />
      </div>

      <div className="header-title">
        <h1>ANYMARKS WEIGHTAGE CALCULATOR</h1>
      </div>

      {/* Empty box to balance flex layout */}
      <div className="header-placeholder"></div>
    </header>
  );
}
