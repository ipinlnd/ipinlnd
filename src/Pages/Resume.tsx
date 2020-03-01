import React from "react";
import "../App.css";
import { Slider } from "nlnd-slider";
import { Header } from "../Components/Resume/Header";
import { Introduction } from "../Components/Resume/Introduction";
import { Zharfpouyan } from "../Components/Resume/Zharfpouyan";
import { Communere1 } from "../Components/Resume/Communere1";
import { Communere2 } from "../Components/Resume/Communere2";
import { Communere3 } from "../Components/Resume/Communere3";
import { OtherActivities } from "../Components/Resume/OtherActivities";
import styled from "styled-components";
import { Education } from "../Components/Resume/Education";
import { Skills } from "../Components/Resume/Skills";
import { Outroduction } from "../Components/Resume/Outro";

const FullHeight = styled.div`
  height: 100vh;
  @media only screen and (max-width: 700px) {
    height: unset;
  }
`;

const Resume: React.FC = () => {
  return (
    <div className="App">
      <Slider>
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
          <Communere2 />
        </FullHeight>
        <FullHeight>
          <Communere3 />
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
      </Slider>
    </div>
  );
};

export default Resume;
