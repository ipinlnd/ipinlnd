import React from "react";
import { SharedComponents } from "./Container";

export const Zharfpouyan = () => {
  return (
    <SharedComponents.Container
      background="#334936"
      backgroundImage="linear-gradient(#FBB725, #FED57D);"
    >
      <SharedComponents.FadeInContent>
        <SharedComponents.CornerText>Experiences</SharedComponents.CornerText>
        <a
          href="http://zharfpouyan.net"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h1 style={{ fontSize: "70px" }}>Zharfpouyan</h1>
        </a>
        <p style={{ fontSize: "30px" }}>Software Developer</p>
        <p style={{ fontSize: "25px" }}>April 2015 - December 2018</p>
        <SharedComponents.RowContainer>
          <p style={{ width: "48%", fontSize: 18, color: "black" }}>
            The company’s main product was network routers. I, as a c/c++
            developer, had the responsibility to develop router related software
            and services, Test the developed services in a simulated network
            scenario and maintain older services. Being my first experience, it
            taught me a lot about working in a professional environment, from
            basic development processes, to cooperating with teammates on
            projects, getting help and helping others, sharing knowledge and
            more
          </p>
          <div style={{ width: "48%" }}>
            <SharedComponents.Card>
              • C/C++ development in a FreeBSD environment <br />
              • Implementation of network authentication services such as
              802.1x, TACASC+, RADIUS, etc. <br />
              • Maintaining and further development on network protocols like
              OSPF, PIM, VRRP, etc. <br />
              • Working with GNS3, Cisco routers, SNMP, syslog, etc. <br />
              • Working in team <br />• Working with git and in a git-flow
              environment
            </SharedComponents.Card>
          </div>
        </SharedComponents.RowContainer>
      </SharedComponents.FadeInContent>
    </SharedComponents.Container>
  );
};
