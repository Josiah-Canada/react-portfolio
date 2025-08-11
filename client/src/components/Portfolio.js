import React from "react";
import Project from "./Project";
import Budget from "./images/budget.png";
import Work from "./images/work.png";
import Glam from "./images/glam.png";
import Todo from "./images/todo.png";
import Musicfind from "./images/music-find.png";
import Book from "./images/bookblog.png"



function Portfolio() {
  return (
    <section id="projects">
      <Project
        title="Budget tracker"
        image={Budget}
        github="https://github.com/Josiah-Canada/Budget-tracker"
        deployment="https://lambent-crostata-4841f4.netlify.app/"
      ></Project>

      <Project
        title="book-blog"
        image={Book}
        github="https://github.com/Josiah-Canada/Book-blog"
        deployment="https://hmbbomt97-be0b416e8008.herokuapp.com/"
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
