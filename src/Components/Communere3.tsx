import React from "react";
import { SharedComponents } from "./Container";

export const Communere3 = () => {
  return (
    <SharedComponents.Container background="#00ABFB">
      <SharedComponents.FadeInContent>
        <SharedComponents.CornerText>Experiences</SharedComponents.CornerText>
        <a
          href="http://communere.com"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h1 style={{ fontSize: "70px" }}>Communere (Cont'd)</h1>
        </a>
        <p style={{ fontSize: "30px" }}>Full-Stack Developer</p>
        <p style={{ fontSize: "25px" }}>January 2019 - Now</p>
        <p style={{ fontSize: 18 }}>
          Project-based development on various web and mobile applications. This
          is a remote position and the company is based in London.
        </p>
        <SharedComponents.RowContainer>
          <SharedComponents.Card style={{ width: "45%" }}>
            <strong>APOLLO</strong> <br />
            A machine learning data analysis project to help data scientist
            analyze and predict any sort of data. I worked as the front-end team
            on this project, working alongside other developers, creating the UI
            with React. <br /> <br />
            • Development of the application using React <br />
            • Redux <br />
            • Working with Material-UI as the UI kit <br />
            • Redux <br />
            • Working remotely and in a team <br />
          </SharedComponents.Card>
        </SharedComponents.RowContainer>
      </SharedComponents.FadeInContent>
    </SharedComponents.Container>
  );
};
