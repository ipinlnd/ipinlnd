import React from "react";
import { SharedComponents } from "./Container";

export const Skills = () => {
  return (
    <SharedComponents.Container background="red">
      <SharedComponents.FadeInContent>
        <div>
          <SharedComponents.Header>Skills</SharedComponents.Header>
        </div>
        <SharedComponents.Grid>
          <SharedComponents.GridCard>
            <h1>JavaScript</h1>
          </SharedComponents.GridCard>
          <SharedComponents.GridCard>
            <h1>Node.js, TypeScript</h1>
          </SharedComponents.GridCard>
          <SharedComponents.GridCard>
            <h1>React, React-native</h1>
          </SharedComponents.GridCard>
          <SharedComponents.GridCard>
            <h1>GraphQL, Apollo</h1>
          </SharedComponents.GridCard>
          <SharedComponents.GridCard>
            <h1>ASP.NET, MVC, C#</h1>
          </SharedComponents.GridCard>
          <SharedComponents.GridCard>
            <h1>SQL, MySQL, MongoDB, Postresql</h1>
          </SharedComponents.GridCard>
          <SharedComponents.GridCard>
            <h1>C, C++</h1>
          </SharedComponents.GridCard>
          <SharedComponents.GridCard>
            <h1>JAVA, Android</h1>
          </SharedComponents.GridCard>
          <SharedComponents.GridCard>
            <h1>Working Remotely</h1>
          </SharedComponents.GridCard>
        </SharedComponents.Grid>
      </SharedComponents.FadeInContent>
    </SharedComponents.Container>
  );
};
