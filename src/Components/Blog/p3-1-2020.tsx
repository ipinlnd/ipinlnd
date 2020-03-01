import React, { useState, useEffect } from "react";
import { SharedComponents } from "./Container";
import SyntaxHighlighter from "react-syntax-highlighter";

export const P312020 = () => {
  const [input, setInput] = useState("");
  useEffect(() => {
    const file = require("../../Assets/posts/3-1-2020.txt");
    fetch(file)
      .then(async response => setInput(await response.text()))
      .catch(error => console.log(error));
  });
  return (
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
  );
};
