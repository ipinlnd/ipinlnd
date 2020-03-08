import React from "react";
import { SharedComponents } from "./Container";
import { SectionContainer, Title, RowContainer, Card } from "./Shared";

export const Education = () => {
  return (
    <SectionContainer color="#476337">
      <SharedComponents.FadeInContent>
        <Title>Education</Title>
        <RowContainer>
          <SharedComponents.RowItem>
            <Card color="#B5C0AF">
              <strong>Bachelor's of Software Engineering</strong> <br />
              <strong>Jun 2018</strong> <br />
              <strong>Azad University of Mashhad</strong> <br />
              <strong>Final Project: </strong> Implementation of 802.1x standard using C <br />
              • Working in the university’s IT department (Hardware section) as a student job <br />
              • Teacher’s assistant in the database design Lab class <br />
            </Card>
          </SharedComponents.RowItem>
        </RowContainer>
      </SharedComponents.FadeInContent>
    </SectionContainer>
  );
};
