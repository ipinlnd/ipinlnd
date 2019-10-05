import React from "react";
import { SliderStyledComponents } from "./SliderStyledComponents";

interface SliderProps {
  children: React.ReactNode[];
}

interface SliderStates {
  index: number;
  nextIndex: number;
  animating: boolean;
}

class Slider extends React.Component<SliderProps, SliderStates> {
  container: any;
  offset: any;
  constructor(props: SliderProps) {
    super(props);

    this.state = {
      index: 0,
      nextIndex: -1,
      animating: false
    };
  }

  handleScroll(event: Event) {
    let index = this.state.index;
    if (this.state.animating) return;

    if (
      (event as WheelEvent).deltaY > 0 &&
      index < this.props.children.length - 1
    ) {
      this.setState({ nextIndex: index + 1, animating: true });
    } else if ((event as WheelEvent).deltaY < 0 && index > 0) {
      this.setState({ nextIndex: index - 1, animating: true });
    }
  }

  handleKeyDown(event: Event) {
    let index = this.state.index;
    if (this.state.animating) return;
    if (
      (event as KeyboardEvent).key === "ArrowDown" &&
      index < this.props.children.length - 1
    ) {
      this.setState({ nextIndex: index + 1, animating: true });
    } else if ((event as KeyboardEvent).key === "ArrowUp" && index > 0) {
      this.setState({ nextIndex: index - 1, animating: true });
    }
  }

  componentDidMount() {
    window.addEventListener("mousewheel", this.handleScroll.bind(this));
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("mousewheel", this.handleScroll.bind(this));
    window.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentDidUpdate() {
    if (this.state.nextIndex !== -1) {
      setTimeout(() => {
        this.setState({
          index: this.state.nextIndex,
          nextIndex: -1,
          animating: false
        });
      }, 300);
    }
  }

  getChild = () => {
    if (this.state.nextIndex !== -1) {
      const moveUp = this.state.nextIndex > this.state.index;
      const moveDown = this.state.nextIndex < this.state.index;
      return (
        <div>
          <SliderStyledComponents.SlideChild
            style={{ top: 0 }}
            ref={node => (this.container = node)}
            isMovingUp={moveUp}
            isMovingDown={moveDown}
          >
            {this.props.children[this.state.index]}
          </SliderStyledComponents.SlideChild>
          <SliderStyledComponents.SlideChild
            isMovingUp={moveUp}
            isMovingDown={moveDown}
            style={{ top: moveUp ? "100vh" : "-100vh" }}
            ref={node => (this.container = node)}
          >
            {this.props.children[this.state.nextIndex]}
          </SliderStyledComponents.SlideChild>
        </div>
      );
    } else {
      return (
        <SliderStyledComponents.SlideChild
          ref={node => (this.container = node)}
        >
          {this.props.children[this.state.index]}
        </SliderStyledComponents.SlideChild>
      );
    }
  };

  render() {
    return <div>{this.getChild()}</div>;
  }
}

export { Slider };
