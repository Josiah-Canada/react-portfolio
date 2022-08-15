import React from 'react';

function Nav({setSelectedTab}) {
    return (
      <section>
        <h1 id="navigation">
            <ul>
                <li onClick = {() => setSelectedTab("About")}>About</li>
                <li onClick = {() => setSelectedTab("Portfolio")}>Portfolio</li>
                <li onClick = {() => setSelectedTab("Contact")}>Contact</li>
                <li>Resume</li>
            </ul>
        </h1>

      </section>
    );
  }

export default Nav;
