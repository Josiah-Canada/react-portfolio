import React from "react";

function Project({title, image, github, deployment, linkdn}) {
    return (
      <section >
       <h1 className = "project-title">{title}</h1> 
       <img src = {image} alt = {title} width = {400}></img>
       <a href = {github}>github</a>
       {deployment ? <a href = {deployment}>deployment</a> : <a>{" "}</a>}
       {linkdn ? <a href = {linkdn}>linkdn</a> : <a>{" "}</a>}
      </section>
    );
  }
  
  export default Project;