import React from "react";
import { SharedComponents } from "./Container";
import DocumentMeta from "react-document-meta";

const meta = {
  title: "ipinlnd: Alice",
  description: "blog by Ali Rezaee (ipinlnd)",
  canonical: "https://ipinlnd.com",
  meta: {
    charset: "utf-8",
    name: {
      keywords:
        "ipinlnd, react, ali_reazaee, blog, gamedev, game, development, unity",
      "og:title": "Ali Rezaee's personal website",
      viewport: "width=device-width, initial-scale=1",
      content:
        "About 2 years ago, i decided to create a 2d video game about a girl (Alice), who's about start school and his father is setting up a training lab for her to get ready to deal with the world.  The lab would contain (As levels) different day-to-day challenges a girl has to deal with throughout life from the first day of school, onward",
    },
  },
};

export const P5242020 = () => {
  return (
    <DocumentMeta {...meta}>
      <SharedComponents.ContentContainer style={{ border: "none" }}>
        <SharedComponents.BlogTitle>
          <SharedComponents.ReadMore to="/blog">
            {" << "}
          </SharedComponents.ReadMore>
          Alice
        </SharedComponents.BlogTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: `<iframe
        width="100%"
        height="400px"
        src="https://www.youtube.com/embed/2515fRk0wAU"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`,
          }}
        />
        <p style={{ color: "white", fontSize: "18px", paddingBottom: "10%" }}>
          About 2 years ago, i decided to create a 2d video game about a girl
          (Alice), who's about start school and his father is setting up a
          training lab for her to get ready to deal with the world. <br />{" "}
          <br />
          The lab would contain (As levels) different day-to-day challenges a
          girl has to deal with throughout life from the first day of school,
          onward. <br />
          <br />
          The video above, is the furthest i got back then. <br />
          <br />
          This post serves no purpose except to say: I wanna do this again and
          today is the day i'll start. Just to be in the records.
        </p>
      </SharedComponents.ContentContainer>
    </DocumentMeta>
  );
};
