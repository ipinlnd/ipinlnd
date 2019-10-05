import React from "react";
import styled, { keyframes } from "styled-components";

interface SlideProps {
  background: string;
}

const SlideComponent = styled.div`
  background-color: ${(props: SlideProps) => props.background};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const appear = keyframes`
    to {opacity: 1}
`;

const Contents = styled.div`
  opacity: 0;
  font-size: 5vw;
  animation: ${appear} 0.5s linear forwards;
  animation-delay: 0.3s;
`;

const SlideA = () => {
  return (
    <SlideComponent background="#4784e6">
      <Contents style={{ fontSize: "3vw" }}>Hello</Contents>
    </SlideComponent>
  );
};

const SlideB = () => {
  return (
    <SlideComponent background="#1a1e22">
      <Contents style={{ fontSize: "3vw" }}>My name is Ali</Contents>
    </SlideComponent>
  );
};

const SlideC = () => {
  return (
    <SlideComponent background="#31645C">
      <Contents style={{ fontSize: "3vw" }}>Who are you?</Contents>
    </SlideComponent>
  );
};

export { SlideA, SlideB, SlideC };
