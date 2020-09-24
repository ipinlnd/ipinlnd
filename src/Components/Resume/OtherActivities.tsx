import React from "react";
import styled from "styled-components";
import { SharedComponents } from "./Container";
import { SectionContainer, Title, RowContainer, Card } from "./Shared";

export const OtherActivities = () => {
  return (
    <SectionContainer
      color="#384E3B"
      style={{ justifyContent: "flex-start", paddingTop: "80px" }}
    >
      <Title style={{ marginBottom: "15px" }}>Other Activities</Title>
      <RowContainer width="100%" padding="0 10px" alignItems="flex-start">
        <Card margin="10px" height="200px" color="#AFB8B1" style={{ flex: 1 }}>
          <strong>Moodler</strong> <br />
          This is my own personal project that I’ve been working on for years.
          It’s an android application written in JAVA and it uses the processing
          library. The purpose of the application is to enable users to draw
          their own personal visualization to the music. The source code of the
          app is at <a href="https://github.com/ipinlnd/Moodler">Github</a>
        </Card>
        <Card
          margin="10px"
          height="200px"
          width="400px"
          color="#AFB8B1"
          style={{ flex: 1 }}
        >
          <strong>NLND-Navigation</strong> <br />
          An open-source npm package for react-native that will provide a view
          manager for the app.
          <a href="https://npmjs.com/package/nlnd-navigation">NPM package</a>
        </Card>
      </RowContainer>
      <RowContainer width="100%" padding="0 10px" alignItems="flex-start">
        <Card margin="10px" height="200px" color="#AFB8B1" style={{ flex: 1 }}>
          <strong>NLND-Slider</strong> <br />
          An open-source npm package for React that will provide a good-looking
          scrolling view.
          <a href="https://www.npmjs.com/package/nlnd-slider">NPM package</a>
        </Card>
        <Card margin="10px" height="200px" color="#AFB8B1" style={{ flex: 1 }}>
          <strong>metoffice-fetch</strong> <br />A simple package to fetch data
          from the UK met office API library.
          <a href="https://www.npmjs.com/package/metoffice-fetch">
            NPM package
          </a>
        </Card>
      </RowContainer>
    </SectionContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
`;
