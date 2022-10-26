import React from "react";
import "./index.css";
import portFolioPic from "../../assets/img/Portfolio2.0.jpg";
function About() {
  return (
    <div>
      <h1 className="about-title ">About</h1>
      <div className="grid grid-rows-2 justify-items-center gap-12 lg:grid-cols-1 p-2 m-2">
        <p className="about-desc">
          When I am not coding, you can usually find me at the gym getting a
          good workout in, or even doing a long hot yoga session to relieve
          daily stress.
        </p>
        <p className="about-desc">
          I like to go for hikes, go to local events and hangout in within a
          community or with friends.
        </p>
        <p className="about-desc">
          Love to share ideas and good laughs/jokes with like-minded
          individuals, positive interactions and meaningful relationshipsMy
          favourite foods are pizza, smash burgers, hearty salads, and sushi.
        </p>
        <p className="about-desc">
          I love to watch sports and draw/paint when I have additional time~!
        </p>
        <img
          src={portFolioPic}
          className="about-image"
          alt="George Saad portfolio"
        />
        <p className="about-desc">
          You can connect with me in any of the following ways:
        </p>
        <div className="about-desc">
          <ul>
            <li>
              Github: <span>https://github.com/gsaaad</span>
            </li>
            <li>
              Email: <span>saad.george@live.com</span>
            </li>
            <li>
              LinkedIn: <span>https://www.linkedin.com/in/georgesaad7/</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
