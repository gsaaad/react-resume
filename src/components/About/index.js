import React from "react";
import "./index.css";
<<<<<<< HEAD
function About() {
  return (
    <div className="about-me">
      <h1 className="about-title">Know who I AM</h1>
      <p className="about-descp">
        Hello, I am George Saad from Toronto, Canada! Apart from coding or
        learning different technologies, George can be found planning and going
        for hikes, doing Yoga, and working out at the gym. George loves to
        travel and try new foods, play video games, and new experiences to
        embrace self improvement, family and being involved in a community.
      </p>
=======

function About() {
  return (
    <div>
      <h1 className="about-title">About</h1>
      <div className="grid grid-rows-2 justify-items-center gap-12 lg:grid-cols-2">
        <p className="about-desc">
          When I am not coding, you can usually find me at the gym getting a
          good workout in, or even doing a long hot yoga session to relieve
          daily stress. I like to go for hikes, go to local events and hangout
          in within a community or with friends. Love to share ideas and good
          laughs/jokes with like-minded individuals, positive interactions and
          meaningful relationshipsMy favourite foods are pizza, smash burgers,
          hearty salads, and sushi. I love to watch sports and draw/paint when I
          have additional time~!
        </p>
        <img
          src="https://www.verifyglobal.com/wp-content/uploads/2017/08/team-headshot-placeholder-male-200x300.jpg"
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
              Email: <span>gsparqcode@gmail.com</span>
            </li>
            <li>
              LinkedIn: <span>https://www.linkedin.com/in/georgesaad7/</span>
            </li>
          </ul>
        </div>
      </div>
>>>>>>> develop
    </div>
  );
}

export default About;
