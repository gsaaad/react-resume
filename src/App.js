import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className="section">
        <h1 className="Projects">Projects</h1>
        <Project></Project>
      </section>
      <Footer></Footer>
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}

export default App;
