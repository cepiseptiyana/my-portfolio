import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import HeroComponent from "./component/HeroComponent";
import AboutComponent from "./component/AboutComponent";
import SkillComponent from "./component/SkillComponent";
import ExperienceComponent from "./component/ExperienceComponent";
import ProjectComponent from "./component/ProjectComponent";
import ProcessComponent from "./component/ProcessComponent";
import PlaygroundComponent from "./component/PlaygroundComponent";
import ContactComponent from "./component/ContactComponent";

function Wave({ className = "" }) {
  return (
    <svg
      className={`wave ${className}`}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0,192L40,176C80,160,160,128,240,138.7C320,149,400,203,480,213.3C560,224,640,192,720,170.7C800,149,880,139,960,154.7C1040,171,1120,213,1200,218.7C1280,224,1360,192,1400,176L1440,160L1440,320L0,320Z" />
    </svg>
  );
}

export default function App() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // =====================
      // HERO ANIMATION
      // =====================

      gsap.from(".nav", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      });

      gsap.from(".hero-kicker", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        ease: "power4.out",
      });

      gsap.from(".hero-title .line", {
        y: 110,
        opacity: 0,
        duration: 1,
        stagger: 0.13,
        delay: 0.5,
        ease: "power4.out",
      });

      gsap.from(".hero-copy", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        delay: 0.8,
        ease: "power4.out",
      });

      gsap.from(".hero-actions", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        delay: 1,
        ease: "power4.out",
      });

      gsap.from(".hero-orb", {
        scale: 0.6,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power4.out",
      });

      // =====================
      // SCROLL ORB
      // =====================

      gsap.to(".orb-one", {
        x: 70,
        y: -45,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".orb-two", {
        x: -80,
        y: 80,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // =====================
      // WAVE ANIMATION
      // =====================

      gsap.to(".wave-hero", {
        x: -205,
        xPercent: -8,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".wave-about", {
        x: -205,
        xPercent: -8,
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".wave-contact", {
        x: -205,
        xPercent: -9,
        scrollTrigger: {
          trigger: ".contact",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // =====================
      // REVEAL ELEMENT
      // =====================

      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",

          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        });
      });

      // =====================
      // PROJECT ROW
      // =====================

      gsap.utils.toArray(".project-row").forEach((element) => {
        gsap.from(element, {
          x: -50,
          opacity: 0,
          duration: 0.8,

          scrollTrigger: {
            trigger: element,
            start: "top 88%",
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

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
        <HeroComponent Wave={Wave} />
        <AboutComponent Wave={Wave} />
        <SkillComponent />
        <ExperienceComponent />
        <ProjectComponent />
        <ProcessComponent />
        <PlaygroundComponent />
        <ContactComponent Wave={Wave} />
      </main>

      <footer>
        <span>© 2026 CEPI PORTFOLIO</span>
        <span>DESIGNED & BUILT WITH REACT + GSAP</span>
      </footer>
    </div>
  );
}
