import React from "react";
import { SharedComponents } from "./Container";

export const Outroduction = () => {
  return (
    <SharedComponents.Container background="#334936">
      <SharedComponents.FadeInContent>
        <SharedComponents.Header style={{ lineHeight: "2.5rem" }}>
          Outroduction <br />
          <span style={{ fontSize: "2vmin" }}>
            (Which should definitely become a word)
          </span>
        </SharedComponents.Header>
        <p style={{ fontSize: "18px", textAlign: "left" }}>
          <strong>If you got tired of scrolling through this, here's </strong>
          <SharedComponents.Link href="/Ali Rezaee.pdf">
            the pdf file of my CV
          </SharedComponents.Link>
        </p>
      </SharedComponents.FadeInContent>
    </SharedComponents.Container>
  );
};
