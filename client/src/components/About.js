import React from "react";
import Avatar from "./images/IMG_0655.jpg";

function About() {
  return (
    <article>
      <div id="card-a">
        <img src={Avatar} alt="cover" width={200} />
        <h1 id="about">
          Hi, I'm Josiah Canada! I am a programmer,who graduated from a coding
          boot camp at the university of miami. I got into it to start a career
          change and I never regretted it. Since the boot camp I've been
          grinding my skills and I've learned so much about programming, and I'm
          ready to ut my skills to the test. Give me an assignment and I'm sure
          to get it done!
        </h1>
        <p>
          Check out some of my projects and shoot me a message in the contact
          section!
        </p>
      </div>
    </article>
  );
}

export default About;
