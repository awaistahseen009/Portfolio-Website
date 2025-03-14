import React from "react";
import "./skills.css";
import { Element } from "react-scroll";
const Skills = () => {
  return (
    <section className="section skills__section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle skills__subtitle">
        I develop skills regularly
      </span>
      <div className="skills">
        <div className="skill">
          <div className="skill-name">Machine Learning</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="80%"
              style={{ maxWidth: "80%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">Data Science</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="80%"
              style={{ maxWidth: "80%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">Python</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="90%"
              style={{ maxWidth: "90%" }}
            ></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">C/C++</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="90%"
              style={{ maxWidth: "90%" }}
            ></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">Javascript</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="70%"
              style={{ maxWidth: "70%" }}
            ></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">HTML</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="90%"
              style={{ maxWidth: "90%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">CSS</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="90%"
              style={{ maxWidth: "90%" }}
            ></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">Azure and GCP</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="70%"
              style={{ maxWidth: "70%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">MLOps</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="60%"
              style={{ maxWidth: "60%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">CI/CD</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="70%"
              style={{ maxWidth: "70%" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
