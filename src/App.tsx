import React from "react";
import "./App.css";
import { Slider } from "./Components/Slider";
import { Slide } from "./Components/Slide";
import { SlideA, SlideB, SlideC } from "./Components/SlideA";

const App: React.FC = () => {
  return (
    <div className="App">
      <Slider>
        <Slide>
          <SlideA />
        </Slide>
        <Slide>
          <SlideB />
        </Slide>
        <Slide>
          <SlideC />
        </Slide>
      </Slider>
    </div>
  );
};

export default App;
