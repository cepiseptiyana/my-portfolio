import {
  Code2,
  Github,
  Layers3,
  Sparkles,
  FileCode2,
  Braces,
  Palette,
  Database,
  Server,
  GitBranch,
  Container,
  Terminal,
} from "lucide-react";
import "../styles/skill_component.sass";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import useDevice from "../hooks/useDevice";

gsap.registerPlugin(ScrollTrigger, SplitText);

function RenderSkillFrontEnd() {
  let element = [];

  const skill_frontEnd = [
    {
      name: "React.js",
      icon: Code2,
    },
    {
      name: "Next.js",
      icon: Layers3,
    },
    {
      name: "JavaScript",
      icon: Braces,
    },
    {
      name: "TypeScript",
      icon: FileCode2,
    },
    {
      name: "HTML",
      icon: FileCode2,
    },
    {
      name: "CSS",
      icon: Palette,
    },
  ];

  for (const skills of skill_frontEnd) {
    const Icon = skills.icon;

    element.push(
      <div className="skill-item" key={skills.name}>
        <Icon size={28} />
        <span>{skills.name}</span>
      </div>
    );
  }

  return (
    <div className="skill-category">
      <div className="skill-content">
        <div className="title-1">Front end</div>
        <div className="title-2">Development</div>
        <div className="skill-list">{element}</div>
      </div>
    </div>
  );
}

function RenderSkillInterface() {
  let element = [];

  const skill_interface = [
    {
      name: "GSAP",
      icon: Sparkles,
    },
    {
      name: "Swiper",
      icon: Layers3,
    },
    {
      name: "Tailwind CSS",
      icon: Palette,
    },
    {
      name: "Bootstrap",
      icon: Palette,
    },
    {
      name: "Ant Design",
      icon: Layers3,
    },
    {
      name: "Responsive Design",
      icon: Code2,
    },
  ];

  for (const skills of skill_interface) {
    const Icon = skills.icon;

    element.push(
      <div className="skill-item" key={skills.name}>
        <Icon size={28} />
        <span>{skills.name}</span>
      </div>
    );
  }

  return (
    <div className="skill-category">
      <div className="skill-content">
        <div className="title-1">Interface &</div>
        <div className="title-2">Animation</div>
        <div className="skill-list">{element}</div>
      </div>
    </div>
  );
}

function RenderSkillBackEnd() {
  let element = [];

  const skill_backend = [
    {
      name: "Laravel",
      icon: Server,
    },
    {
      name: "PHP",
      icon: FileCode2,
    },
    {
      name: "Node.js",
      icon: Server,
    },
    {
      name: "Express.js",
      icon: Server,
    },
    {
      name: "REST API",
      icon: Braces,
    },
  ];

  for (const skills of skill_backend) {
    const Icon = skills.icon;

    element.push(
      <div className="skill-item" key={skills.name}>
        <Icon size={28} />
        <span>{skills.name}</span>
      </div>
    );
  }

  return (
    <div className="skill-category">
      <div className="skill-content">
        <div className="title-1">Backend</div>
        <div className="title-2">Development</div>
        <div className="skill-list">{element}</div>
      </div>
    </div>
  );
}

function RenderSkillDatabase() {
  let element = [];

  const skill_database = [
    {
      name: "MySQL",
      icon: Database,
    },
    {
      name: "PostgreSQL",
      icon: Database,
    },
  ];

  for (const skills of skill_database) {
    const Icon = skills.icon;

    element.push(
      <div className="skill-item" key={skills.name}>
        <Icon size={28} />
        <span>{skills.name}</span>
      </div>
    );
  }

  return (
    <div className="skill-category">
      <div className="skill-content">
        <div className="title-1">Database</div>
        <div className="skill-list">{element}</div>
      </div>
    </div>
  );
}

function RenderSkillDevops() {
  let element = [];

  const skill_devops = [
    {
      name: "Git",
      icon: GitBranch,
    },
    {
      name: "GitHub",
      icon: Github,
    },
    {
      name: "Jenkins",
      icon: Terminal,
    },
    {
      name: "Docker",
      icon: Container,
    },
    {
      name: "Linux",
      icon: Terminal,
    },
    {
      name: "Apache",
      icon: Server,
    },
  ];

  for (const skills of skill_devops) {
    const Icon = skills.icon;

    element.push(
      <div className="skill-item" key={skills.name}>
        <Icon size={28} />
        <span>{skills.name}</span>
      </div>
    );
  }

  return (
    <div className="skill-category">
      <div className="skill-content">
        <div className="title-1">DEVOPS &</div>
        <div className="title-2">TOOLS</div>
        <div className="skill-list">{element}</div>
      </div>
    </div>
  );
}

function initMobileAnimation() {
  const scrollTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: ".skills",
      start: "top top",
      end: "+=3000",
      pin: true,
      scrub: 1,
    },
  });

  gsap.set(".skills-frontEnd", {
    position: "absolute",
    right: "-100%",
  });

  scrollTrigger.to(
    ".skills-frontEnd",
    {
      right: 0,
      duration: 0.7,
    },
    "+=0.5"
  );

  scrollTrigger.to(".skills-frontEnd", {
    top: "-330%",
    duration: 1.5,
    ease: "none",
  });
}

function initDesktopAnimation() {}

export default function SkillComponent() {
  const device = useDevice();
  const root_skills = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (device === "mb") {
        initMobileAnimation();
      }

      if (device === "pc") {
        initDesktopAnimation();
      }
    }, root_skills);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root_skills}>
      <section className="skills section" id="skills">
        <div className="wrapper-container">
          {/* =====================
              MOBILE
          ===================== */}

          {device == "mb" && (
            <div className="content-mb">
              <div className="center-container">
                <div className="skills-header">
                  <div className="title-wraper">
                    <div className="title-1">Techno</div>
                    <div className="title-2">logies</div>
                    <div className="title-3">I use</div>
                    <div className="title-4">To build ━</div>
                    <div className="title-5">For the web</div>
                  </div>

                  <p>
                    A collection of technologies and tools I have worked with
                    throughout web development projects.
                  </p>
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
              </div>

              <div className="skills-frontEnd">
                <div className="center-category">
                  {RenderSkillFrontEnd()}
                  {RenderSkillInterface()}
                  {RenderSkillBackEnd()}
                  {RenderSkillDatabase()}
                  {RenderSkillDevops()}
                </div>
              </div>
            </div>
          )}

          {/* =====================
              DEKSTOP
          ===================== */}

          {device == "pc" && (
            <div className="content-pc">
              <div className="center-container">
                <div className="skills-header">
                  <div className="title-wraper">
                    <div className="title-1">Technologies</div>
                    <div className="title-2">I use</div>
                    <div className="title-3">To build ━</div>
                    <div className="title-4">For the web</div>
                  </div>

                  <p>
                    A collection of technologies and tools I have worked with
                    throughout web development projects.
                  </p>
                </div>

                <div className="skills-modern">
                  {RenderSkillFrontEnd()}
                  {RenderSkillInterface()}
                  {RenderSkillBackEnd()}
                  {RenderSkillDatabase()}
                  {RenderSkillDevops()}
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
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
