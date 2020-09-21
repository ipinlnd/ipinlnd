import React from "react";
import "../App.css";
import DocumentMeta from "react-document-meta";
import { Slider } from "../Slider";

const meta = {
  title: "ipinlnd",
  description: "Ali Rezaee's personal website",
  canonical: "https://ipinlnd.com",
  meta: {
    charset: "utf-8",
    name: {
      keywords:
        "ipinlnd, AliRezaee, react, developer, software, engineer, nlndipi, nlnd",
      "og:title": "Ali Rezaee's personal website",
      viewport: "width=device-width, initial-scale=1",
      content:
        "Ali Rezaee nlndipi@hotmail.com I am a 26-year-old software developer with 5 years of programming experience. I’ve been looking for remote jobs or jobs that can help me relocate. What follows is my resume.",
    },
  },
};

const Resume = () => {
  return (
    <DocumentMeta {...meta}>
      <div className="App">
        <Slider></Slider>
      </div>
    </DocumentMeta>
  );
};

export default Resume;
