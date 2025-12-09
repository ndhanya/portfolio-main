import React from "react";
import styled, { keyframes } from "styled-components";

const generateRandomPosition = (maxX, maxY) => ({
  x: Math.random() * maxX,
  y: Math.random() * maxY,
});

const generateStarShadows = (starCount) => {
  let shadows = "";

  for (let i = 0; i < starCount; i++) {
    const { x, y } = generateRandomPosition(1920, 1000);
    shadows += `${x}px ${y}px #fff, `;
  }

  return shadows.slice(0, -2); // Remove the trailing comma and space
};

const meteorAnimation = keyframes`
  0% {
    opacity: 1;
    margin-top: -300px;
    margin-right: -300px;
  }
  12% {
    opacity: 0;
  }
  15% {
    margin-top: 300px;
    margin-left: -600px;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const MeteorShowerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
  box-shadow: ${(props) => props.starShadows};
`;

const Meteor = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}%;
  width: 300px;
  height: 1px;
  transform: rotate(-45deg);
  background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
  animation: ${meteorAnimation} ${(props) => props.duration}s linear infinite;

  &:before {
    content: "";
    position: absolute;
    width: 4px;
    height: 5px;
    border-radius: 50%;
    margin-top: -2px;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 15px 3px #fff;
  }
`;

const Star = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  background: #fff;
  box-shadow: ${(props) => props.starShadows};
`;

const MeteorShower = () => {
  const starShadows = generateStarShadows(500); // Increased number of stars

  return (
    <MeteorShowerContainer starShadows={starShadows}>
      {[...Array(150).keys()].map((index) => {
        const { x, y } = generateRandomPosition(1920, 1000);
        return <Star key={index} style={{ left: `${x}px`, top: `${y}px` }} />;
      })}
      {[...Array(15).keys()].map((index) => {
        const top = Math.random() * 250 + 50;
        const left = Math.random() * 90 + 9;
        const duration = (Math.random() * 7) / 10 + 3;

        return <Meteor key={index} top={top} left={left} duration={duration} />;
      })}
    </MeteorShowerContainer>
  );
};

export default MeteorShower;
