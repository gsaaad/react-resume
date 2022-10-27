import React from "react";
import "./index.css";
import githubLogo from "../../assets/img/github-brands.svg";
import DeployLogo from "../../assets/img/arrow-up-right-from-square-solid.svg";
import DineInImage from "../../assets/img/DineIn.png";
import JackedInTheBoxImage from "../../assets/img/JackedInTheBoxPreview.png";
import WeatherAppImage from "../../assets/img/weather-App.png";
import CodingQuizImage from "../../assets/img/CodingQuiz.png";
import daySchedularImage from "../../assets/img/daySchedular.png";
import MOSTCOAST from "../../assets/img/MOST_COAST.png";
function Project() {
  const projects = [
    {
      Name: "DineIn",
      Description:
        "Enhance your meals by having the restaurant experience at the comfort of your home. DineIn lets users get random drink from a selection of cocktails, as well as a meal to enjoy that with.",
      Stack: "HTML, CSS, JavaScript, Tailwind CSS, JQUERY",
      Repo: "https://github.com/gsaaad/DineInside",
      AppLink: "https://gsaaad.github.io/DineInside/",
      image: DineInImage,
    },
    {
      Name: "JackedInTheBox",
      Description:
        "Time to take your workouts seriously! Come register and try out JackedInTheBox, to get exercise motion GIPHY, and calculate your BMI with your Age, Height, and Weight!",
      Stack:
        "HTML, CSS, JavaScript, Tailwind CSS, Handlebars, JQUERY, NODE,EXPRESS, BOOSTRAP, Sequelize, MYSQL",
      Repo: "https://github.com/gsaaad/JackedInTheBox",
      AppLink: "https://immense-sea-90510.herokuapp.com/",
      image: JackedInTheBoxImage,
    },
    {
      Name: "Weather App",
      Description:
        "Check the Weather! Come find out what the weather's like in any majorcity in the world. You will recieve information on the Temperature, Windspeed, UV INDEX and humidity.",
      Stack: "HTML, CSS, JavaScript, Bootstrap, JQuery, Moment.js",
      Repo: "https://github.com/gsaaad/WeatherApp",
      AppLink: "https://gsaaad.github.io/WeatherApp/",
      image: WeatherAppImage,
    },
    {
      Name: "Coding Dojo",
      Description:
        "Are you brave enough to take on the Coding Dojo?! Test your Javascript knowledge with these challenging questions. If you think you can make it. Top 5... you'll hold a special position in the High Roller Club",
      Stack: "HTML, CSS, JavaScript",
      Repo: "https://github.com/gsaaad/Coding-Dojo-JS",
      AppLink: "https://gsaaad.github.io/Coding-Dojo-JS/",
      image: CodingQuizImage,
    },
    {
      Name: "Day Scheduler",
      Description:
        "Increase your productivity using this application! You can add events throughout your day. Intuitivly tell the time and what events/tasks you should prioritize.",
      Stack: "HTML, CSS, Javascript, Bootstrap, JQUERY",
      Repo: "https://github.com/gsaaad/DayScheduler",
      AppLink: "https://gsaaad.github.io/DayScheduler/",
      image: daySchedularImage,
    },
    {
      Name: "Most To Coast",
      Description:
        "Share your trips and their events to the public or your friends!",
      Stack:
        "HTML,CSS, JavaScript, Node.js, Express.js, NPM, Path, React & React Router, MongoDB, Apollo Server, GQL, Apollo Client, JSON Web Token(JWT)",
      Repo: "https://github.com/gsaaad/Most_to_Coast",
      AppLink: "https://peaceful-journey-57215.herokuapp.com/main",
      image: MOSTCOAST,
    },
  ];

  return (
    <section>
      <h1 className=" text-4xl  border-b-4 border-yellow-500 m-16 rounded font-bold">
        Projects
      </h1>
      <div className=" w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map(({ Name, Description, Stack, Repo, AppLink, image }) => (
          <article
            className="card w-5/6 p-4"
            style={{ margin: "40px 30px" }}
            key={Name}
          >
            <a href={AppLink}>
              <img src={image} alt="" className="project-preview" />
            </a>
            <div className="grid grid-cols-2 ">
              <a href={Repo}>
                <img
                  src={githubLogo}
                  alt=""
                  className="projects-icons mx-auto mt-12"
                />
              </a>
              <a href={AppLink}>
                <img
                  src={DeployLogo}
                  alt=""
                  className="projects-icons mx-auto mt-12"
                />
              </a>
            </div>
            <h2 className="project-title text-emerald-200 text-3xl border-b-4 border-yellow-500 rounded-lg m-2">
              {Name}
            </h2>
            <p className="descriptionStack text-lg">{Description}</p>

            <span className="text-emerald-200 m-2 border-b-2 border-yellow-500 text-xl">
              Stack:
            </span>
            <p className="text-lg">{Stack}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
