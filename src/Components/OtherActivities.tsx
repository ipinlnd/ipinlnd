import React from "react";
import { SharedComponents } from "./Container";

export const OtherActivities = () => {
  return (
    <SharedComponents.Container background="#1E1E1E">
      <SharedComponents.FadeInContent>
        <SharedComponents.CornerText>Experiences</SharedComponents.CornerText>
        <div>
          <SharedComponents.Header>Other Activities</SharedComponents.Header>
        </div>
        <SharedComponents.RowContainer>
          <SharedComponents.RowItem>
            <SharedComponents.Card>
              <strong>Moodler</strong> <br />
              This is my own personal project that I’ve been working on for
              years. It’s an android application written in JAVA and it uses the
              processing library. The purpose of the application is to enable
              users to draw their own personal visualization to the music. The
              source code of the app is at{" "}
              <a href="https://github.com/ipinlnd/Moodler">Github</a>
            </SharedComponents.Card>
          </SharedComponents.RowItem>
          <SharedComponents.RowItem>
            <SharedComponents.Card>
              <strong>NLND-Navigation</strong> <br />
              An open-source npm package for react-native that will provide a
              view manager for the app.
              <a href="https://npmjs.com/package/nlnd-navigation">
                NPM package
              </a>
            </SharedComponents.Card>
          </SharedComponents.RowItem>
          <SharedComponents.RowItem>
            <SharedComponents.Card>
              <strong>NLND-Slider</strong> <br />
              An open-source npm package for React that will provide a
              good-looking scrolling view.
              <a href="https://www.npmjs.com/package/nlnd-slider">
                NPM package
              </a>
            </SharedComponents.Card>
          </SharedComponents.RowItem>
        </SharedComponents.RowContainer>
      </SharedComponents.FadeInContent>
    </SharedComponents.Container>
  );
};
