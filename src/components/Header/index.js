import React, { useEffect } from "react";
import "./index.css";
function Header(props) {
  const { category = [], currentCategory, setCurrentCategory } = props;

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);
  return (
    <div>
      <header>
        <nav className="Navbar">
          <h1>GS</h1>
          <ul>
            {category.map((eachCategory) => (
              <li
                className={`${
                  currentCategory.name === category.name && "navActive"
                }`}
                onClick={() => {
                  setCurrentCategory(eachCategory);
                }}
              >
                <span>{eachCategory.name}</span>
              </li>
            ))}

            {/* <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="https://www.google.com/">Portfolio</a>
            </li>
            <li>
              <a href="https://www.google.com/">Contact</a>
            </li>
            <li>
              <a href="https://www.google.com/">Resume</a>
            </li> */}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
