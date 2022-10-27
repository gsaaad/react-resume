import React from "react";
import "./index.css";
function Resume() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12 mx-4">
      <div className="section-title text-4xl border-l-4 border-t-4 border-emerald-900 text-4xl border-l-4 border-t-4 border-emerald-900 m-2">
        Career Profile
      </div>
      <div className="desc border-2 border-emerald-400 m-2">
        <p className="career-statement text-2xl">
          George Saad is a{" "}
          <span className="text-emerald-300">high performance individual</span>.
        </p>
        <p className="career-statement text-2xl">
          He indulges in learning{" "}
          <span className="text-emerald-300">complex scalable systems</span>,
          while practicing industry standards, and{" "}
          <span className="text-emerald-300">creative problem thinking</span>
        </p>
      </div>
      <div className="section-title text-4xl border-l-4 border-t-4 border-emerald-900">
        Experiences
      </div>
      <div>
        <div className="experiences">
          <div className="desc border-2 border-emerald-300">
            <div className="job-title text-3xl text-3xl">
              Full Stack Developer
            </div>
            <div className="job-workplace text-2xl border-4 rounded-xl border-emerald-300 m-2 text-2xl border-4 rounded-xl border-emerald-300 m-2">
              FREE LANCER
            </div>
            <div className="job-date text-2xl text-2xl">[2021-Current]</div>
            <div className="descp">
              <ul>
                <li className="job-descp text-2xl m-2 text-2xl m-2">
                  Created{" "}
                  <span className="text-emerald-300">
                    user-friendly applications{" "}
                  </span>
                  to satisfy their requirements and enhance performance
                </li>
                <li className="job-descp text-2xl m-2 text-2xl m-2">
                  <span className="text-emerald-300">Designed wireframes</span>{" "}
                  and implemented styling using CSS frameworks like{" "}
                  <span className="text-emerald-300">Bootstrap</span> and{" "}
                  <span className="text-emerald-300">TailwindCSS</span>
                </li>
                <li className="job-descp text-2xl m-2 text-2xl m-2">
                  Extracting and{" "}
                  <span className="text-emerald-300">
                    manipulating data utilizing Python
                  </span>
                  , to be displayed on web applications.
                </li>
                <li className="job-descp text-2xl m-2 text-2xl m-2">
                  Deployed MERN Projects to Heroku
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div className="desc border-2 border-emerald-300">
            <div className="job-title text-3xl">Research Assisstant</div>
            <div className="job-workplace text-2xl border-4 rounded-xl border-emerald-300 m-2">
              Mallet Lab
            </div>
            <div className="job-date text-2xl text-2xl">[2019-2020]</div>
            <div className="descp">
              <ul>
                <li className="job-descp text-2xl m-2">
                  Published in November 2020,{" "}
                  <span className="text-cyan-300">
                    Acknowledged as co-author
                  </span>
                  , endorsement on Acknowledgement page, on page 7
                </li>
                <li className="job-descp text-2xl m-2">
                  Using ImageJ to quantify dendrites through sholl analysis and
                  branching order
                </li>
                <li className="job-descp text-2xl m-2">
                  Organized files, maintained database, and ran{" "}
                  <span className="text-cyan-300">data analysis</span>
                </li>
                <li className="job-descp text-2xl m-2">
                  "SPATIAL MEMORY AND EXECUTIVE FUNCTIONING IN THE GOTO-KAKIZAKI
                  RAT MODEL OF DIABETES", by Lorielle Dietz et al. 2020
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div className="desc border-2 border-emerald-300">
            <div className="job-title text-3xl">Research Assistant</div>
            <div className="job-workplace text-2xl border-4 rounded-xl border-emerald-300 m-2">
              Jones Lab
            </div>
            <div className="job-date text-2xl">[2017-2020]</div>
            <div className="descp">
              <ul>
                <li className="job-descp text-2xl m-2">
                  Assited in{" "}
                  <span className="text-cyan-300">
                    EEG scan-based psycholinguistics neuroscience research
                  </span>{" "}
                  study regarding analysis of bilingual individuals
                </li>
                <li className="job-descp text-2xl m-2">
                  Manage, review and maintain{" "}
                  <span className="text-cyan-300">
                    research data and database
                  </span>
                </li>
                <li className="job-descp text-2xl m-2">
                  Research experience in{" "}
                  <span className="text-cyan-300">
                    running the research experiment from start to finish
                  </span>{" "}
                  as well as setting up the EEG system
                </li>
                <li className="job-descp text-2xl m-2">
                  Organized, scheduled data collection, and data analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section-title text-4xl border-l-4 border-t-4 border-emerald-900 ">
        Education
      </div>

      <div className="schools border-2 border-emerald-300 rounded-xl">
        <div className="school-option">
          <img
            src="https://seekvectorlogo.com/wp-content/uploads/2018/02/university-of-toronto-vector-logo.png"
            alt=""
            className="school-img"
          />

          <h1 className="degree text-3xl">
            Full Stack Developer Coding Bootcamp
          </h1>

          <h2 className="school text-2xl border-4 border-emerald-300 p-2 m-2 md:w-3/5 md:mx-auto">
            University of Toronto
          </h2>
        </div>
        <div className="school-option mt-12">
          <img
            src="https://thecord.ca/wp-content/uploads/2013/01/Laurier-Refined-Seal-e1357722647279.jpg"
            alt=""
            className="school-img"
          />
          <div className="laurier">
            <h1 className="degree text-3xl">BSc. Psychology & Neuroscience</h1>
            <h3 className="minor text-xl m-2">Minor in Biology</h3>
            <h3 className="minor text-xl m-2">Honours Thesis</h3>
            <h2 className="school text-2xl border-4 border-emerald-300 p-2 m-2 md:w-3/5 md:mx-auto">
              Wilfrid Laurier University
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
