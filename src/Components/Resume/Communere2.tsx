import React from "react";
import { SharedComponents } from "./Container";
import styled from "styled-components";

const CommunereHeader = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Communere2 = () => {
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
          <SharedComponents.RowItem>
            <SharedComponents.Card>
              <strong>AGXIO</strong> <br />
              An AI project to help farmers better monitor and maintain their
              farm, I joined the project as a part time frontend developer,
              working on the web application which was written in React and used
              material-UI UI kit. <br /> <br />
              • Development of web application using React
              <br />
              • Data visualization with Anychart <br />
              • Working with Graphql and Apollo <br />
              • Working with Material-UI as the UI kit <br />
              • Redux <br />
              • Working remotely and in a team <br />
            </SharedComponents.Card>
          </SharedComponents.RowItem>
          <SharedComponents.RowItem>
            <SharedComponents.Card>
              <strong>GREATSPOT</strong> <br />A web application for helping
              people find the best properties to invest on. I had the
              opportunity to create a complete project from scratch. I did all
              the work on the project from the database design and backend
              development, all the way to the frontend development. The project
              uses a SQL database, a node.js backend, graphql for the
              communication and React.js for the frontend. This project is still
              in development. <br /> <br />
              • SQL Database Design <br />
              • Node.js backend development <br />
              • Sequelize, GraphQl, Apollo, Express <br />
              • ReactJS frontend development <br />
              • Typescript, Bootstrap, Leaflet, Flux <br />• Working remotely
              and alone. I owned this project from the start.
            </SharedComponents.Card>
          </SharedComponents.RowItem>
        </SharedComponents.RowContainer>
      </SharedComponents.FadeInContent>
    </SharedComponents.Container>
  );
};
