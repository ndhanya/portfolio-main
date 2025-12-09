import React, { useState, useRef } from "react";
import music from "../assets/music/audio.mp3";
import { NavLink } from "react-router-dom";
function Header() {
  const [play, setPlay] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    setPlay(!play);
    if (!play) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <>
      <div className="header">
        <NavLink
          to="/"
          className="logo"
          style={{
            textDecoration: "none",
            color: "#000",
            mixBlendMode: "difference",
          }}
        >
          ND
        </NavLink>
        <div className="playPause">
          {!play ? (
            <span
              className="material-symbols-outlined pointer"
              onClick={handleClick}
            >
              play_arrow
            </span>
          ) : (
            <span
              className="material-symbols-outlined pointer"
              onClick={handleClick}
            >
              pause
            </span>
          )}
        </div>
      </div>
      <audio src={music} ref={ref} loop />
    </>
  );
}

export default Header;
