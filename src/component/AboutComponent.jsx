import React, { useEffect, useRef } from "react";
import { ArrowDownRight } from "lucide-react";
import useDevice from "../hooks/useDevice";
import "../styles/about_component.sass";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function initMobileAnimation() {
  const aboutScrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top top",
      end: "+=4000",
      pin: true,
      scrub: 1,
      // markers: true,
    },
  });

  const split = new SplitText(".title-about-2", {
    type: "chars",
    charsClass: "char",
  });

  gsap.set(split.chars, {
    opacity: 0.05,
  });

  gsap.set(".title-about-1", {
    position: "relative",
    left: "-120%",
  });

  gsap.set(".title-about-3", {
    position: "relative",
    left: "-120%",
  });

  gsap.set(".desc-about", {
    position: "relative",
    left: "-120%",
  });

  gsap.set(".wraper-image", {
    position: "relative",
    left: "-120%",
    scale: 0.7,
    top: "-50%",
  });

  gsap.set(".arrow_bottom", {
    position: "relative",
    top: "-41.6%",
    left: "32%",
    clipPath: "inset(0 0 100% 0)",
  });

  aboutScrollTl.to(".title-about-1", {
    left: "0%",
    duration: 0.3,
  });

  aboutScrollTl.to(split.chars, {
    opacity: 1,
    duration: 0.3,
    stagger: {
      each: 0.05,
    },
    ease: "none",
  });

  aboutScrollTl.to(".title-about-3", {
    left: "0%",
    duration: 0.3,
  });

  aboutScrollTl.to(".resume-btn", {
    duration: 0.5,
    backgroundColor: "#d8ff36",
    color: "black",
  });

  aboutScrollTl.to(
    ".desc-about",
    {
      left: "0%",
      duration: 0.3,
    },
    "+=0.3"
  );

  aboutScrollTl.to(
    ".desc-about",
    {
      left: "150%",
      duration: 0.3,
    },
    "+=1"
  );

  aboutScrollTl.to(".wraper-image", {
    scale: 0.7,
    left: "0%",
    duration: 0.3,
  });

  aboutScrollTl.to(
    ".wraper-image",
    {
      scale: 3,
      // top: "-64%",
      left: "0%",
      ease: "none",
      duration: 4,
    },
    "+=0.2"
  );

  aboutScrollTl.to(
    ".wraper-image",
    {
      top: "-404%",
      duration: 4,
    },
    "+=2"
  );

  aboutScrollTl.to(".arrow_bottom", {
    clipPath: "inset(0 0 0% 0)",
    duration: 1,
    ease: "none",
  });

  aboutScrollTl.to(
    ".arrow_bottom",
    {
      clipPath: "inset(0 0 0% 0)",
      top: "-34.6%",
      duration: 1,
      ease: "none",
    },
    "+=1"
  );

  aboutScrollTl.to(".arrow_bottom", {
    clipPath: "inset(0 0 0% 0)",
    top: "-38.6%",
    duration: 1,
    ease: "none",
  });

  aboutScrollTl.to(".arrow_bottom", {
    clipPath: "inset(0 0 0% 0)",
    top: "-25.6%",
    duration: 1,
    ease: "none",
  });

  aboutScrollTl.to(".arrow_bottom", {
    clipPath: "inset(100% 0 0% 0)",
    duration: 1,
    ease: "none",
  });
}

function initDesktopAnimation() {
  const titleAbout = gsap.timeline();

  titleAbout.set(".title-about", {
    rotateX: "90deg",
    opacity: 0,
  });

  const aboutScrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "+=430",
      pin: false,
      scrub: 1,
      // markers: true,
    },
  });

  aboutScrollTl.set(".image", {
    position: "relative",
    top: "22%",
    scale: 0.2,
    transformOrigin: "right top",
  });

  aboutScrollTl.to(".title-about", {
    rotateX: "0deg",
    duration: 0.5,
    opacity: 1,
  });

  aboutScrollTl.to(
    ".image",
    {
      top: "-20%",
      scale: 1.08,
      duration: 0.7,
      transformOrigin: "right top",
    },
    0
  );

  aboutScrollTl.to(
    ".resume-btn",
    {
      duration: 0.5,
      backgroundColor: "#d8ff36",
      color: "black",
    },
    0
  );
}

export default function AboutComponent() {
  const device = useDevice();
  const root_about = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (device === "mb") {
        initMobileAnimation();
      }

      if (device === "pc") {
        initDesktopAnimation();
      }
    }, root_about);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root_about}>
      <section className="about section" id="about">
        <div className="wrapper-container">
          {/* =====================
              MOBILE
          ===================== */}

          {device === "mb" && (
            <div className="content-mb">
              <div className="center-container">
                <div className="title-about">
                  <div className="title-about-1">FRONT-END </div>
                  <div className="title-about-2">WEB</div>
                  <div className="title-about-3">DEVELOPER</div>
                </div>

                <div className="wraper-flex">
                  <div className="wraper-desc">
                    <div className="title-desc">Self Introduction</div>

                    <div className="desc-wrapper">
                      <a
                        href={`${
                          import.meta.env.BASE_URL
                        }cv/Cepi_Septiyana_Junior_Fullstack_Developer_CV.pdf`}
                        download="cv_cepi_septiyana.pdf"
                        className="resume-btn"
                      >
                        Download Resume <ArrowDownRight size={17} />
                      </a>

                      <div className="desc-about">
                        I am a Junior Web Developer with experience as a
                        Front-End Engineer, focused on developing web
                        applications and responsive user interfaces.
                      </div>

                      <div className="arrow_bottom">
                        <img
                          src={`${
                            import.meta.env.BASE_URL
                          }icons/icon_rows_bottom.svg`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="wraper-image">
                    <div className="image">
                      <img
                        src={`${import.meta.env.BASE_URL}images/pas_foto.webp`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =====================
              DEKSTOP
          ===================== */}

          {device === "pc" && (
            <div className="content-pc">
              <div className="center-container">
                {/* <h2 className="title-about">FRONT-END WEB DEVELOPER</h2> */}
                <div className="title-about">
                  <div className="title-about-1">FRONT-END WEB</div>
                  <div className="title-about-2">DEVELOPER</div>
                </div>

                <div className="wraper-flex">
                  <div className="wraper-desc">
                    <div className="title-desc">Self Introduction</div>

                    <div className="desc-wrapper">
                      <a
                        href={`${
                          import.meta.env.BASE_URL
                        }cv/Cepi_Septiyana_Junior_Fullstack_Developer_CV.pdf`}
                        download="cv_cepi_septiyana.pdf"
                        className="resume-btn"
                      >
                        Download Resume <ArrowDownRight size={17} />
                      </a>

                      <div className="desc-about">
                        I am a Junior Web Developer with experience as a
                        Front-End Engineer, focused on developing web
                        applications and responsive user interfaces.
                      </div>
                    </div>
                  </div>

                  <div className="wraper-image">
                    <div className="image">
                      <img
                        src={`${import.meta.env.BASE_URL}images/pas_foto.webp`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
