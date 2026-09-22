import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles/navbar_component.sass";

import HeroComponent from "./component/HeroComponent";
import AboutComponent from "./component/AboutComponent";
import SkillComponent from "./component/SkillComponent";
import ExperienceComponent from "./component/ExperienceComponent";
import ProjectComponent from "./component/ProjectComponent";
import ProcessComponent from "./component/ProcessComponent";
import PlaygroundComponent from "./component/PlaygroundComponent";
import ContactComponent from "./component/ContactComponent";

export default function App() {
  const root = useRef(null);

  return (
    <div ref={root}>
      <nav className="nav">
        <a className="brand" href="#home">
          CEPI<span>®</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-dot" href="#contact">
          Let's talk <span>↗</span>
        </a>
      </nav>

      <main>
        <HeroComponent />
        <AboutComponent />
        <SkillComponent />
        <ExperienceComponent />
        {/* <ProjectComponent /> */}
        {/* <ProcessComponent /> */}
        {/* <PlaygroundComponent /> */}
        {/* <ContactComponent Wave={Wave} /> */}
      </main>

      {/* <footer>
        <span>© 2026 CEPI PORTFOLIO</span>
        <span>DESIGNED & BUILT WITH REACT + GSAP</span>
      </footer> */}
    </div>
  );
}
