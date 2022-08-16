import React from 'react';
import Avatar from '../images/avatar.png'
import Project from './Project'

function Resume({github, linkdn}) {
    return (
      <section>
        <h1 id="resume">

        <img src={Avatar} alt="cover" width = {200} />

        <a href='../resume 5.29.22.pdf' download>Click here to download my Resume</a>
        <ul> Front-end skills
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Prettier</li>
            <li>Javascript</li>
            <li>Web api's</li>
        </ul>
        <ul> Back-end skills
            <li>Mongo</li>
            <li>MySql</li>
            <li>Handlebars</li>
            <li>Node</li>
            <li>React</li>
            <li>Pwa</li>
            <li>Express</li>
        </ul>
        </h1>
        <footer>
        <Project title = "Link to github and linkdn" github = "https://github.com/Josiah-Canada" linkdn = "https://www.linkedin.com/in/josiah-canada-52794b230/"/>
        </footer>
      </section>
    );
  }
  
  export default Resume;