import React from "react";

interface SlideProps {}

class Slide extends React.Component<SlideProps> {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export { Slide };
