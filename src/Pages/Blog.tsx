import React from "react";
import { SharedComponents } from "../Components/Blog/Container";
import { MainContent } from "../Components/Blog/MainContent";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { P312020 } from "../Components/Blog/p3-1-2020";
import DocumentMeta from "react-document-meta";
import { P5242020 } from "../Components/Blog/p5-24-2020";
import { P08082020 } from "../Components/Blog/p08-08-2020";

const meta = {
  title: "ipinlnd:blog",
  description: "blog by Ali Rezaee (ipinlnd)",
  canonical: "https://ipinlnd.com",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "ipinlnd, react, ali_reazaee, blog",
      "og:title": "Ali Rezaee's personal website",
      viewport: "width=device-width, initial-scale=1",
    },
  },
};

export const Blog = () => {
  return (
    <DocumentMeta {...meta}>
      <SharedComponents.Container>
        <SharedComponents.Header>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <SharedComponents.HeaderText>IPINLND</SharedComponents.HeaderText>
          </Link>
        </SharedComponents.Header>
        <BrowserRouter>
          <Switch>
            <Route path="/blog/08-08-2020">
              <P08082020 />
            </Route>
            <Route path="/blog/3-1-2020">
              <P312020 />
            </Route>
            <Route path="/blog/5-24-2020">
              <P5242020 />
            </Route>
            <Route path="/blog">
              <MainContent />
            </Route>
          </Switch>
        </BrowserRouter>
      </SharedComponents.Container>
    </DocumentMeta>
  );
};
