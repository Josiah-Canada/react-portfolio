import React from "react";


function Project({title, image, github, deployment, linkdin}) {
    return (
      <section className="pic">
       <h1 className = "project-title">{title}</h1> 
       <a className="link" href = {github} target="_blank" rel="noreferrer">
        <div class="grey-on-hover">
        <img src = {image} alt = {title} width = {275}/>
          </div>
          </a>
       {deployment ? <a className="link" href = {deployment} target="_blank" rel="noreferrer">deployment</a> : <p>{" "}</p>}
       {linkdin ? <a className="link" href = {linkdin} target="_blank" rel="noreferrer">linkdin</a> : <p>{" "}</p>}
      </section>
    );
  }
  
  export default Project;