import React from "react";
import "./Experience.css";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SpaIcon from "@mui/icons-material/Spa";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import MenuButton from "../MenuButton/MenuButton";
function Experience() {
  return (
    <div className="Exp">
      <MenuButton />
      <div className="sidebar">
        <div className="ContactMe">
          <div className="details-circle">
            <StarIcon fontSize="large" style={{ color: "black" }} />
          </div>
          <div className="details-circle1">
            <StarIcon fontSize="large" style={{ color: "black" }} />
          </div>
          <div className="details-circle2">
            <StarIcon fontSize="large" style={{ color: "black" }} />
          </div>
          <div className="details-circle3">
            <StarIcon fontSize="large" style={{ color: "black" }} />
          </div>
          <div className="details-circle4">
            <StarHalfIcon fontSize="large" style={{ color: "black" }} />
          </div>
          <img
            src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/69361260_10205899204275192_6372722326043099136_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7O7BbNNdJ9EAX-qluS6&_nc_ht=scontent-yyz1-1.xx&oh=00_AT8r-3jHf_7wGOK5V8DTlMqQbQB3MG4_GDr46eGex7kx1Q&oe=6200AF4A"
            alt=""
            width={300}
            height={300}
          />
          <h2 className="TITLEN">George Saad</h2>
          <br />
          <h3 className="TITLEN">Full Stack Developer</h3>
          <br />
        </div>
        <div className="sidebar-main">
          <div className="Connect">
            <div className="info">
              <EmailIcon fontSize="large" />
              <a href="/contactme" className="isDisabled">
                Email me
              </a>
            </div>
            {/* <div className="info">
              <PhoneIphoneIcon fontSize="large" />
              <p>(+1 647-878-4870)</p>
            </div> */}

            <div className="info">
              <LinkedInIcon fontSize="large" />
              <a
                href="https://www.linkedin.com/in/georgesaad7/"
                className="isDisabled"
              >
                {" "}
                Linkedin Profile
              </a>
            </div>
            <div className="info">
              <GitHubIcon fontSize="large" />
              <a href="https://github.com/gsaaad" className="isDisabled">
                {" "}
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="ExpPanel">
        <div className="CareerProfile">
          <AssignmentIndIcon style={{ fontSize: 60 }} />
          Career Profile
        </div>
        <div className="careerstatement">
          <SpaIcon />
          George Saad is a high performance individual.
          <br />
          <SpaIcon />
          He indulges in learning complex systems and is detail oritented.
          Always looking for new challenges and growth oppertunities.
          <br />
          <strong>
            <SpaIcon />
            Being a Full Stack Developer and building Applications is his
            passion!
          </strong>
        </div>
        <div className="ExperienceTitle">
          <WorkIcon style={{ fontSize: 60 }} />
          Experiences
        </div>
        <div className="Experience">
          <div className="Work">
            <div className="jtitle">Research Assisstant</div>
            <div className="workplace">Mallet Lab</div>
            <div className="date">2019-2020</div>
            <div className="descp">
              <ul>
                <li className="job-descp">
                  <SpaIcon />
                  Using ImageJ to quantify dendrites through sholl analysis and
                  branching order
                </li>
                <li className="job-descp">
                  <SpaIcon />
                  Organized files and maintained database
                </li>
                <li className="job-descp">
                  <SpaIcon />
                  "SPATIAL MEMORY AND EXECUTIVE FUNCTIONING IN THE GOTO-KAKIZAKI
                  RAT MODEL OF DIABETES"{" "}
                </li>
                <li className="job-descp">
                  <SpaIcon />
                  Published in November 2020, Endorsement is at the end.
                </li>
              </ul>
            </div>
            <br />
            <div className="jtitle">Research Assistant</div>
            <div className="workplace">Jones Lab</div>
            <div className="date">2017-2020</div>
            <div className="descp">
              <ul>
                <li className="job-descp">
                  <SpaIcon />
                  Assisted in fully running the research experiment from start
                  to end with novel participants and for the Psycholinguistics
                  EEG lab
                </li>
                <li className="job-descp">
                  <SpaIcon />
                  Manage, review and maintain the study file(s)
                </li>
                <li className="job-descp">
                  <SpaIcon />
                  Proven verbal, written, and presentation skills to communicate
                  at all levels of knowledge
                </li>
                <li className="job-descp">
                  <SpaIcon />
                  Ability to problem-solve, analyze data, report on success, as
                  well as identify risks
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="School">
            <h2 className="date"> 2022 - 2022</h2>
            <img
              src="https://seekvectorlogo.com/wp-content/uploads/2018/02/university-of-toronto-vector-logo.png"
              alt=""
              height={500}
              width={700}
            />

            <h1 className="Degree">Full Stack Developer Coding Bootcamp</h1>

            <h2 className="School">University of Toronto</h2>
          </div> */}
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
    </div>
  );
}

export default Experience;
