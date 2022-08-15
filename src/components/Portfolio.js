import React from "react";
import Project from './Project'
import Budget from '../images/budget.png'


function Portfolio() {
    return (
      <section>

       <Project title = "Budget tracker" image= {Budget} github = "https://github.com/Josiah-Canada/Budget-tracker">

       </Project>
       <Project title = "Run buddy" image = {Budget} github = "https://github.com/Josiah-Canada/run-buddy" deployment= "https://josiah-canada.github.io/run-buddy/">

       </Project>
       <Project title = "Team Profile Generator" image = {Budget} github = "https://github.com/Josiah-Canada/team-profile-generator" deployment= "https://josiah-canada.github.io/team-profile-generator/">

       </Project>
       <Project title = "Work day scheduler" image = {Budget} github = "https://github.com/Josiah-Canada/calender" deployment = "https://josiah-canada.github.io/calender/">

       </Project>
       <Project title = "Password generator" image = {Budget} github = "https://github.com/Josiah-Canada/password-generator" deployment = "https://josiah-canada.github.io/password-generator/">

       </Project>
       <Project title = "Weather dashboard" image = {Budget} github = "https://github.com/Josiah-Canada/weather-dashboard" deployment = "https://josiah-canada.github.io/weather-dashboard/">
        
       </Project>
      </section>
    );
  }
  
  export default Portfolio;