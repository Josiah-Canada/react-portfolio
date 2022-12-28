import React from "react";
import Project from './Project'
import Budget from '../images/Budget.png'
import Run from '../images/Run-buddy.png'
import Team from '../images/Teamwork.jpeg'
import Work from '../images/Work.png'
import Gen from '../images/Gen.png'
import Lingua from '../images/lingua.png'
import Open from '../images/Opensignal.png'


function Portfolio() {
    return (
      <section>

       <Project title = "Budget tracker" image= {Budget} github = "https://github.com/Josiah-Canada/Budget-tracker" deployment= "https://evening-shore-05535.herokuapp.com/">

       </Project>
       <Project title = "Run buddy" image = {Run} github = "https://github.com/Josiah-Canada/run-buddy" deployment= "https://josiah-canada.github.io/run-buddy/">

       </Project>
       <Project title = "Team Profile Generator" image = {Team} github = "https://github.com/Josiah-Canada/team-profile-generator" deployment= "https://josiah-canada.github.io/team-profile-generator/">

       </Project>
       <Project title = "Work day scheduler" image = {Work} github = "https://github.com/Josiah-Canada/calender" deployment = "https://josiah-canada.github.io/calender/">

       </Project>
       <Project title = "Password generator" image = {Gen} github = "https://github.com/Josiah-Canada/password-generator" deployment = "https://josiah-canada.github.io/password-generator/">

       </Project>
       <Project title = "Lingua" image = {Lingua} github = "https://github.com/SamuelGa25/Project-2-Lingua" deployment = "https://josiah-canada.github.io/weather-dashboard/">
        
       </Project>
       <Project title = "Opensignal" image = {Open} github = "https://github.com/alandidiego/finalproject" deployment= "https://git.heroku.com/opensignal.git" >

       </Project>
      </section>
    );
  }
  
  export default Portfolio;