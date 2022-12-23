import React from "react";
import "./index.css";
import portFolioPic from "../../assets/img/Portfolio2.0.jpg";
function About() {
  return (
    <div>
      <h1 className="about-title border-b-4 border-yellow-400 my-2 lg:mx-8">
        About
      </h1>
      <div className="grid lg:grid-cols-2">
        <div className="mx-auto lg:grid-cols-1">
          <img
            src={portFolioPic}
            className="portfolioPhoto  shadow-xl shadow-emerald-900/100 w-5/6  md:mt-322"
            alt="George Saad portfolio"
          />
        </div>
        <div className="grid grid-rows-2 justify-items-center gap-12 p-4 lg:grid-cols-1 lg:mx-8">
          <p className="text-lg md:text-xl lg:text-2xl">
            When I am not coding, you can usually find me getting a{" "}
            <span className="text-emerald-900 font-bold">
              a good workout at the gym
            </span>
            , or even doing{" "}
            <span className="text-emerald-900 font-bold">
              A long Hot Yoga session
            </span>{" "}
            to relieve daily stress.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl">
            I like to go for hikes, go to{" "}
            <span className="text-emerald-900 font-bold">local events</span> and
            hangout in within a community or with friends.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl">
            Love to share ideas and good laughs/jokes with like-minded
            individuals, positive interactions and{" "}
            <span className="text-emerald-900 font-bold">
              meaningful relationships.
            </span>{" "}
          </p>
          <p className="text-lg md:text-xl lg:text-2xl">
            My favourite foods are sushi,{" "}
            <span className="text-emerald-900 font-bold">Smash Burgers</span>,
            hearty salads, and{" "}
            <span className="text-emerald-900 font-bold">Pizza</span>.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl">
            I love to{" "}
            <span className="text-emerald-900 font-bold">watch sports</span> and{" "}
            <span className="text-emerald-900 font-bold">paint</span> when I
            have additional time~!
          </p>
        </div>
      </div>
      <div className="border-4 border-emerald-900 m-8 rounded-lg p-2 ">
        <h2 className="text-yellow-400 font-bold rounded text-4xl border-b-4 border-yellow-400 lg:mx-32 mx-8 mb-8">
          Connect
        </h2>

        <p className="text-lg md:text-xl lg:text-2xl">
          You can{" "}
          <span className="text-emerald-900 font-bold">connect with me</span> in
          any of the following ways:
        </p>
        <div className="text-lg md:text-xl lg:text-2xl">
          <ul>
            <li className="text-emerald-900 font-bold">
              Github:{" "}
              <span className="text-white">https://github.com/gsaaad</span>
            </li>
            <li className="text-emerald-900 font-bold">
              Email: <span className="text-white">saad.george@live.com</span>
            </li>
            <li className="text-emerald-900 font-bold">
              LinkedIn:{" "}
              <span className="text-white ">
                https://www.linkedin.com/in/georgesaad7/
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
