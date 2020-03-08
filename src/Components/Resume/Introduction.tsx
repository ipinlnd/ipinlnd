import React from "react";
import { SharedComponents } from "./Container";
import { SectionContainer, Title, Paragraph } from "./Shared";

export const Introduction = () => {
  return (
    <SectionContainer color="#334936" height="100vh">
      <SharedComponents.FadeInContent style={{ fontSize: "3vw" }}>
        <Title>Introduction</Title>
        <Paragraph>
          I decided to become a computer engineer when I was 7 and saw my cousin working with his
          computer. After that I started learning stuff like office or photoshop, but never got
          around to do any programming. Until I got accepted into a university to study software
          engineering. That’s when I started programming. I started with learning c++, because that
          was what they taught us. Wanting to create application, I decided to learn Android, but
          soon found myself in love with JAVA. I practiced JAVA for a couple of years, until I got a
          job as a c/c++ developer at Zharfpouyan R&D. I worked for close to 4 years as a c/c++
          developer, but I always wanted to create more visually appealing things, so I kept
          practicing with JAVA and android. After Zharfpouyan, I found a job at Communere Ltd. As a
          Full-stack developer, I learnt ReactJS and Node.js and have been working there ever since.
          I have always been a fan of creating visual apps so I’m loving this tech-stack at the
          moment. <br /> <br /> Not sure if you noticed, but I was never working with tech-stack
          that I got a job at. I practiced JAVA and got a job in c++. I worked in c++ and got a job
          in ReactJS and node.js. I learned everything when I needed to learn it and I have always
          been a fast learner. I like that about myself. <br /> <br /> I am a 26-year-old software
          developer with 5 years of programming experience. I’ve been looking for remote jobs or
          jobs that can help me relocate. What follows is my resume.
        </Paragraph>
      </SharedComponents.FadeInContent>
    </SectionContainer>
  );
};
