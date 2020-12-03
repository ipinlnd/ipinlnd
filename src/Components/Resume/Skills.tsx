import React from "react";
import { SharedComponents } from "./Container";
import { SectionContainer, Title } from "./Shared";

export const Skills = () => {
  return (
    <SectionContainer color="#4F6E55">
      <SharedComponents.FadeInContent>
        <Title>Skills</Title>
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
            <h1>SQL, MySQL</h1>
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
    </SectionContainer>
  );
};
