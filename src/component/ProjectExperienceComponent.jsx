import { useEffect, useRef } from "react";
import "../styles/project_experience_component.sass";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import useDevice from "../hooks/useDevice";

gsap.registerPlugin(ScrollTrigger, SplitText);

/* =====================
   DATA (ganti dengan project kamu)
===================== */
const projects = [
  {
    year: "2026",
    title: "Personal Portfolio",
    role: "DESIGN & DEVELOPMENT",
    image: `${import.meta.env.BASE_URL}images/portfolio.png`,
    imageAlt: "Personal portfolio website preview",
    points: [
      "Designed the layout and typography system from scratch.",
      "Built separate mobile and desktop animation timelines.",
      "Used pinned sections with scrubbed GSAP timelines.",
      "Deployed with a clean Git workflow.",
    ],
    tech: ["React.js", "GSAP", "SASS", "Git", "Github"],
    link: "",
  },
  {
    year: "2025",
    title: "JobCareer",
    role: "FRONT-END ENGINEER",
    image: `${import.meta.env.BASE_URL}images/job_career.png`,
    imageAlt: "JobCareer job search website preview",
    points: [
      "Built the landing page with a hero section and navigation.",
      "Implemented the job search form with keyword, location, and category.",
      "Created Login and Post a Job actions in the header.",
      "Made the layout responsive for desktop and mobile.",
    ],
    tech: ["React.js", "JavaScript", "CSS", "Responsive CSS", "REST API"],
    link: "",
  },
];

/* =====================
   HELPERS
===================== */
function splitTitle() {
  const split = new SplitText(".project-title-2", {
    type: "chars",
    charsClass: "char",
  });

  gsap.set(split.chars, { opacity: 0.05 });
  return split;
}

/* =====================
   MOBILE ANIMATION
   Card ditumpuk, tiap scroll card berikutnya naik menutupi card sebelumnya
===================== */
function initMobileAnimation() {
  const cards = gsap.utils.toArray(".project-card");
  const split = splitTitle();

  gsap.set(cards.slice(1), { yPercent: 105 });

  const projectTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".project",
      start: "top top",
      end: `+=${cards.length * 1400}`,
      pin: true,
      scrub: 1,
      // markers: true,
    },
  });

  projectTl.to(split.chars, {
    opacity: 1,
    duration: 0.3,
    stagger: { each: 0.05 },
    ease: "none",
  });

  cards.forEach((card, index) => {
    if (index === 0) return;

    projectTl.addLabel(`card${index}`, ">+0.3");

    projectTl.to(
      card,
      { yPercent: 0, duration: 1, ease: "power1.inOut" },
      `card${index}`
    );

    projectTl.to(
      cards[index - 1],
      { scale: 0.92, opacity: 0.3, yPercent: -3, duration: 1, ease: "none" },
      `card${index}`
    );
  });

  projectTl.to({}, { duration: 0.4 });

  projectTl.fromTo(
    ".project-progress-bar",
    { scaleX: 0 },
    { scaleX: 1, ease: "none", duration: projectTl.duration() },
    0
  );
}

/* =====================
   DESKTOP ANIMATION
   Section di-pin, track card bergeser horizontal mengikuti scroll
===================== */
function initDekstopAnimation() {
  const track = gsap.utils.toArray(".project-track")[0];
  const cards = gsap.utils.toArray(".project-card");
  const split = splitTitle();

  const getDistance = () => Math.max(0, track.offsetWidth - window.innerWidth);
  const SCROLL_DURATION = 6;

  gsap.set(cards, { opacity: 0, y: 80, scale: 0.94 });
  const images = cards.map((card) => card.querySelector("img"));
  gsap.set(images, { scale: 1.15 });

  const projectTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".project",
      start: "top top",
      end: () => `+=${getDistance() + window.innerHeight * 2}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      // markers: true,
    },
  });

  // 1. judul muncul per huruf
  projectTl.to(split.chars, {
    opacity: 1,
    duration: 0.3,
    stagger: { each: 0.05 },
    ease: "none",
  });

  // 2. card naik satu per satu (card pertama langsung aktif)
  projectTl.to(cards, {
    y: 0,
    opacity: (i) => (i === 0 ? 1 : 0.35),
    scale: (i) => (i === 0 ? 1 : 0.94),
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out",
  });

  projectTl.to(images[0], { scale: 1, duration: 0.6, ease: "none" }, "<");

  // 3. track bergeser horizontal + progress bar
  projectTl.addLabel("scroll", "+=0.3");

  projectTl.to(
    track,
    {
      x: () => -getDistance(),
      ease: "none",
      duration: SCROLL_DURATION,
    },
    "scroll"
  );

  projectTl.fromTo(
    ".project-progress-bar",
    { scaleX: 0 },
    { scaleX: 1, ease: "none", duration: SCROLL_DURATION },
    "scroll"
  );

  // 4. card aktif saat mendekati tengah layar
  if (cards.length > 1) {
    cards.forEach((card, index) => {
      if (index === 0) return;

      const at = (index / (cards.length - 1)) * SCROLL_DURATION * 0.8;

      projectTl.to(
        card,
        { opacity: 1, scale: 1, duration: 0.6, ease: "none" },
        `scroll+=${at}`
      );

      projectTl.to(
        images[index],
        { scale: 1, duration: 0.6, ease: "none" },
        `scroll+=${at}`
      );
    });
  }

  projectTl.to({}, { duration: 0.5 });
}

/* =====================
   RENDER CARD
===================== */
function RenderProjectContent(device) {
  const isMobile = device === "mb";

  return projects.map((getData, index) => {
    const points = isMobile ? getData.points.slice(0, 2) : getData.points;
    const tech = isMobile ? getData.tech.slice(0, 4) : getData.tech;

    return (
      <article className="project-card" key={index}>
        <div className="project-content">
          <div className="project-head">
            <span className="project-year">{getData.year}</span>
          </div>

          <div className="title-project">{getData.title}</div>
          <div className="project-role-label">{getData.role}</div>
          <div className="project-media">
            <img src={getData.image} alt={getData.imageAlt} loading="lazy" />
          </div>

          <div className="project-points">
            {points.map((getPoint, i) => (
              <div className="wraper-project-point" key={i}>
                <span>●</span>
                <div className="decs-project-point">{getPoint}</div>
              </div>
            ))}
          </div>

          <div className="project-tech">
            {tech.map((getTech, i) => (
              <div className="desc-project-tech" key={i}>
                {getTech}
              </div>
            ))}
          </div>

          {getData.link && (
            <a
              className="project-link"
              href={getData.link}
              target="_blank"
              rel="noreferrer"
            >
              View project
            </a>
          )}
        </div>
      </article>
    );
  });
}

/* =====================
   COMPONENT
===================== */
export default function ProjectExperienceComponent() {
  const root_project = useRef(null);
  const device = useDevice();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (device === "mb") {
        initMobileAnimation();
      }

      if (device === "pc") {
        initDekstopAnimation();
      }
    }, root_project);

    return () => ctx.revert();
  }, [device]);

  return (
    <div ref={root_project}>
      <section className="project section" id="project">
        <div className="wrapper-container">
          {/* =====================
              MOBILE
          ===================== */}
          {device === "mb" && (
            <div className="content-mb">
              <div className="center-container">
                <div className="project-main">
                  <div className="project-title">
                    <div className="title-1">Things I have</div>
                    <div className="title-2 project-title-2">
                      Built & Shipped.
                    </div>
                    <div className="title-desc">
                      Selected projects where I turned designs into working,
                      responsive interfaces.
                    </div>
                  </div>
                </div>

                <div className="project-stack">
                  {RenderProjectContent(device)}
                </div>

                <div className="project-progress">
                  <div className="project-progress-bar" />
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
                <div className="project-main">
                  <div className="project-title">
                    <div className="title-wrap">
                      <div className="title-1">Things I have</div>
                      <div className="title-2 project-title-2">
                        Built & Shipped.
                      </div>
                    </div>
                    <div className="title-desc">
                      Selected projects where I turned designs into working,
                      responsive interfaces.
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-viewport">
                <div className="project-track">
                  {RenderProjectContent(device)}
                </div>
              </div>

              <div className="center-container">
                <div className="project-progress">
                  <div className="project-progress-bar" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
