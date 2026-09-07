import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Job Career",
    type: "Web Application · Laravel",
    color: "orange",
    desc: "Full-featured job portal connecting candidates with opportunities through a practical recruitment workflow.",
    tags: ["Laravel", "MySQL", "Blade"],
    github: "https://github.com/cepiseptiyana/job_career",
    image: "/images/job_career.webp",
  },
  {
    number: "02",
    title: "Creative Portfolio",
    type: "Interactive · React",
    color: "blue",
    desc: "Motion-first portfolio experience focused on storytelling, performance and memorable interactions.",
    tags: ["React", "GSAP", "Swiper"],
    github: "https://github.com/cepiseptiyana/my-portfolio",
    image: "/images/portfolio.png",
  },
];

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
        <section className="hero" id="home">
          <div className="grid-bg"></div>
          <div className="orb hero-orb orb-one"></div>
          <div className="orb hero-orb orb-two"></div>
          <div className="hero-content">
            <div className="hero-kicker">
              <span></span> CEPI SEPTIYANA · JUNIOR WEB DEVELOPER
            </div>
            <h1 className="hero-title">
              <span className="line">Building modern</span>
              <span className="line italic">web experiences</span>
              <span className="line accent">with code.</span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-copy">
                I'm a Junior Web Developer with experience as a Front-End
                Engineer. I focus on building responsive, modern, and
                interactive web applications using React and modern web
                technologies.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#work">
                  Explore my work <ArrowDownRight size={18} />
                </a>
                <a className="btn text" href="#contact">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
          {/* <div className="scroll-note">SCROLL TO EXPLORE <span></span></div> */}
          <Wave className="wave-hero" />
        </section>

        <section className="about section" id="about">
          <div className="section-label reveal">( 01 — ABOUT )</div>
          <div className="about-layout">
            <h2 className="display reveal">
              Building modern web solutions
              <br />
              <i>with purpose and precision.</i>
            </h2>
            <div className="about-copy reveal">
              <p>
                I am a Junior Web Developer with experience as a Front-End
                Engineer, focused on developing web applications and responsive
                user interfaces.
              </p>
              <p>
                My technical experience includes working with React, JavaScript,
                CSS, animation libraries, and backend technologies to support
                the development of modern web applications.
              </p>
              <div className="about-actions">
                <a href="#contact" className="inline-link">
                  More about me <ArrowDownRight size={17} />
                </a>

                <a
                  href="/Cepi-Septiyana-CV.pdf"
                  download
                  className="resume-btn"
                >
                  Download Resume
                  <ArrowDownRight size={17} />
                </a>
              </div>
            </div>
          </div>

          <Wave className="wave-about" />
        </section>

        <section className="skills-section section" id="skills">
          <div className="section-label reveal">( 02 — SKILLS )</div>

          <div className="skills-header reveal">
            <h2>
              Technologies I use
              <br />
              <i>to build for the web.</i>
            </h2>

            <p>
              A collection of technologies and tools I have worked with
              throughout web development projects.
            </p>
          </div>

          <div className="skills-modern">
            <div className="skill-category reveal">
              <div className="skill-number">01</div>

              <div className="skill-content">
                <span className="skill-label">FRONTEND</span>

                <h3>Frontend Development</h3>

                <div className="skill-list">
                  <span>React.js</span>
                  <span>Next.js</span>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
              </div>
            </div>

            <div className="skill-category reveal">
              <div className="skill-number">02</div>

              <div className="skill-content">
                <span className="skill-label">UI & INTERACTION</span>

                <h3>Interface & Animation</h3>

                <div className="skill-list">
                  <span>GSAP</span>
                  <span>Swiper</span>
                  <span>Tailwind CSS</span>
                  <span>Bootstrap</span>
                  <span>Ant Design</span>
                  <span>Responsive Design</span>
                </div>
              </div>
            </div>

            <div className="skill-category reveal">
              <div className="skill-number">03</div>

              <div className="skill-content">
                <span className="skill-label">BACKEND</span>

                <h3>Backend Development</h3>

                <div className="skill-list">
                  <span>Laravel</span>
                  <span>PHP</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>REST API</span>
                </div>
              </div>
            </div>

            <div className="skill-category reveal">
              <div className="skill-number">04</div>

              <div className="skill-content">
                <span className="skill-label">DATABASE</span>

                <h3>Database</h3>

                <div className="skill-list">
                  <span>MySQL(basic)</span>
                  <span>PostgreSQL(basic)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category reveal">
            <div className="skill-number">05</div>

            <div className="skill-content">
              <span className="skill-label">DEVOPS & TOOLS</span>

              <h3>Development & Deployment</h3>

              <div className="skill-list">
                <span>Git</span>
                <span>GitHub</span>
                <span>Jenkins(basic)</span>
                <span>Docker(basic)</span>
                <span>Linux(basic)</span>
                <span>Apache(basic)</span>
              </div>
            </div>
          </div>

          <div className="skills-marquee">
            <div className="marquee-track">
              <span>REACT</span>
              <span>JAVASCRIPT</span>
              <span>GSAP</span>
              <span>NEXT.JS</span>
              <span>LARAVEL</span>
              <span>NODE.JS</span>
              <span>MYSQL</span>

              <span>REACT</span>
              <span>JAVASCRIPT</span>
              <span>GSAP</span>
              <span>NEXT.JS</span>
              <span>LARAVEL</span>
              <span>NODE.JS</span>
              <span>MYSQL</span>
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="section-head reveal">
            <div className="section-label">( 02 — SELECTED WORK )</div>
            <p>
              A selection of projects built with curiosity, detail and modern
              web technologies.
            </p>
          </div>
          <div className="projects">
            {projects.map((p, i) => (
              <article className={"project-row " + p.color} key={p.number}>
                <div className="project-num">{p.number}</div>
                <div className="project-art">
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="project-info">
                  <span>{p.type}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <b key={t}>{t}</b>
                    ))}
                  </div>
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="round-link"
                  aria-label={"View " + p.title + " on GitHub"}
                >
                  <ExternalLink size={20} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="process section">
          <div className="section-label reveal">( 03 — PROCESS )</div>
          <div className="process-grid">
            {[
              [
                "01",
                "Discover",
                "Understanding goals, users and the problem before touching the interface.",
              ],
              [
                "02",
                "Design",
                "Turning ideas into a visual direction with hierarchy, rhythm and clarity.",
              ],
              [
                "03",
                "Build",
                "Developing responsive components with performance and maintainability in mind.",
              ],
              [
                "04",
                "Refine",
                "Polishing details, interactions and motion until the experience feels right.",
              ],
            ].map((x) => (
              <div className="process-card reveal" key={x[0]}>
                <span>{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="showcase section reveal">
          <div className="section-label">( PLAYGROUND )</div>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            loop
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              900: { slidesPerView: 2 },
            }}
          >
            {projects.map((p) => (
              <SwiperSlide key={p.number}>
                <div className={"slide-card " + p.color}>
                  <img src={p.image} alt={p.title} className="slide-image" />

                  <div className="slide-overlay"></div>

                  <span>{p.number}</span>

                  <h3>{p.title}</h3>

                  <p>{p.type}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="contact" id="contact">
          <div className="contact-glow"></div>
          <div className="section-label">( 04 — CONTACT )</div>
          <h2>
            Have an idea?
            <br />
            <i>Let's make it move.</i>
          </h2>
          <a
            className="contact-mail"
            href="mailto:cepifams3@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            cepifams3@gmail.com <ArrowDownRight />
          </a>
          <div className="socials">
            <a href="https://github.com/cepiseptiyana">
              <Github /> Github
            </a>
            <a href="https://www.linkedin.com/in/cepi-septiyana/">
              <Linkedin /> LinkedIn
            </a>
            <a href="#">
              <Mail /> Email
            </a>
          </div>
          <Wave className="wave-contact" />
        </section>
      </main>
      <footer>
        <span>© 2026 CEPI PORTFOLIO</span>
        <span>DESIGNED & BUILT WITH REACT + GSAP</span>
      </footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
