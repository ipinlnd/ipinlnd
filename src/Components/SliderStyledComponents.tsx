import styled, { keyframes, css } from "styled-components";

interface SlideProps {
  isMovingUp?: boolean;
  isMovingDown?: boolean;
  isSecond?: boolean;
}

const moveUp = keyframes`
  to{transform: translatey(-100vh);}
`;

const moveDown = keyframes`
  to{transform: translatey(100vh);}
`;

const SlideChild = styled.div`
  position: absolute;
  animation: ${(props: SlideProps) => {
    if (props.isMovingUp)
      return css`
        ${moveUp} .3s linear forwards
      `;
    else if (props.isMovingDown)
      return css`
        ${moveDown} .3s linear forwards
      `;
    else return "none";
  }};
`;

const SliderStyledComponents = { SlideChild };

export { SliderStyledComponents };
