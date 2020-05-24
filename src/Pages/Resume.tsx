import React from "react";
import "../App.css";
import { Header } from "../Components/Resume/Header";
import { Introduction } from "../Components/Resume/Introduction";
import { Zharfpouyan } from "../Components/Resume/Zharfpouyan";
import { Communere1 } from "../Components/Resume/Communere1";
import { OtherActivities } from "../Components/Resume/OtherActivities";
import styled from "styled-components";
import { Education } from "../Components/Resume/Education";
import { Skills } from "../Components/Resume/Skills";
import { Outroduction } from "../Components/Resume/Outro";
import DocumentMeta from "react-document-meta";

const FullHeight = styled.div`
  min-height: 100vh;
  @media only screen and (max-width: 700px) {
    height: unset;
    min-height: unset;
  }
`;

const meta = {
  title: "ipinlnd",
  description: "Ali Rezaee's personal website",
  canonical: "https://ipinlnd.com",
  meta: {
    charset: "utf-8",
    name: {
      keywords:
        "ipinlnd, AliRezaee, react, developer, software, engineer, nlndipi, nlnd",
      "og:title": "Ali Rezaee's personal website",
      viewport: "width=device-width, initial-scale=1",
      content:
        "Ali Rezaee nlndipi@hotmail.com I am a 26-year-old software developer with 5 years of programming experience. I’ve been looking for remote jobs or jobs that can help me relocate. What follows is my resume.",
    },
  },
};

const Resume: React.FC = () => {
  return (
    <DocumentMeta {...meta}>
      <div className="App">
        <FullHeight>
          <Header />
        </FullHeight>
        <FullHeight>
          <Introduction />
        </FullHeight>
        <FullHeight>
          <Zharfpouyan />
        </FullHeight>
        <FullHeight>
          <Communere1 />
        </FullHeight>
        <FullHeight>
          <OtherActivities />
        </FullHeight>
        <FullHeight>
          <Education />
        </FullHeight>
        <FullHeight>
          <Skills />
        </FullHeight>
        <FullHeight>
          <Outroduction />
        </FullHeight>
      </div>
    </DocumentMeta>
  );
};

export default Resume;
