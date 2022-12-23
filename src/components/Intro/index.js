import React from "react";
import portfolioPhoto from "../../assets/img/Portfolio_Pic.jpg";
import "./index.css";
function Intro() {
  return (
    <section className="grid grid-rows-1 md:grid-cols-2 xl:p-16">
      <div className="photo-container col m-4">
        <img
          src={portfolioPhoto}
          alt=""
          className="portfolioPhoto mx-auto shadow-xl shadow-emerald-900/100 w-5/6  md:mt-32"
        />
        <div>
          <p className="intro-descp text-md m-4 mt-8 lg:text-2xl">
            Curious Full Stack Developer utilizing my background{" "}
            <span className="text-yellow-400 border-b-2 border-slate-900 rounded-md font-bold ">
              Psychology & Neuroscience
            </span>{" "}
            to build a more intuitive, and enhanced user experience.
          </p>
          <p className="intro-descp text-md m-4 mt-8 lg:text-2xl">
            Detail oriented, hard work ethic,
            <span className="text-yellow-400 border-b-2 border-slate-900 rounded-md font-bold m-2">
              learning new technologies & overcoming challenges
            </span>
          </p>
        </div>
      </div>
      <div className="intro-self col ">
        <h1 className="intro-name border-b-4 border-yellow-400 ">
          George Saad
        </h1>
        <h2 className="intro-title text-emerald-200">Full Stack Developer</h2>

        <p className="intro-descp2 text-md m-4  mt-8 lg:text-3xl ">
          Experienced and proficient in
          <span className="text-emerald-300 font-bold m-2">
            JavaScript
          </span>, <span className="text-emerald-300 font-bold m-2">React</span>
          , Next.js, Node,{" "}
          <span className="text-emerald-300 font-bold m-2">Python</span>, and
          TailWindCSS
        </p>
        <p className="intro-descp2 text-md lg:text-3xl ">
          A proven leader and{" "}
          <span className="text-emerald-900 font-bold ">
            effective team player
          </span>
          . Passionate, ambitious and{" "}
          <span className="text-emerald-900 font-bold">detail-oriented</span>
        </p>
        <span className="text-3xl mt-8 text-yellow-400 font-bold ">
          Interested about
        </span>
        <p className="intro-descp3 text-md   lg:text-3xl ">
          Data Analysis, Web Application Development,
          <span className="text-emerald-900 font-bold">
            {" "}
            Full Stack, MERN Stack
          </span>
          , Front-End, Back-End,{" "}
          <span className="text-emerald-900 font-bold">
            Data Vizualization, Health-Tech.
          </span>
        </p>
      </div>
    </section>
  );
}

export default Intro;
