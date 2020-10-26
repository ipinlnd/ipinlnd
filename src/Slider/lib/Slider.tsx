import React from "react";
import styled, { keyframes } from "styled-components";
import { Slide } from "./Slide";

import CLeft from "../../Assets/chevron-left.svg";
import CRight from "../../Assets/chevron-right.svg";
import { Header } from "../../Components/Resume/Header";
import { Introduction } from "../../Components/Resume/Introduction";
import { Zharfpouyan } from "../../Components/Resume/Zharfpouyan";
import { Communere1 } from "../../Components/Resume/Communere1";
import { Education } from "../../Components/Resume/Education";
import { OtherActivities } from "../../Components/Resume/OtherActivities";
import { Skills } from "../../Components/Resume/Skills";
import { Outroduction } from "../../Components/Resume/Outro";

interface Props {}

interface State {
  index: number;
}

class Slider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  scroll = (index: number) => {
    window.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth",
    });
    this.setState({ index: index });
  };

  handleKeyDown = (event: Event) => {
    let index = this.state.index;
    switch ((event as KeyboardEvent).key) {
      case "ArrowRight":
      case "PageDown":
        event.preventDefault();
        if (index < 7) {
          this.scroll(index + 1);
        }
        break;
      case "ArrowLeft":
      case "PageUp":
        event.preventDefault();
        if (index > 0) {
          this.scroll(index - 1);
        }
        break;
    }
  };

  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.handleKeyDown.bind(this));
  };

  componentDidUpdate = () => {};

  render = () => {
    return (
      <div
        style={{
          height: "100vh",
          width: "fit-content",
          display: "inline-flex",
          justifyContent: "flex-start",
        }}
      >
        <Slide visible={true} current={this.state.index} index={0}>
          <Header
            visible={this.state.index === 0}
            onHome={() => this.setState({ index: 0 })}
          />
        </Slide>
        <Slide
          visible={this.state.index === 1}
          current={this.state.index}
          index={1}
        >
          <Introduction />
        </Slide>
        <Slide
          visible={this.state.index === 2}
          current={this.state.index}
          index={2}
        >
          <Zharfpouyan />
        </Slide>
        <Slide
          visible={this.state.index === 3}
          current={this.state.index}
          index={3}
        >
          <Communere1 />
        </Slide>
        <Slide
          visible={this.state.index === 4}
          current={this.state.index}
          index={4}
        >
          <Education />
        </Slide>
        <Slide
          visible={this.state.index === 5}
          current={this.state.index}
          index={5}
        >
          <OtherActivities />
        </Slide>
        <Slide
          visible={this.state.index === 6}
          current={this.state.index}
          index={6}
        >
          <Skills />
        </Slide>
        <Slide
          visible={this.state.index === 7}
          current={this.state.index}
          index={7}
        >
          <Outroduction />
        </Slide>
        {this.state.index < 7 && (
          <Right
            onClick={() => this.scroll(this.state.index + 1)}
            src={CRight}
            width="60px"
          />
        )}
        {this.state.index > 0 && (
          <Left
            onClick={() => this.scroll(this.state.index - 1)}
            src={CLeft}
            width="60px"
          />
        )}
      </div>
    );
  };
}

const anim = keyframes`
  from {opacity: .6};
  to {opacity: .0}
`;

const Right = styled.img`
  position: fixed;
  right: 10px;
  top: 46.1%;
  animation: ${anim} 3s alternate infinite;
  cursor: pointer;
  z-index: 10;
`;

const Left = styled.img`
  position: fixed;
  left: 10px;
  top: 46.1%;
  animation: ${anim} 3s alternate infinite;
  cursor: pointer;
  z-index: 10;
`;

export { Slider };
