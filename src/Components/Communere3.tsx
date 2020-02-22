import React from "react";
import { SharedComponents } from "./Container";
import styled from "styled-components";

const CommunereHeader = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Communere3 = () => {
  return (
    <SharedComponents.Container background="#00ABFB">
      <SharedComponents.FadeInContent>
        <SharedComponents.CornerText>Experiences</SharedComponents.CornerText>
        <CommunereHeader>
          <a
            href="http://communere.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            <SharedComponents.Header>
              Communere (Cont'd)
            </SharedComponents.Header>
          </a>
          <p style={{ fontSize: "30px" }}>Full-Stack Developer</p>
          <p style={{ fontSize: "25px" }}>January 2019 - Now</p>
          <p style={{ fontSize: 18 }}>
            Project-based development on various web and mobile applications.
            This is a remote position and the company is based in London.
          </p>
        </CommunereHeader>
        <SharedComponents.RowContainer>
          <SharedComponents.Card style={{ flex: 1, margin: "0 1%" }}>
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
