import React, { useState, useEffect } from "react";
import { SharedComponents } from "./Container";
import SyntaxHighlighter from "react-syntax-highlighter";
import DocumentMeta from "react-document-meta";

const meta = {
  title: "ipinlnd: Remote Working",
  description: "blog by Ali Rezaee (ipinlnd)",
  canonical: "https://ipinlnd.com",
  meta: {
    charset: "utf-8",
    name: {
      keywords:
        "ipinlnd, react, ali_reazaee, blog, remote working, remote, job,",
      "og:title": "Ali Rezaee's personal website",
      viewport: "width=device-width, initial-scale=1",
      content:
        "I decided that as my first post on this blog, i write about remote working. And well, i've been struggling with myself since  3 AM this morning that 'I want to make something! What should i make??', so i decided to make this blog post a little creative. This post is a Pros and Cons list of remote working, for both the worst and the best case scenarios. ",
    },
  },
};

export const P312020 = () => {
  const [input, setInput] = useState("");
  useEffect(() => {
    const file = require("../../Assets/posts/3-1-2020.txt");
    fetch(file)
      .then(async (response) => setInput(await response.text()))
      .catch((error) => console.log(error));
  });
  return (
    <DocumentMeta {...meta}>
      <SharedComponents.ContentContainer style={{ border: "none" }}>
        <SharedComponents.BlogTitle>
          <SharedComponents.ReadMore to="/blog">
            {" << "}
          </SharedComponents.ReadMore>
          Remote Working
        </SharedComponents.BlogTitle>
        <SyntaxHighlighter showLineNumbers language="typescript">
          {input}
        </SyntaxHighlighter>
      </SharedComponents.ContentContainer>
    </DocumentMeta>
  );
};
