import React from "react";
import "./App.css";
import { Slider } from "nlnd-slider";
import { Header } from "./Components/Header";
import { Introduction } from "./Components/Introduction";
import { Zharfpouyan } from "./Components/Zharfpouyan";
import { Communere1 } from "./Components/Communere1";
import { Communere2 } from "./Components/Communere2";
import { Communere3 } from "./Components/Communere3";
import { OtherActivities } from "./Components/OtherActivities";
import styled from "styled-components";
import { Education } from "./Components/Education";
import { Skills } from "./Components/Skills";
import { Outroduction } from "./Components/Outro";

const FullHeight = styled.div`
  height: 100vh;
  @media only screen and (max-width: 700px) {
    height: unset;
  }
`;

const App: React.FC = () => {
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

export default App;
