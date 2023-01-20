import React from "react";
import Reslinks from "./Reslinks";

function Resume({ github, linkdin }) {
  return (
    <section>
      <h1 id="resume">
        <Reslinks github="https://github.com/Josiah-Canada" />
        <Reslinks linkdin="https://www.linkedin.com/in/josiah-canada-52794b230/" />
        <ul id="lead">
          {" "}
          <h1 id="middle">Front-end skills</h1>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Prettier</li>
          <li>Javascript</li>
          <li>Web api's</li>
          <li>Scss</li>
        </ul>
        <ul id="lead">
          <h1 id="middle">Back-end skills</h1>
          <li>Mongo</li>
          <li>MySql</li>
          <li>Handlebars</li>
          <li>Node</li>
          <li>React</li>
          <li>Pwa</li>
          <li>Express</li>
          <li>GraphQl</li>
        </ul>
      </h1>
      <footer></footer>
    </section>
  );
}

export default Resume;
