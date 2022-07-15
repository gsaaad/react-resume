import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState } from "react";

import portfolioPhoto from "./assets/img/Portfolio_Pic.jpg";
function App() {
  const [category] = useState([
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState([category[0]]);

  return (
    <div className="App">
      <Header
        category={category}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      ></Header>
      <section className="section f-row">
        <div>
          <h1>George Saad</h1>
          <h2>Full Stack Developer</h2>
          <p className="Intro-text">
            Curious Full Stack Developer utilizing my background knowledge in
            Psychology & Neuroscience to build a more intuitive and enhanced
            user experience on applications. Expanding my skills in JavaScript,
            CSS, HTML, React, Node, and Python. A proven leader and effective
            team player. Passionate and detail-oriented toward data analysis,
            web development, data science, and backend designs and data
            structures.
          </p>
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
        </div>
        <img src={portfolioPhoto} alt="" className="portfolioPhoto" />
      </section>
      {/* <section>
        <About></About>
      </section> */}
      <section id="Contact">Contact Me Section</section>
      <Footer></Footer>
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}

export default App;
