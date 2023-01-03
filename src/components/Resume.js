import React from 'react';
import Avatar from '../images/avatar.png'
import Project from './Project'

function Resume({github, linkdin}) {
    return (
      <section>
        <h1 id="resume">
          <div id="hide">
        <Project github = "https://github.com/Josiah-Canada" linkdin = "https://www.linkedin.com/in/josiah-canada-52794b230/"/>
        </div>
        <img src={Avatar} alt="cover" width = {200} />

        
        <ul id="lead" > <h1 id="middle">Front-end skills</h1>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Prettier</li>
            <li>Javascript</li>
            <li>Web api's</li>
        </ul>
        <ul id="lead"><h1 id="middle">Back-end skills</h1>
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
        
        </footer>
      </section>
    );
  }
  
  export default Resume;