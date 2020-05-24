import styled, { keyframes } from "styled-components";

const appear = keyframes`
    to {opacity: 1}
`;

const FadeInContent = styled.div`
  width: 95%;
  opacity: 0;
  animation: ${appear} 0.5s linear forwards;
  animation-delay: 0.3s;
  padding: 0 10% 1% 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RowItem = styled.div`
  flex: 1;
  margin: 0 1%;
  height: 100%;
  @media only screen and (max-width: 700px) {
    margin: 1% 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding-bottom: 8%;
`;

const GridCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: #b8c5bb;
  color: black;
  margin: 1%;
  font-size: 14px;
  border-radius: 5px;
  @media only screen and (max-width: 700px) {
    font-size: 8px;
  }
`;

const SharedComponents = {
  FadeInContent,
  RowItem,
  Grid,
  GridCard,
};

export { SharedComponents };
