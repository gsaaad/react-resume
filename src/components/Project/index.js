import React from "react";
import "./index.css";
import JackedInTheBox from "../../assets/img/JackedInTheBoxPreview.png";
function Project() {
  return (
    <article className="card">
      <a href="https://gsaaad.github.io/DineInside/">
        <img
          src={JackedInTheBox}
          alt=""
          style={{ width: "100%", borderRadius: "5px" }}
        />
      </a>
      <h2>Jacked In The Box</h2>
      <p>
        Time to take your workouts seriously! Come try out and register with
        JackedInTheBox, to get exercise motion GIPHY, and calculate your BMI
        with your Age, Height, and Weight!
      </p>
      <p>
        Stack: HTML, CSS, JavaScript, Tailwind CSS, Handlebars, JQUERY, NODE,
        EXPRESS, BOOSTRAP, Sequelize, MYSQL
      </p>
    </article>
  );
}

export default Project;
