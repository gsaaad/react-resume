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
          <ul className="Navbar-list">
            {category.map((eachCategory) => (
              <li
                className={`${
                  currentCategory.name === category.name && "navActive"
                }
                
                `}
                onClick={() => {
                  setCurrentCategory(eachCategory);
                }}
              >
                <span>{eachCategory.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
