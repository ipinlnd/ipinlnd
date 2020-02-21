import React from "react";
import { SharedComponents } from "./Container";

export const Communere1 = () => {
  return (
    <SharedComponents.Container background="#00ABFB">
      <SharedComponents.FadeInContent>
        <SharedComponents.CornerText>Experiences</SharedComponents.CornerText>
        <div>
          <a
            href="http://communere.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h1 style={{ fontSize: "70px" }}>Communere</h1>
          </a>
          <p style={{ fontSize: "30px" }}>Full-Stack Developer</p>
          <p style={{ fontSize: "25px" }}>January 2019 - Now</p>
          <p style={{ fontSize: 18 }}>
            Project-based development on various web and mobile applications.
            This is a remote position and the company is based in London.
          </p>
        </div>
        <SharedComponents.RowContainer>
          <SharedComponents.Card style={{ width: "45%" }}>
            <strong>Trim-It</strong> <br />
            An app powered barbershop. I was responsible for developing on the
            project as a full-stack developer. This was my first remote
            experience. <br /> <br />
            • Developing the backend server using Node.js and express <br />
            • Using GraphQL as the communication tech <br />
            • Developing the mobile app using React-native <br />
            • Using apollo as middleware <br />
            • Using native-base UI Kit to develop the app UI <br />• Using
            Typescript for type checking throughout the whole project <br />•
            Working remotely and in a team
          </SharedComponents.Card>
          <SharedComponents.Card style={{ width: "45%" }}>
            <strong>MemberMatch</strong> <br />A project to help golfers plan
            matches, and meet other golfers. Written for both web and mobile, it
            uses ASP.NET as the base system and Xamarin for the applications.
            Working as the sole developer on the project, I proposed lots of
            optimizations to the code which ended up improving the performance
            on both frontend and backend. <br />
            <br />• Developing the server and the website using ASP.NET and MVC{" "}
            <br />
            • Maintaining and further development of the SQL Database
            <br />
            • Developing the mobile application using Xamarin on both android
            and ios <br />
            • Working remotely <br />
            • Published app on google play and Appstor <br />• Using hangfire
            queue system for long-awaiting tasks
          </SharedComponents.Card>
        </SharedComponents.RowContainer>
      </SharedComponents.FadeInContent>
    </SharedComponents.Container>
  );
};
