import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesSkills() {
  const particlesInit = async (main) => {
    await loadSlim(main); // FIXED HERE
  };

  return (
    <Particles
      className="particles"
      options={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#000000",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            }
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#000000",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            }
          },
        },
        retina_detect: true,
      }}
      init={particlesInit}
    />
  );
}

export default ParticlesSkills;
