import React from "react";
import "./index.css";
function Resume() {
  return (
    <div className="ExpPanel">
      <div className="CareerProfile">Career Profile</div>
      <div className="careerstatement">
        George Saad is a high performance individual
        <br />
        He indulges in learning complex scalable systems, and bringing novel
        ideas to the way we do things.
        <br />
        <strong>
          Creating interactive, functional and meaningful applications and
          websites that help make people's lives better.
        </strong>
      </div>
      <div>
        <div className="ExperienceTitle">Experiences</div>
        <div className="Experience">
          <div className="Work">
            <div className="jtitle">Behavior Support Specialist</div>
            <div className="workplace">Safe Management Group</div>
            <div className="date">2020-Present</div>
            <div className="descp">
              <ul>
                <li className="job-descp">
                  Provided individualized planning, promoting personal choices,
                  opportunities and responsibilities for the clients
                </li>
                <li className="job-descp">
                  Promoted and supported meaningful relationships and provided
                  safe, supportive, care and services
                </li>
                <li className="job-descp">
                  Implementing the unique Behaviour Support Plans for each
                  client to ensure an increased quality of life
                </li>
                <li className="job-descp">
                  Administering medication for each client on time
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div>
            <div className="jtitle">Research Assisstant</div>
            <div className="workplace">Mallet Lab</div>
            <div className="date">2019-2020</div>
            <div className="descp">
              <ul>
                <li className="job-descp">
                  Using ImageJ to quantify dendrites through sholl analysis and
                  branching order
                </li>
                <li className="job-descp">
                  Organized files and maintained database
                </li>
                <li className="job-descp">
                  "SPATIAL MEMORY AND EXECUTIVE FUNCTIONING IN THE GOTO-KAKIZAKI
                  RAT MODEL OF DIABETES"{" "}
                </li>
                <li className="job-descp">
                  Published in November 2020, Endorsement is at the end.
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div>
            <div className="jtitle">Research Assistant</div>
            <div className="workplace">Jones Lab</div>
            <div className="date">2017-2020</div>
            <div className="descp">
              <ul>
                <li className="job-descp">
                  Assisted in fully running the research experiment from start
                  to end with novel participants and for the Psycholinguistics
                  EEG lab
                </li>
                <li className="job-descp">
                  Manage, review and maintain the study file(s)
                </li>
                <li className="job-descp">
                  Proven verbal, written, and presentation skills to communicate
                  at all levels of knowledge
                </li>
                <li className="job-descp">
                  Ability to problem-solve, analyze data, report on success, as
                  well as identify risks
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="School">
          <h2 className="date"> 2022 - 2022</h2>
          <img
            src="https://seekvectorlogo.com/wp-content/uploads/2018/02/university-of-toronto-vector-logo.png"
            alt=""
            height={500}
            width={700}
          />

          <h1 className="Degree">Full Stack Developer Coding Bootcamp</h1>

          <h2 className="School">University of Toronto</h2>
        </div>
        <div className="School">
          <h2 className="date"> 2015 - 2020</h2>
          <img
            src="https://thecord.ca/wp-content/uploads/2013/01/Laurier-Refined-Seal-e1357722647279.jpg"
            alt=""
            height={500}
            width={500}
          />
          <div className="laurier">
            <h1 className="Degree">Bsc. Psychology and Neuroscience</h1>
            <h3 className="Minor">[Minor in Biology]</h3>
            <h3 className="Minor">[Honours Thesis Project]</h3>
            <h2 className="School">Wilfrid Laurier University</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
