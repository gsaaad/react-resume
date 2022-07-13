import React from "react";
import "./index.css";
function Header() {
  return (
    <div>
      <header>
        <nav className="Navbar">
          <h1>GS</h1>
          <ul>
            <li>
              <a href="https://www.google.com/">About</a>
            </li>
            <li>
              <a href="https://www.google.com/">Portfolio</a>
            </li>
            <li>
              <a href="https://www.google.com/">Contact</a>
            </li>
            <li>
              <a href="https://www.google.com/">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
