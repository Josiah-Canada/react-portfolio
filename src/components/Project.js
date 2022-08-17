import React from "react";

function Project({title, image, github, deployment, linkdn}) {
    return (
      <section className="pic">
       <h1 className = "project-title">{title}</h1> 
       <section id="more">
       <img src = {image} alt = {title} width = {400}></img>
       </section>
       <a className="link" href = {github}>github</a>
       {deployment ? <a className="link" href = {deployment}>deployment</a> : <a>{" "}</a>}
       {linkdn ? <a className="link" href = {linkdn}>linkdn</a> : <a>{" "}</a>}
      </section>
    );
  }
  
  export default Project;