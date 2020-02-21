import React from "react";
import { SharedComponents } from "./Container";
import me from "../Assets/me.png";

const Header = () => {
  return (
    <SharedComponents.Container background="#5B6C5D">
      <SharedComponents.FadeInContent style={{ fontSize: "3vw" }}>
        <h1>Ali Rezaee</h1>
        <SharedComponents.RowContainer>
          <img src={me} width="300px" />
          <p style={{ fontSize: "18px", textAlign: "left" }}>
            Email:{" "}
            <SharedComponents.Link href="mailto:nlndipi@hotmail.com">
              nlndipi@hotmail.com
            </SharedComponents.Link>{" "}
            <br />
            tel: +989392188602 <br />
            Links:{" "}
            <SharedComponents.Link href="http://github.com/ipinlnd">
              Github
            </SharedComponents.Link>
            ,{" "}
            <SharedComponents.Link href="http://linkedin.com/in/ipinlnd">
              Linkedin
            </SharedComponents.Link>
            ,{" "}
            <SharedComponents.Link href="http://twitter.com/ipinlnd">
              Twitter
            </SharedComponents.Link>
            ,{" "}
            <SharedComponents.Link href="http://twitter.com/nonbinarymcchi1">
              Another Twitter
            </SharedComponents.Link>
          </p>
        </SharedComponents.RowContainer>
      </SharedComponents.FadeInContent>
    </SharedComponents.Container>
  );
};

export { Header };
