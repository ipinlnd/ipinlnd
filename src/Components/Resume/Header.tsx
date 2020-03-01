import React from "react";
import { SharedComponents } from "./Container";
import me from "../../Assets/me.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <SharedComponents.Container background="#5B6C5D">
      <SharedComponents.FadeInContent style={{ fontSize: "3vw" }}>
        <h1>Ali Rezaee</h1>
        <SharedComponents.RowContainer style={{ alignItems: "center" }}>
          <img alt="ipinlnd" src={me} width="200px" />
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
          </p>
        </SharedComponents.RowContainer>
        <Link to="/blog">
          <SharedComponents.BlogButton>
            <span>Go to blog</span>
          </SharedComponents.BlogButton>
        </Link>
      </SharedComponents.FadeInContent>
    </SharedComponents.Container>
  );
};

export { Header };
