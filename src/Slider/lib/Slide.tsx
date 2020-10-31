import React from "react";
import styled from "styled-components";

interface Props {
  visible: boolean;
  index: number;
  current: number;
  children: any;
}

const Slide = (props: Props) => {
  if (props.index === 0) {
    return (
      <HeaderContainer
        current={props.current}
        index={props.index}
        visible={props.visible}
      >
        {props.children}
      </HeaderContainer>
    );
  }
  return (
    <FadeInContent
      current={props.current}
      index={props.index}
      visible={props.visible}
    >
      {props.children}
    </FadeInContent>
  );
};

const FadeInContent = styled.div`
  width: 100vw;
  margin-left: ${(props: Props) =>
    props.visible
      ? "0"
      : props.index < props.current && props.index !== 0
      ? "calc(100% / -7)"
      : "0"};

  transition: 1s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  div {
    opacity: ${(props: Props) => (props.visible ? "1" : "0")};
    transition: opacity 1s 0.2s;
  }
`;

const HeaderContainer = styled(FadeInContent)`
  z-index: 5;
  left: 0;
  position: fixed;
  height: ${(props: Props) =>
    props.index === props.current ? "100vh" : "70px"};
`;

export { Slide };
