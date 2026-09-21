import React, { useEffect, useRef } from "react";
import useDevice from "../hooks/useDevice";
import "../styles/hero_component.sass";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function initMobileAnimation() {
  const split = new SplitText(".hero-copy", {
    type: "chars",
    charsClass: "char",
  });

  gsap.set(split.chars, {
    opacity: 0.15,
  });

  const heroScrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: true,
    },
  });

  // text
  heroScrollTl.to(
    split.chars,
    {
      opacity: 1,
      stagger: {
        each: 0.5,
        amount: 1,
      },
      ease: "none",
    },
    0
  );

  return heroScrollTl;
}

function initDesktopAnimation() {
  const split = new SplitText(".hero-copy", {
    type: "chars",
    charsClass: "char",
  });

  gsap.set(split.chars, {
    opacity: 0.15,
  });

  const heroScrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: true,
    },
  });

  // text
  heroScrollTl.to(
    split.chars,
    {
      opacity: 1,
      stagger: {
        each: 0.5,
        amount: 1,
      },
      ease: "none",
    },
    0
  );

  return heroScrollTl;
}

function firstAnimateGsap() {
  const heroTl = gsap.timeline();

  heroTl.from(".title-1", {
    scale: 0,
  });
  heroTl.from(".title-2", {
    scale: 0,
  });
  heroTl.from(".title-3", {
    scale: 0,
  });

  heroTl.to(".title-1", {
    scale: 1,
  });
  heroTl.to(".title-2", {
    scale: 1,
  });
  heroTl.to(".title-3", {
    scale: 1,
  });
}

export default function HeroComponent() {
  const device = useDevice();
  const root_hero = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      firstAnimateGsap();

      if (device === "mb") {
        initMobileAnimation();
      }

      if (device === "pc") {
        initDesktopAnimation();
      }
    }, root_hero);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root_hero}>
      <section className="hero" id="home">
        <div className="wrapper-container">
          {/* =====================
              MOBILE
          ===================== */}

          {device === "mb" && (
            <div className="content-mb">
              {/* <div className="container-video">
                <video autoPlay muted loop playsInline>
                  <source
                    src={`${import.meta.env.BASE_URL}videos/cinematic.webm`}
                    type="video/webm"
                  />
                </video>
              </div> */}
              {/* 
              <div className="orb orb-one"></div>
              <div className="orb orb-two"></div> */}

              <div className="center-container">
                <div className="hero-kicker">
                  <span></span>
                  CEPI SEPTIYANA · JUNIOR WEB DEVELOPER
                </div>

                <div className="hero-title">
                  <span className="line title-1">Crafting Digital</span>

                  <span className="line title-2">Web ━</span>

                  <span className="line title-3">Experiences</span>
                </div>

                <div className="hero-bottom">
                  <p className="hero-copy">
                    I'm a Junior Web Developer with experience as a Front-End
                    Engineer. I focus on building responsive, modern, and
                    interactive web applications using React and modern web
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* =====================
              DEKSTOP
          ===================== */}

          {device === "pc" && (
            <div className="content-pc">
              {/* <div className="container-video">
                <video autoPlay muted loop playsInline>
                  <source
                    src={`${import.meta.env.BASE_URL}videos/cinematic.webm`}
                    type="video/webm"
                  />
                </video>
              </div> */}

              {/* <div className="orb orb-one"></div>
              <div className="orb orb-two"></div> */}

              <div className="center-container">
                <div className="hero-kicker">
                  <span></span>
                  CEPI SEPTIYANA · JUNIOR WEB DEVELOPER
                </div>

                <div className="hero-title">
                  <span className="line title-1">Crafting Digital</span>

                  <span className="line title-2">Web ━</span>

                  <span className="line title-3">Experiences</span>
                </div>

                <div className="hero-bottom">
                  <p className="hero-copy">
                    I'm a Junior Web Developer with experience as a Front-End
                    Engineer. I focus on building responsive, modern, and
                    interactive web applications using React and modern web
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* <ComponentWave className="wave-hero" /> */}
      </section>
    </div>
  );
}
