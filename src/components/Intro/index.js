import React from "react";
import portfolioPhoto from "../../assets/img/Portfolio_Pic.jpg";
import "./index.css";
function Intro() {
  return (
    <section className="grid grid-rows-1 xl:grid-cols-2">
      <div className="intro-self ">
        <h1 className="intro-name border-b-4 border-sky-200">George Saad</h1>
        <h2 className="intro-title text-sky-200">Full Stack Developer</h2>
        <p className="intro-descp text-md m-4 mt-8 lg:text-3xl lg:mr-32">
          Curious Full Stack Developer utilizing my background knowledge in{" "}
          <span className="text-emerald-300 ">Psychology & Neuroscience</span>{" "}
          to build a more intuitive, enhanced user experience using applications
          and services.
        </p>
        <p className="intro-descp text-md m-4 mt-8 lg:text-3xl lg:mr-32">
          Great Attitude, hard work ethic, Practicing industry standards,{" "}
          <span className="text-emerald-300 m-2">
            learning new technologies and challenging myself
          </span>
        </p>
        <div className="photo-container">
          <img
            src={portfolioPhoto}
            alt=""
            className="portfolioPhoto mx-auto shadow-xl shadow-emerald-900/100"
          />
        </div>
        <p className="intro-descp2 text-md m-4  mt-8 lg:text-3xl lg:mr-32">
          Expanding my skills in
          <span className="text-emerald-300 m-2">JavaScript</span>, React, Next,
          Node, Python, and stylizing with Tailwind.
        </p>
        <p className="intro-descp2 text-md lg:text-3xl lg:mr-32">
          A proven leader and{" "}
          <span className="text-emerald-300 ">effective team player</span>.
          Passionate, ambitious and{" "}
          <span className="text-emerald-300">detail-oriented</span>
        </p>
        <span className="text-3xl mt-8 text-sky-400 ">Interested about</span>
        <p className="intro-descp3 text-md   lg:text-3xl lg:mr-32">
          Data Analysis, Web Development,
          <span className="text-emerald-300">
            {" "}
            Full Stack, Web Analytics, Data Science
          </span>
          , Front-End, Back-End,{" "}
          <span className="text-emerald-300">
            Data Vizualization, Health-Tech, Blockchain.
          </span>
        </p>
      </div>
    </section>
  );
}

export default Intro;
