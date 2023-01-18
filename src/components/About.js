import React from 'react';
import Avatar from '../images/avatar.png'


function About() {
    return (
      <article>
      <div id= "card-a">
      <img src={Avatar} alt="cover" width = {200} />
        <h1 id="about">Hi, I'm Josiah Canada! I am recently new to programming, however I do find it fascinating. I love the feeling of working on a project for days and learning the new technology as I work. The success that comes from finally completing a project that took hours to complete is undeniable, and it makes me wonder just how much can be done with the technologies we have available today. So if you're interested in seeing some of my work take a look around, you might like what you see.</h1>
      </div>
      </article>
    );
  }
  
  export default About;