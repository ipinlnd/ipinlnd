import React from "react";
import { SharedComponents } from "./Container";

export const MainContent = () => {
  return (
    <SharedComponents.ContentContainer>
      <SharedComponents.BlogShort>
        <SharedComponents.BlogTitle>
          Remote Working
          <br />
          <SharedComponents.BlogDate>03-01-2020</SharedComponents.BlogDate>
        </SharedComponents.BlogTitle>
        <SharedComponents.BlogDescr>
          This post is a Pros and Cons list of remote working, for both the
          worst and the best case scenarios.
        </SharedComponents.BlogDescr>
        <SharedComponents.ReadMore to="/blog/3-1-2020">
          Read More...
        </SharedComponents.ReadMore>
      </SharedComponents.BlogShort>
    </SharedComponents.ContentContainer>
  );
};
