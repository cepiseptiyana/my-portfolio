import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

import HeroComponent from "./component/HeroComponent";
import AboutComponent from "./component/AboutComponent";
import SkillComponent from "./component/SkillComponent";
import ExperienceComponent from "./component/ExperienceComponent";
import ProjectComponent from "./component/ProjectComponent";
import ProcessComponent from "./component/ProcessComponent";
import PlaygroundComponent from "./component/PlaygroundComponent";
import ContactComponent from "./component/ContactComponent";

gsap.registerPlugin(ScrollTrigger);

function Wave({ className = "" }) {
  return (
    <svg
      className={"wave " + className}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0,192L40,176C80,160,160,128,240,138.7C320,149,400,203,480,213.3C560,224,640,192,720,170.7C800,149,880,139,960,154.7C1040,171,1120,213,1200,218.7C1280,224,1360,192,1400,176L1440,160L1440,320L0,320Z" />
    </svg>
  );
}

function App() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".nav", { y: -30, opacity: 0, duration: 0.8 })
        .from(".hero-kicker", { y: 30, opacity: 0, duration: 0.7 }, "-=.4")
        .from(
          ".hero-title .line",
          { y: 110, opacity: 0, stagger: 0.13, duration: 1 },
          "-=.3"
        )
        .from(
          ".hero-copy, .hero-actions",
          { y: 25, opacity: 0, stagger: 0.15, duration: 0.7 },
          "-=.4"
        )
        .from(".hero-orb", { scale: 0.6, opacity: 0, duration: 1.2 }, "-=1");

      gsap.to(".orb-one", {
        x: 70,
        y: -45,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
      gsap.to(".orb-two", {
        x: -80,
        y: 80,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.to(".wave-hero", {
        xPercent: -8,
        x: -205,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(".wave-about", {
        xPercent: -8,
        x: -205,
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(".wave-contact", {
        xPercent: -9,
        x: -205,
        scrollTrigger: {
          trigger: ".contact",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
      gsap.utils.toArray(".project-row").forEach((el) => {
        gsap.from(el, {
          x: -50,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: { trigger: el, start: "top 88%" },
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
createRoot(document.getElementById("root")).render(<App />);
