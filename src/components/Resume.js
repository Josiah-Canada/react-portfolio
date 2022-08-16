import React from 'react';
import Avatar from '../images/avatar.webp'

function Resume({github,linkdn }) {
    return (
      <section>
        <h1 id="resume">

            image = {Avatar}

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
        <a href = {github}>github</a>
        <a href = {linkdn}>Linkdn</a>
        </footer>
      </section>
    );
  }
  
  export default Resume;