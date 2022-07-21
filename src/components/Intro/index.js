import React from "react";
import portfolioPhoto from "../../assets/img/Portfolio_Pic.jpg";
import "./index.css";
function Intro() {
  return (
    <section>
      <div className="wrap-me">
        <h1 className="name">George Saad</h1>
        <h2 className="title">Full Stack Developer</h2>
        <p className="Intro-text">
          Curious Full Stack Developer utilizing my background knowledge in
          Psychology and Neuroscience to build a more intuitive and enhanced
          user experience on applications. Expanding my skills in JavaScript,
          CSS, HTML, React, Node, and Python. A proven leader and effective team
          player. Passionate and detail-oriented toward data analysis, web
          development, data science, and backend designs and data structures.
        </p>
      </div>
      <div>
        <img src={portfolioPhoto} alt="" className="portfolioPhoto" />
      </div>
    </section>
  );
}

export default Intro;
