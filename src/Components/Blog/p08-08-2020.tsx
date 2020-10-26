import React from "react";
import ReactMarkdown from "react-markdown";
import { text } from "../../Assets/posts/2020-08-08-Vue-The-Learning";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

const renderers = {
  code: ({ language, value }: any) => {
    return (
      <SyntaxHighlighter style={dark} language={language} children={value} />
    );
  },
};

export const P08082020 = () => {
  return (
    <Container>
      <ReactMarkdown
        plugins={[gfm]}
        source={text}
        escapeHtml={false}
        renderers={renderers}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 100%;
  padding: 2%;
  text-align: left;
  color: white;
`;
