import React from "react";

function Nav({ setSelectedTab }) {
  return (
    <section>
      <h1 id="navigation"></h1>
      <aside className = "header" >
        <a onClick={() => setSelectedTab("About")}>About</a>
        <a onClick={() => setSelectedTab("Portfolio")}>Portfolio</a>
        <a onClick={() => setSelectedTab("Contact")}>Contact</a>
        <a onClick={() => setSelectedTab("Resume")}>Resume</a>
      </aside>
    </section>
  );
}

export default Nav;
