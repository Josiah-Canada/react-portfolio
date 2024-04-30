import React from "react";
import Project from "./Project";
import Budget from "../images/Budget.png";
import Run from "../images/Run-buddy.png";
import Work from "../images/Work.png";
import Glam from "../images/glam.png";
import Todo from "../images/todo.png";
import Musicfind from "../images/music-find.png"



function Portfolio() {
  return (
    <section id="projects">
      <Project
        title="Budget tracker"
        image={Budget}
        github="https://github.com/Josiah-Canada/Budget-tracker"
        deployment="https://evening-shore-05535.herokuapp.com/"
      ></Project>
      <Project
        title="Run buddy"
        image={Run}
        github="https://github.com/Josiah-Canada/run-buddy"
        deployment="https://josiah-canada.github.io/run-buddy/"
      ></Project>
      
      <Project
        title="Work day scheduler"
        image={Work}
        github="https://github.com/Josiah-Canada/calender"
        deployment="https://josiah-canada.github.io/calender/"
      ></Project>
      <Project
        title="Music find"
        image={Musicfind}
        github="https://github.com/justjulio95/music-find"
        deployment="https://justjulio95.github.io/music-find/"
      ></Project>
      <Project
        title="glam on glitz"
        image={Glam}
        github="https://github.com/Josiah-Canada/glam-on-glitzzz"
        deployment="https://josiah-canada.github.io/glam-on-glitzzz/"
      ></Project>
      <Project
        title="todo"
        image={Todo}
        github="https://github.com/Josiah-Canada/todo---frontend"
        deployment="https://main--calm-empanada-bac4c8.netlify.app/"
      ></Project>
    </section>
  );
}

export default Portfolio;
