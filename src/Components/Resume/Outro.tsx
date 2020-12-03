import React from "react";
import { SharedComponents } from "./Container";
import { SectionContainer, Title, Paragraph, Link } from "./Shared";

export const Outroduction = () => {
  return (
    <SectionContainer color="#384E3B">
      <SharedComponents.FadeInContent>
        <Title>Outroduction</Title>
        <Paragraph>
          If you got tired of scrolling through this, here's
          <Link style={{ textDecoration: "underline" }} href="/Ali Rezaee.pdf">
            {" "}
            the pdf file of my CV
          </Link>
        </Paragraph>
      </SharedComponents.FadeInContent>
    </SectionContainer>
  );
};
