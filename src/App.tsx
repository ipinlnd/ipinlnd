import React from "react";
import "./App.css";
import { Slider, Slide } from "nlnd-slider";
import { Header } from "./Components/Header";
import { Introduction } from "./Components/Introduction";
import { Zharfpouyan } from "./Components/Zharfpouyan";
import { Communere1 } from "./Components/Communere1";
import { Communere2 } from "./Components/Communere2";
import { Communere3 } from "./Components/Communere3";

const App: React.FC = () => {
  return (
    <div className="App">
      <Slider>
        <Slide>
          <Header />
        </Slide>
        <Slide>
          <Introduction />
        </Slide>
        <Slide>
          <Zharfpouyan />
        </Slide>
        <Slide>
          <Communere1 />
        </Slide>
        <Slide>
          <Communere2 />
        </Slide>
        <Slide>
          <Communere3 />
        </Slide>
      </Slider>
    </div>
  );
};

export default App;
