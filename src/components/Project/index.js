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
        " This application fulfills the needs of users at home. Enhance your meals by having the restaurant experience at the comfort of your home. DineIn lets users get random drink from a selection of cocktails, as well as a meal to enjoy that with.",
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
        "Are you smarter than a ..... Coding Dojo?! Test your Javascript knowledge with these challenging questions. If you think you can make it. Top 5... you'll hold a special position in the High Roller Club",
      Stack: "HTML, CSS, JavaScript",
      Repo: "https://github.com/gsaaad/Coding-Dojo-JS",
      AppLink: "https://gsaaad.github.io/Coding-Dojo-JS/",
      image: CodingQuizImage,
    },
    {
      Name: "Work Day Scheduler",
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
        "This app will reduce travel planning time. Creating a time schedule for the trip would be a little troublesome to some people and sometimes have no clue where one should go and how they should plan. This app will be the solution to those problems.",
      Stack:
        "HTML,CSS, JavaScript, Node.js, Express.js, NPM, Path, React & React Router, MongoDB, Apollo Server, GQL, Apollo Client, JSON Web Token(JWT)",
      Repo: "https://github.com/gsaaad/Most_to_Coast",
      AppLink: "https://peaceful-journey-57215.herokuapp.com/main",
      image: MOSTCOAST,
    },
  ];

  return (
    <section>
      <h1 className="Projects">Projects</h1>
      <div>
        {projects.map(({ Name, Description, Stack, Repo, AppLink, image }) => (
          <article className="card" style={{ margin: "150px 0px" }}>
            <a href={AppLink}>
              <img
                src={image}
                alt=""
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  paddingTop: "30px",
                }}
              />
              <div className="Repo-Deploy">
                <a href={Repo}>
                  <img
                    src={githubLogo}
                    alt=""
                    className="icons"
                    style={{ width: "10%", height: "10%", margin: "0px 50px" }}
                  />
                </a>
                <a href={AppLink}>
                  <img
                    src={DeployLogo}
                    alt=""
                    className="icons"
                    style={{ width: "10%", height: "10%", margin: "0px 50px" }}
                  />
                </a>
              </div>
            </a>
            <h2 className="project-title">{Name}</h2>
            <p className="descriptionStack">{Description}</p>
            <p className="descriptionStack">Stack: {Stack}</p>
          </article>
        ))}
      </div>
    </section>

    // <article className="card">
    //   <a href="https://gsaaad.github.io/DineInside/">
    //     <img
    //       src={JackedInTheBox}
    //       alt=""
    //       style={{ width: "100%", borderRadius: "5px" }}
    //     />
    //     <div className="Repo-Deploy">
    //       <a href= {Repo}>

    //       <img
    //         src={githubLogo}
    //         alt=""
    //         style={{ width: "15%", height: "15%", margin: "0px 50px" }}
    //         />
    //         </a >
    //         <a href={deploy}>

    //       <img
    //         src={DeployLogo}
    //         alt=""
    //         style={{ width: "15%", height: "15%", margin: "0px 50px" }}
    //         />
    //         </a>
    //     </div>
    //   </a>
    //   <h2 className="project-title">Jacked In The Box</h2>
    //   <p className="descriptionStack">
    //     Time to take your workouts seriously! Come try out and register with
    //     JackedInTheBox, to get exercise motion GIPHY, and calculate your BMI
    //     with your Age, Height, and Weight!
    //   </p>
    //   <p className="descriptionStack">
    //     Stack: HTML, CSS, JavaScript, Tailwind CSS, Handlebars, JQUERY, NODE,
    //     EXPRESS, BOOSTRAP, Sequelize, MYSQL
    //   </p>
    // </article>
  );
}

export default Project;
