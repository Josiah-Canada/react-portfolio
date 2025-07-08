import React from "react";

function Nav({ setSelectedTab }) {
  return (
      <div id="title" >
      <h1 >Welcome to my portfolio</h1>
      <aside  className = "header" >
        <a id="navigation" href="/#" onClick={() => setSelectedTab("About")}>About</a>
        <a id="navigation" href="/#" onClick={() => setSelectedTab("Portfolio")}>Portfolio</a>
        <a id="navigation" href="/#" onClick={() => setSelectedTab("Contact")}>Contact</a>
        <a id="navigation" href="/#" onClick={() => setSelectedTab("Resume")}>Resume</a>
      </aside>
   </div>
  );
}

export default Nav;
