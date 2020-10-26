import React from "react";
import me from "../../Assets/me.png";
import github from "../../Assets/github.png";
import linkedin from "../../Assets/linkedin.svg";
import twitter from "../../Assets/twitter.svg";
import { RowContainer, Link } from "./Shared";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  visible?: boolean;
  onHome: () => void;
}

const Header = (props: Props) => {
  return (
    <Container visible={props.visible}>
      <BottomBackground visible={props.visible} />
      <MainContainer visible={props.visible}>
        <Avatar
          onClick={() => props.onHome()}
          visible={props.visible}
          alt="ipinlnd"
          src={me}
        />
        <TextContainer visible={props.visible}>
          <Title visible={props.visible}>Ali Rezaee</Title>
          <LinkContainer visible={props.visible}>
            <RowContainer
              justifyContent="flex-start"
              sameOnPhone
              style={{ paddingBottom: "1%" }}
            >
              <Link href="mailto:nlndipi@hotmail.com">nlndipi@hotmail.com</Link>
            </RowContainer>
            <IconContainer visible={props.visible}>
              <Link href="https://github.com/ipinlnd">
                <ImageIcon alt="github" src={github} />
              </Link>
              <Link href="http://linkedin.com/in/ipinlnd">
                <ImageIcon alt="linkedin" src={linkedin} />
              </Link>
              <Link href="http://twitter.com/ipinlnd">
                <ImageIcon alt="twitter" src={twitter} />
              </Link>
            </IconContainer>
          </LinkContainer>
          <RouterLink
            to="/blog"
            style={{ width: props.visible ? "50%" : "20%" }}
          >
            <Button>Blog</Button>
          </RouterLink>
        </TextContainer>
      </MainContainer>
    </Container>
  );
};

interface SectionProps {
  color?: string;
  height?: string;
  visible?: boolean;
  anim?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: ${(props: SectionProps) =>
    props.visible ? "column" : "row"};
  width: 100%;
  height: 100%;
  background-color: #060708;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: "Noto Sans", sans-serif;
`;

const BottomBackground = styled.div`
  width: 100%;
  height: ${(props: SectionProps) => (props.visible ? "50%" : "100%")};
  top: ${(props: SectionProps) => (props.visible ? "50%" : "0%")};
  transition: 1s;
  position: absolute;
  background-color: #06131f;
  z-index: 0;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(props: SectionProps) => (props.visible ? "60%" : "90%")};

  align-items: center;
  justify-content: flex-start;
  z-index: 1;
  @media only screen and (max-width: 700px) {
    width: 90%;
  }
`;

const Avatar = styled.img`
  border-radius: 100%;
  border: 10px solid #06131f;
  width: ${(props: SectionProps) => (props.visible ? "300px" : "50px")};
  cursor: ${(props: SectionProps) => (props.visible ? "unset" : "pointer")};
  transition: 1s;
  @media only screen and (max-width: 700px) {
    width: ${(props: SectionProps) => (props.visible ? "100px" : "40px")};
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: ${(props: SectionProps) =>
    props.visible ? "column" : "row"};
  width: ${(props: SectionProps) => (props.visible ? "50%" : "90%")};
  justify-content: space-between;
  align-items: ${(props: SectionProps) =>
    props.visible ? "flex-start" : "center"};
  margin-left: 5%;
`;

const Title = styled.h1`
  font-family: "Noto Sans", sans-serif;
  font-size: ${(props: SectionProps) => (props.visible ? "82px" : "35px")};
  margin-top: 0;
  margin-bottom: ${(props: SectionProps) => (props.visible ? "50px" : "0")};
  font-weight: bold;
  color: #0a3e74;
  transition: 1s;
  @media only screen and (max-width: 700px) {
    font-size: 32px;
    margin-top: ${(props: SectionProps) => (props.visible ? "40px" : "0")};
    margin-bottom: ${(props: SectionProps) => (props.visible ? "10px" : "0")};
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: ${(props: SectionProps) =>
    props.visible ? "column" : "row"};
  width: ${(props: SectionProps) => (props.visible ? "100%" : "30%")};
  justify-content: space-between;
  align-items: ${(props: SectionProps) =>
    props.visible ? "flex-start" : "center"};
  @media only screen and (max-width: 700px) {
    display: ${(props: SectionProps) => (props.visible ? "flex" : "none")};
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props: SectionProps) =>
    props.visible ? "space-between" : "center"};
  width: 50%;
  padding-bottom: 1%;
`;

const ImageIcon = styled.img`
  margin: 0 10px;
  width: 30px;
  @media only screen and (max-width: 700px) {
    width: 20px;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #0a3e74;
  color: white;
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  padding: 2%;
  box-shadow: 0 0 12px 8px rgba(0, 0, 0, 0.2);
  transition: 1s;
  cursor: pointer;
  :hover {
    background-color: #0d1621;
  }
`;

export { Header };
