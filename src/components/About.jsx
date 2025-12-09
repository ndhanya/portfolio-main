import transition from "../transition";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";

function About() {
  const [load, setLoad] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const divRef = useRef(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  const handleMouseMove = useCallback(
    (e) => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const isWithinX = e.clientX >= rect.left && e.clientX <= rect.right;
        const isWithinY = e.clientY >= rect.top && e.clientY <= rect.bottom;

        setIsHovering(isWithinX && isWithinY);
        setPointer({ x: e.clientX, y: e.clientY });
      }
    },
    [divRef]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);
  const pointerStyle = useMemo(() => {
    return {
      position: "absolute",
      top: `${pointer.y - 50}px`,
      left: `${pointer.x - 50}px`,
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      mixBlendMode: "lighten",
      background: `radial-gradient(circle at center, white 0.1%,skyblue 5%, deepskyblue 5%, transparent 45%, transparent 100%)`,
      cursor: "none",
      pointerEvents: "none",
      opacity: isHovering ? 1 : 0,
      transform: isHovering ? "scale(1)" : "scale(0)",
      transition: "opacity 0.2s, transform 0.2s",
      zIndex: 100,
    };
  }, [pointer, isHovering]);

  const svgMarkup = `
    <svg viewBox="0 0 960 300">
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="80%">
          ABOUT
        </text>
      </symbol>

      <g class="g-ants">
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
      </g>
    </svg>
  `;
  return (
    <div className="main">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: svgMarkup }} />
        {load ? (
          <div
            className="skillsDivContainer"
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "none", position: "absolute" }}
          >
            <h1>About</h1>
            <div
              style={{ width: "90%", marginTop: "20px" }}
              className="flexBox"
            >
              <p>
                Hey there, fellow coders!👽
                <br />
                <br />
                I'm an Expertise as a Senior UI Frontend Developer, I build enterprise-grade interfaces using React, Redux, TypeScript, Next.js.
                delivering user-friendly web applications. specializing in ReactJS, AngularJS, and NodeJS🚀. 
                <br />
                <br /> Passionate about crafting seamless solutions that blend
                creativity and functionality. Eager to contribute expertise to
                exciting projects, I thrive in collaborative environments.
                Always staying on the cutting edge of industry trends. Let's
                connect and turn ideas into reality! 💻🌐
                <br />
                <br /> #UI Frontend Developer #web Developer #ReactJS #AngularJS #NodeJS
              </p>
            </div>
          </div>
        ) : null}
      </div>

      <div style={pointerStyle} className="pointernew" />
    </div>
  );
}

export default transition(About);
