import React from "react";
import { SharedComponents } from "./Container";

export const Education = () => {
  return (
    <SharedComponents.Container background="#F48024">
      <SharedComponents.FadeInContent>
        <div>
          <SharedComponents.Header>Education</SharedComponents.Header>
        </div>
        <SharedComponents.RowContainer>
          <SharedComponents.RowItem>
            <SharedComponents.Card>
              <strong>Bachelor's of Software Engineering</strong> <br />
              <strong>Jun 2018</strong> <br />
              <strong>Azad University of Mashhad</strong> <br />
              <strong>Final Project: </strong> Implementation of 802.1x standard
              using C <br />
              • Working in the university’s IT department (Hardware section) as
              a student job <br />
              • Teacher’s assistant in the database design Lab class <br />
            </SharedComponents.Card>
          </SharedComponents.RowItem>
        </SharedComponents.RowContainer>
      </SharedComponents.FadeInContent>
    </SharedComponents.Container>
  );
};
