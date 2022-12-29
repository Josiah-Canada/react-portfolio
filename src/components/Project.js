import React from "react";

function Project({title, image, github, deployment, linkdin}) {
    return (
      <section className="pic">
       <h1 className = "project-title">{title}</h1> 
       <section id="more">
       <img src = {image} alt = {title} width = {275}></img>
       </section>
       <a className="link" href = {github}>github</a>
       {deployment ? <a className="link" href = {deployment}>deployment</a> : <a>{" "}</a>}
       {linkdin ? <a className="link" href = {linkdin}>linkdin</a> : <a>{" "}</a>}
      </section>
    );
  }
  
  export default Project;