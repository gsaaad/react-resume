import React from "react";
import "./index.css";
function Header() {
  return (
    <div>
      <header>
        <nav className="Navbar">
          <h1>GS</h1>
          <ul>
            <li>About me</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
