import React from "react";
import { SharedComponents } from "./Container";

export const Introduction = () => {
  return (
    <SharedComponents.Container background="#334936">
      <SharedComponents.FadeInContent style={{ fontSize: "3vw" }}>
        <h2>Introduction</h2>
        <p style={{ fontSize: "18px", textAlign: "left" }}>
          A 26-year-old software developer with 5 years of programming
          experience. I started working as a system developer, building network
          services using c/c++ in a FreeBSD environment, but because of my
          passion for visual software, I switched to full-stack development. I
          enjoy creating visually appealing applications and have experience
          working with several different technologies on mobile and web
          applications. I’ve been looking for remote jobs or jobs that can help
          me relocate to Europe to gain a richer international experience for
          future when i'm trying to move there
        </p>
      </SharedComponents.FadeInContent>
    </SharedComponents.Container>
  );
};
