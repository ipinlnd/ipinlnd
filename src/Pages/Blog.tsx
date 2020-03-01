import React from "react";
import { SharedComponents } from "../Components/Blog/Container";
import { MainContent } from "../Components/Blog/MainContent";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { P312020 } from "../Components/Blog/p3-1-2020";

export const Blog = () => {
  return (
    <SharedComponents.Container>
      <SharedComponents.Header>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <SharedComponents.HeaderText>
            IPINLND: Blog
          </SharedComponents.HeaderText>
        </Link>
      </SharedComponents.Header>
      <BrowserRouter>
        <Switch>
          <Route path="/blog/3-1-2020">
            <P312020 />
          </Route>
          <Route path="/blog">
            <MainContent />
          </Route>
        </Switch>
      </BrowserRouter>
    </SharedComponents.Container>
  );
};
