import styled, { keyframes } from "styled-components";

interface SlideProps {
  background: string;
  backgroundImage?: string;
}

const appear = keyframes`
    to {opacity: 1}
`;

const Container = styled.div`
  background-color: ${(props: SlideProps) => props.background};
  background-image: ${(props: SlideProps) => props.backgroundImage || "none"};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const FadeInContent = styled.div`
  opacity: 0;
  animation: ${appear} 0.5s linear forwards;
  animation-delay: 0.3s;
  padding: 10%;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  font-style: italic;
  font-weight: bold;
  font-family: cursive;
`;

const CornerText = styled.h1`
  font-size: 18px;
  position: absolute;
  top: 1%;
  left: 1%;
  font-style: italic;
  font-weight: bold;
  font-family: cursive;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: white;
  color: black;
  text-align: left;
  padding: 2%;
`;

const SharedComponents = {
  Container,
  FadeInContent,
  RowContainer,
  Link,
  CornerText,
  Card
};

export { SharedComponents };
