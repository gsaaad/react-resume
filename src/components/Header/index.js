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
        <nav className="navbar">
          <a className="navbar-initials" href="/">
            GS
          </a>
          <ul className="navbar-list">
            {category.map((eachCategory) => (
              <li
                className={` ${
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
