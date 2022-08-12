import React from "react";
import portfolioPhoto from "../../assets/img/Portfolio_Pic.jpg";
import "./index.css";
function Intro() {
  return (
<<<<<<< HEAD
    <section>
      <div className="wrap-me">
        <h1 className="name">George Saad</h1>
        <h2 className="title">Full Stack Developer</h2>
        <p className="Intro-text">
=======
    <section className="grid grid-rows-1 xl:grid-cols-2">
      <div className="intro-self ">
        <h1 className="intro-name">George Saad</h1>
        <h2 className="intro-title">Full Stack Developer</h2>
        <p className="intro-descp text-2xl  mt-8 lg:text-3xl lg:mr-32">
>>>>>>> develop
          Curious Full Stack Developer utilizing my background knowledge in
          Psychology and Neuroscience to build a more intuitive and enhanced
          user experience on applications.
        </p>
        <p className="intro-descp2 text-2xl  mt-8 lg:text-3xl lg:mr-32">
          Expanding my skills in JavaScript, CSS, HTML, React, Node, and Python.
          A proven leader and effective team player.
        </p>
        <p className="intro-descp3 text-2xl mt-8  lg:text-3xl lg:mr-32">
          Passionate and detail-oriented toward data analysis, web development,
          data science, and backend designs and data structures.
        </p>
      </div>
      <div>
        <img src={portfolioPhoto} alt="" className="portfolioPhoto" />
      </div>
    </section>
  );
}

export default Intro;
