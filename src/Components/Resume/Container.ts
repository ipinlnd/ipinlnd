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
  position: relative;
  height: 100%;
`;

const Header = styled.h1`
  font-size: 70px;
  @media only screen and (max-width: 700px) {
    font-size: 50px;
  }
`;

const FadeInContent = styled.div`
  width: 95%;
  opacity: 0;
  animation: ${appear} 0.5s linear forwards;
  animation-delay: 0.3s;
  padding: 0 10% 1% 10%;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const RowItem = styled.div`
  flex: 1;
  margin: 0 1%;
  @media only screen and (max-width: 700px) {
    margin: 1% 0;
  }
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
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: white;
  color: black;
  text-align: left;
  padding: 2%;
  border-radius: 10px;
  height: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding-bottom: 8%;
`;

const GridCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: white;
  color: black;
  margin: 1%;
  font-size: 14px;
  @media only screen and (max-width: 700px) {
    font-size: 8px;
  }
`;

const BlogButton = styled.button`
  position: absolute;
  top: 1%;
  right: 5%;
  display: inline-block;
  border-radius: 4px;
  background-color: #a2afa3;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  span:after {
    content: "»";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  &:hover span {
    padding-right: 25px;
  }
  &:hover span:after {
    opacity: 1;
    right: 0;
  }
  @media only screen and (max-width: 700px) {
    font-size: 18px;
    width: 100px;
    padding: 5px;
  }
`;

const SharedComponents = {
  Container,
  FadeInContent,
  RowContainer,
  RowItem,
  Link,
  CornerText,
  Card,
  Header,
  Grid,
  GridCard,
  BlogButton
};

export { SharedComponents };
