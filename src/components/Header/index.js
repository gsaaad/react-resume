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
        <nav className="navbar bg-gradient-to-r from-sky-200 via-emerald-500 to-emerald-800 border-b-4 border-rose-900">
          <a className="navbar-initials font-semibold" href="/">
            GS
          </a>
          <ul className="navbar-list font-semibold">
            {category.map((eachCategory) => (
              <li
                key={eachCategory.name}
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
