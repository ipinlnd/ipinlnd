import React from "react";
import { SharedComponents } from "./Container";
import {
  SectionContainer,
  TitleLink,
  Title2,
  Card,
  RowContainer,
} from "./Shared";

export const Zharfpouyan = () => {
  return (
    <SectionContainer
      style={{ justifyContent: "flex-start", paddingTop: "80px" }}
      color="#E9DB54"
      height="100vh"
    >
      <TitleLink fontColor="#354136" href="http://zharfpouyan.net">
        Zharfpouyan
      </TitleLink>
      <Title2 fontColor="#354136">Software Developer</Title2>
      <Title2 fontColor="#354136">April 2015 - December 2018</Title2>
      <RowContainer padding="0 10px">
        <SharedComponents.RowItem>
          <p style={{ fontSize: 18, color: "#354137", textAlign: "left" }}>
            The company’s main product was network routers. I, as a c/c++
            developer, had the responsibility of developing router related
            software and services, Test the developed services in a simulated
            network scenario and maintain older services. Being my first
            experience, it taught me a lot about working in a professional
            environment, from basic development processes, to cooperating with
            teammates on projects, getting help and helping others, sharing
            knowledge and more
          </p>
        </SharedComponents.RowItem>
        <SharedComponents.RowItem>
          <Card color="#F6F0BA">
            • C/C++ development in a FreeBSD environment <br />
            • Implementation of network authentication services such as 802.1x,
            TACASC+, RADIUS, etc. <br />• Maintaining and further development on
            network protocols like OSPF, PIM, VRRP, etc. <br />
            • Working with GNS3, Cisco routers, SNMP, syslog, etc. <br />
            • Working in team <br />• Working with git and in a git-flow
            environment
          </Card>
        </SharedComponents.RowItem>
      </RowContainer>
    </SectionContainer>
  );
};
