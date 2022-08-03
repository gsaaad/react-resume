import "./App.css";
import Header from "./components/Header";
import Skill from "./components/Skills";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Resume from "./components/Resume";

import { useState } from "react";

function App() {
  const [category] = useState([
    { name: "About", component: <About></About> },
    { name: "Resume", component: <Resume></Resume> },
    { name: "Project", component: <Project></Project> },
  ]);

  const [currentCategory, setCurrentCategory] = useState([category[0]]);

  console.log(currentCategory[0], "Current category");
  console.log(category[0], "category 0");

  return (
    <div className="App ">
      <Header
        category={category}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      ></Header>
      <section className="section f-row">
        <main>
          {currentCategory[0] === category[0] ? (
            <div>
              <Intro></Intro>
              <Skill></Skill>
            </div>
          ) : (
            <div>{currentCategory.component}</div>
          )}
        </main>
      </section>
      <Contact></Contact>
      <Footer></Footer>
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}

export default App;
