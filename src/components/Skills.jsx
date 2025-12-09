import transition from "../transition";
import React, { useState, useEffect } from "react";
import ParticlesSkills from "./ParticlesSkills";

function Skills() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main">
      <div className="center">
        <h1
          style={{
            position: "absolute",
            fontSize: "300px",
            color: "rgba(0,0,0,0.1)",
            fontFamily: "rubik,serif",
          }}
        >
          SKILLS
        </h1>
        {load ? (
          <div className="skillsDivContainer">
            <h1>Skills</h1>
            <div
              style={{ width: "90%", marginTop: "20px" }}
              className="flexBox"
            >
              <div>
                <h3>Frontend Technologies</h3>
                <p style={{ marginTop: "5px" }}>
                  HTML, CSS, JavaScript, Bootstrap, Material UI, ReactJS
                </p>

                <h3 style={{ marginTop: "19px" }}>Backend</h3>
                <p style={{ marginTop: "5px" }}>
                  Node.js, Express.js, EJS, REST API
                </p>

                <h3 style={{ marginTop: "19px" }}>Databases</h3>
                <p style={{ marginTop: "5px" }}>MySQL, MongoDB, Mongoose</p>
              </div>

              <div className="rightSkill">
                <h3>Other Tools</h3>
                <p style={{ marginTop: "5px" }}>
                  Docker, Jenkins, GitHub, GitLab, Postman, SoapUI, Selenium
                </p>
                <h3 style={{ marginTop: "19px" }}>Languages</h3>
                <p style={{ marginTop: "5px" }}>Javascript, Python</p>

                <h3 style={{ marginTop: "19px" }}>Cloud</h3>
                <p style={{ marginTop: "5px" }}>AWS</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <ParticlesSkills />
    </div>
  );
}

export default transition(Skills);
