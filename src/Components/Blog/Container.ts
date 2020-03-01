import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #5b6c5d;
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

const Header = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #1e1e1e;
  color: white;
  z-index: 10;
  box-shadow: 0px 2px 30px #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.h1`
  font-size: 40px;
  padding: 0;
  margin: 0;
`;

const ContentContainer = styled.div`
  width: 1000px;
  max-width: 90vw;
  border: solid 1px #1e1e1e88;
  height: 100%;
  margin-top: 1%;
`;

const BlogShort = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  padding: 2%;
  margin-top: 1%;
`;

const BlogTitle = styled.h1`
  font-size: 30px;
  color: #ce915b;
  font-weight: bold;
`;

const BlogDate = styled.h1`
  font-size: 14px;
  color: black;
  font-weight: bold;
`;

const BlogDescr = styled.p`
  color: white;
  width: 80%;
`;

const ReadMore = styled(Link)`
  font-size: 20px;
  color: #a2afa3;
  font-weight: bold;
  text-shadow: 1px 1px 1px black;
  text-decoration: none;
`;

const SharedComponents = {
  Container,
  Header,
  HeaderText,
  ContentContainer,
  BlogShort,
  BlogTitle,
  BlogDescr,
  ReadMore,
  BlogDate
};

export { SharedComponents };
