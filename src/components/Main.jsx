// src/components/Main.jsx
import React, { useState, useEffect } from "react";
import dhanyaPhoto from "../assets/images/Dhanya.jpeg";
import MeteorShower from "./MeteorShower";

// Import popups and pages
import Popup from "./Popup";
import About from "./About";
import Skills from "./Skills";

function Main() {
  // Load states
  const [bgLoaded, setBGLoaded] = useState(false);
  const [isBoxLoaded, setIsBoxLoaded] = useState(false);
  const [isPicLoaded, setIsPicLoaded] = useState(false);

  // Popup states
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setBGLoaded(true), 800);
    const t2 = setTimeout(() => setIsBoxLoaded(true), 1900);
    const t3 = setTimeout(() => setIsPicLoaded(true), 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <>
      <div className="main">
        <div className="backgroundScreen">
          <div className="left" />
          <div className="right">
            <MeteorShower />
          </div>
        </div>

        {bgLoaded && (
          <div className="content">
            <div className="box">
              <div className="leftBox">
                {isBoxLoaded && (
                  <img src={dhanyaPhoto} className="fade-in-element" alt="myimage" />
                )}
              </div>

              <div className="rightBox">
                {isPicLoaded && (
                  <>
                    <h1 style={{ color: "white", fontSize: "50px" }}>Hi,</h1>
                    <p style={{ color: "white", fontSize: "30px", marginTop: 30 }}>
                      I'm Naga Dhanya.
                    </p>
                    <p style={{ color: "gray", fontSize: "20px", marginTop: 20, fontWeight: 400 }}>
                      I am a Sr. UI Frontend developer💻
                    </p>
                  </>
                )}
              </div>
            </div>

            {isPicLoaded && (
              <div className="links">
                <div className="bottomLinks">
                  <span className="bl">
                    <span
                      className="black"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowAbout(true)}
                    >
                      About Me.
                    </span>
                  </span>

                  <span className="bl">
                    <span
                      className="white"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowSkills(true)}
                    >
                      My Skills.
                    </span>
                  </span>
                </div>

                <div className="rightLinks">
                  <span className="icon">
                    <a href="https://www.linkedin.com/in/dhanya-n-427bb1210/" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  </span>
                  <span className="icon">
                    <a href="https://github.com/ndhanya/NagaDhanya_Portfolio" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-github" />
                    </a>
                  </span>
                </div>

                <div className="topLinks">
                  <span className="tl">
                    <span
                      className="white"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowContact(true)}
                    >
                      Say Hi..
                    </span>
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* About Popup */}
      <Popup isOpen={showAbout} onClose={() => setShowAbout(false)}>
        <About />
      </Popup>

      {/* Skills Popup */}
      <Popup isOpen={showSkills} onClose={() => setShowSkills(false)}>
        <Skills />
      </Popup>

      {/* Contact Info Popup */}
      <Popup isOpen={showContact} onClose={() => setShowContact(false)}>
  <div style={{ textAlign: "center", fontSize: "18px" }}>
    <h3 style={{ marginBottom: "12px" }}>Contact Me:</h3>
    <h2 style={{ margin: "0 0 8px 0" }}>Naga Dhanya</h2>
    <p style={{ margin: "4px 0" }}>Phone: +1-(479)-388-1947</p>
    <p style={{ margin: "4px 0" }}>Email: dhanya.2048@gmail.com</p>
  </div>
</Popup>
    </>
  );
}

export default Main;
