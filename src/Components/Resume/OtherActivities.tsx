import React from "react";
import { SharedComponents } from "./Container";
import { SectionContainer, Title, RowContainer, Card } from "./Shared";

export const OtherActivities = () => {
  return (
    <SectionContainer color="#384E3B">
      <SharedComponents.FadeInContent>
        <Title>Other Activities</Title>
        <RowContainer>
          <SharedComponents.RowItem>
            <Card height="200px" color="#AFB8B1">
              <strong>Moodler</strong> <br />
              This is my own personal project that I’ve been working on for years. It’s an android
              application written in JAVA and it uses the processing library. The purpose of the
              application is to enable users to draw their own personal visualization to the music.
              The source code of the app is at{" "}
              <a href="https://github.com/ipinlnd/Moodler">Github</a>
            </Card>
          </SharedComponents.RowItem>
          <SharedComponents.RowItem>
            <Card height="200px" color="#AFB8B1">
              <strong>NLND-Navigation</strong> <br />
              An open-source npm package for react-native that will provide a view manager for the
              app.
              <a href="https://npmjs.com/package/nlnd-navigation">NPM package</a>
            </Card>
          </SharedComponents.RowItem>
          <SharedComponents.RowItem>
            <Card height="200px" color="#AFB8B1">
              <strong>NLND-Slider</strong> <br />
              An open-source npm package for React that will provide a good-looking scrolling view.
              <a href="https://www.npmjs.com/package/nlnd-slider">NPM package</a>
            </Card>
          </SharedComponents.RowItem>
        </RowContainer>
      </SharedComponents.FadeInContent>
    </SectionContainer>
  );
};
