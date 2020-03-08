import React from "react";
import { SharedComponents } from "./Container";
import { TitleLink, Title2, Paragraph, Card, RowContainer, SectionContainer } from "./Shared";

export const Communere1 = () => {
  return (
    <SectionContainer color="#00ABFB" height="100%">
      <SharedComponents.FadeInContent>
        <TitleLink href="http://communere.com">Communere</TitleLink>
        <Title2>Full-Stack Developer</Title2>
        <Title2>January 2019 - Now</Title2>
        <Paragraph>
          Project-based development on various web and mobile applications. This is a remote
          position and the company is based in London.
        </Paragraph>
        <RowContainer style={{ paddingBottom: "1%" }} alignItems="flex-start">
          <SharedComponents.RowItem>
            <Card color="#A3DEE2" height="290px">
              <strong>Trim-It</strong> <br />
              An app powered barbershop. I was responsible for developing on the project as a
              full-stack developer. This was my first remote experience. <br /> <br />
              • Developing the backend server using Node.js and express <br />
              • Using GraphQL as the communication tech <br />
              • Developing the mobile app using React-native <br />
              • Using apollo as middleware <br />
              • Using native-base UI Kit to develop the app UI <br />• Using Typescript for type
              checking throughout the whole project <br />• Working remotely and in a team
            </Card>
          </SharedComponents.RowItem>
          <SharedComponents.RowItem>
            <Card color="#A3DEE2" height="290px">
              <strong>MemberMatch</strong> <br />A project to help golfers plan matches, and meet
              other golfers. Written for both web and mobile, it uses ASP.NET as the base system and
              Xamarin for the applications. Working as the sole developer on the project, I proposed
              lots of optimizations to the code which ended up improving the performance on both
              frontend and backend. <br />
              <br />• Developing the server and the website using ASP.NET and MVC <br />
              • Maintaining and further development of the SQL Database
              <br />
              • Developing the mobile application using Xamarin on both android and ios <br />
              • Working remotely <br />
              • Published app on google play and Appstor <br />• Using hangfire queue system for
              long-awaiting tasks
            </Card>
          </SharedComponents.RowItem>
        </RowContainer>
        <RowContainer style={{ paddingBottom: "1%" }}>
          <SharedComponents.RowItem>
            <Card color="#A3DEE2" height="300px">
              <strong>AGXIO</strong> <br />
              An AI project to help farmers better monitor and maintain their farm, I joined the
              project as a part time frontend developer, working on the web application which was
              written in React and used material-UI UI kit. <br /> <br />
              • Development of web application using React
              <br />
              • Data visualization with Anychart <br />
              • Working with Graphql and Apollo <br />
              • Working with Material-UI as the UI kit <br />
              • Redux <br />
              • Working remotely and in a team <br />
            </Card>
          </SharedComponents.RowItem>
          <SharedComponents.RowItem>
            <Card color="#A3DEE2" height="300px">
              <strong>GREATSPOT</strong> <br />A web application for helping people find the best
              properties to invest on. I had the opportunity to create a complete project from
              scratch. I did all the work on the project from the database design and backend
              development, all the way to the frontend development. The project uses a SQL database,
              a node.js backend, graphql for the communication and React.js for the frontend. This
              project is still in development. <br /> <br />
              • SQL Database Design <br />
              • Node.js backend development <br />
              • Sequelize, GraphQl, Apollo, Express <br />
              • ReactJS frontend development <br />
              • Typescript, Bootstrap, Leaflet, Flux <br />• Working remotely and alone. I owned
              this project from the start.
            </Card>
          </SharedComponents.RowItem>
        </RowContainer>
        <RowContainer>
          <Card style={{ flex: 1, margin: "0 1%" }} color="#A3DEE2">
            <strong>APOLLO</strong> <br />
            A machine learning data analysis project to help data scientist analyze and predict any
            sort of data. I worked as the front-end team on this project, working alongside other
            developers, creating the UI with React. <br /> <br />
            • Development of the application using React <br />
            • Redux <br />
            • Working with Material-UI as the UI kit <br />
            • Working remotely and in a team <br />
          </Card>
        </RowContainer>
      </SharedComponents.FadeInContent>
    </SectionContainer>
  );
};
