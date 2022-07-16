import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import { useState, useEffect } from "react";

import portfolioPhoto from "./assets/img/Portfolio_Pic.jpg";
function App() {
  const [category] = useState([
    { name: "About" },
    { name: "Projects" },
    { name: "Resume" },
    { name: "Contact" },
  ]);

  const [currentCategory, setCurrentCategory] = useState([category[0]]);
  const [contactSelected, setContactSelected] = useState(false);
  useEffect(() => {
    document.title = "George Saad Portfolio";
  });
  return (
    <div className="App">
      <Header
        category={category}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <section className="section f-row">
        <main>
          {/* if not contact, show intro + skills. */}
          {!contactSelected ? (
            <>
              <div className="wrap-me">
                <h1>George Saad</h1>
                <h2>Full Stack Developer</h2>
                <p className="Intro-text">
                  Curious Full Stack Developer utilizing my background knowledge
                  in Psychology and Neuroscience to build a more intuitive and
                  enhanced user experience on applications. Expanding my skills
                  in JavaScript, CSS, HTML, React, Node, and Python. A proven
                  leader and effective team player. Passionate and
                  detail-oriented toward data analysis, web development, data
                  science, and backend designs and data structures.
                </p>
              </div>
              <div>
                <img src={portfolioPhoto} alt="" className="portfolioPhoto" />
              </div>

              <h2>Skills:</h2>

              <ul className="wrap-me">
                <li>Github</li>
                <li>Node</li>
                <li>Git</li>
                <li>React</li>
                <li>Python</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Boostrap</li>
                <li>TailWind</li>
                <li>Heroku</li>
                <li>JQuery</li>
              </ul>
            </>
          ) : (
            <>
              <About></About>
            </>
          )}
        </main>
      </section>
      {/* <section>
          <About></About>
        </section> */}
      <Contact></Contact>
      <Footer></Footer>
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}

export default App;
