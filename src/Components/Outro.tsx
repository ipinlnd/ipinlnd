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
          While this website currently only introduces me in an unnecessarily
          complicated way, I hope to soon add more to it. I'll probably start
          blogging and showcasing my works here in form of a gallery. <br />{" "}
          <br />
          <strong>
            Anyway, if you got tired of scrolling through this, here's the pdf
            file of my CV
          </strong>
          :{" "}
          <SharedComponents.Link href="/Ali Rezaee.pdf">
            Link to CV
          </SharedComponents.Link>
        </p>
      </SharedComponents.FadeInContent>
    </SharedComponents.Container>
  );
};
