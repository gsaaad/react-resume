import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import { useState } from "react";

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
      <section className="section">
        {
          <h1>About me section</h1>

          // <Project></Project>
        }
      </section>
      <section id="Contact">Contact Me</section>
      <Footer></Footer>
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}

export default App;
