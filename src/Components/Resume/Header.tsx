import React from "react";
import me from "../../Assets/me.png";
import email from "../../Assets/email.png";
import phone from "../../Assets/phone.png";
import link from "../../Assets/link.png";
import { SectionContainer, RowContainer, Avatar, ColumnContainer, Link } from "./Shared";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const BottomBackground = styled.div`
  width: 100%;
  height: 50%;
  top: 50%;
  position: absolute;
  background-color: #89948a;
  z-index: 0;
  @media only screen and (max-width: 700px) {
    visibility: hidden;
  }
`;

const ImageIcon = styled.img`
  padding-right: 4%;
  width: 30px;
  @media only screen and (max-width: 700px) {
    width: 20px;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #5b6b5d;
  color: white;
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  padding: 2%;
  box-shadow: 0 0 12px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  :hover {
    background-color: #5b6b5d99;
  }
  @media only screen and (max-width: 700px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-family: "Noto Sans", sans-serif;
  font-size: 82px;
  font-weight: bold;
  color: white;
  padding: 2%;
  margin-top: 30%;
  padding-bottom: 0%;
  margin-bottom: 5%;
  @media only screen and (max-width: 700px) {
    font-size: 32px;
    margin-top: 0%;
    margin-bottom: 5%;
  }
`;

const Header = () => {
  return (
    <SectionContainer color="#5B6B5D">
      <BottomBackground />
      <RowContainer width="100%" height="100%" style={{ zIndex: 1 }}>
        <ColumnContainer width="25%">
          <Avatar alt="ipinlnd" src={me} />
        </ColumnContainer>
        <ColumnContainer
          width="30%"
          alignItems="flex-start"
          justifyContent="flex-start"
          height="60%"
        >
          <Title>Ali Rezaee</Title>
          <ColumnContainer
            width="40%"
            alignItems="flex-start"
            justifyContent="space-evenly"
            height="70%"
            style={{ paddingLeft: "10%", paddingRight: "10%" }}
          >
            <RowContainer
              justifyContent="flex-start"
              width="100%"
              sameOnPhone
              style={{ paddingBottom: "1%" }}
            >
              <ImageIcon alt="email" src={email} />
              <Link href="mailto:nlndipi@hotmail.com">nlndipi@hotmail.com</Link>
            </RowContainer>
            <RowContainer
              justifyContent="flex-start"
              width="100%"
              sameOnPhone
              style={{ paddingBottom: "1%" }}
            >
              <ImageIcon alt="email" src={phone} />
              <Link href="">+989392188602</Link>
            </RowContainer>
            <RowContainer
              justifyContent="flex-start"
              width="100%"
              sameOnPhone
              style={{ paddingBottom: "1%" }}
            >
              <ImageIcon alt="email" src={link} />
              <Link href="http://github.com/ipinlnd">Github, </Link>
              <Link href="http://linkedin.com/in/ipinlnd">Linkedin, </Link>
              <Link href="http://twitter.com/ipinlnd">Twitter</Link>
            </RowContainer>
            <RouterLink to="/blog" style={{ width: "100%" }}>
              <Button>Blog</Button>
            </RouterLink>
          </ColumnContainer>
        </ColumnContainer>
      </RowContainer>
    </SectionContainer>
  );
};

export { Header };
