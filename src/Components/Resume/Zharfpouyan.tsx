import React from "react";
import { SharedComponents } from "./Container";

export const Zharfpouyan = () => {
  return (
    <SharedComponents.Container background="#E9DB54">
      <SharedComponents.FadeInContent>
        <SharedComponents.CornerText>Experiences</SharedComponents.CornerText>
        <a href="http://zharfpouyan.net" style={{ textDecoration: "none", color: "#354137" }}>
          <SharedComponents.Header>Zharfpouyan</SharedComponents.Header>
        </a>
        <p style={{ fontSize: "30px", color: "#354137" }}>Software Developer</p>
        <p style={{ fontSize: "25px", color: "#354137" }}>April 2015 - December 2018</p>
        <SharedComponents.RowContainer>
          <SharedComponents.RowItem>
            <p style={{ fontSize: 18, color: "#354137", textAlign: "left" }}>
              The company’s main product was network routers. I, as a c/c++ developer, had the
              responsibility to develop router related software and services, Test the developed
              services in a simulated network scenario and maintain older services. Being my first
              experience, it taught me a lot about working in a professional environment, from basic
              development processes, to cooperating with teammates on projects, getting help and
              helping others, sharing knowledge and more
            </p>
          </SharedComponents.RowItem>
          <SharedComponents.RowItem>
            <SharedComponents.Card color="#E9DB54">
              • C/C++ development in a FreeBSD environment <br />
              • Implementation of network authentication services such as 802.1x, TACASC+, RADIUS,
              etc. <br />• Maintaining and further development on network protocols like OSPF, PIM,
              VRRP, etc. <br />
              • Working with GNS3, Cisco routers, SNMP, syslog, etc. <br />
              • Working in team <br />• Working with git and in a git-flow environment
            </SharedComponents.Card>
          </SharedComponents.RowItem>
        </SharedComponents.RowContainer>
      </SharedComponents.FadeInContent>
    </SharedComponents.Container>
  );
};
