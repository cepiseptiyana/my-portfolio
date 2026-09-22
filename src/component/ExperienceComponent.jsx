import { useEffect, useRef } from "react";
import "../styles/experience_component.sass";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useDevice from "../hooks/useDevice";

gsap.registerPlugin(ScrollTrigger);

function initMobileAnimation() {
  const scrollTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: "",
    },
  });
}

function initDekstopAnimation() {
  const scrollTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: "",
    },
  });
}

function RenderExperienceContent() {
  const element_experience_list = [];
  const element_experience_points = [];
  const element_experience_tech = [];

  const data = [
    {
      periode: "4 MONTHS",
      status: "FRONT-END ENGINEER - PT SUMMIT GLOBAL TECHNOLOGY",
      title: "Junior Front-End Engineer",
      experience_description: `Worked on developing and maintaining web application interfaces, focusing on responsive layouts, 
        component implementation, and improving existing frontend code.`,
      experience_points: [
        "Developed and improved responsive user interfaces using modern frontend technologies.",
        "Continued and refactored existing codebases after previous developers left the project.",
        "Worked on dashboard and landing page development based",
        "Collaborated with the team and adapted to existing project structures and workflows.",
      ],
      experience_tech: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.Js",
        "VueJs",
        "CSS",
        "SASS",
        "Ant Design",
        "Slicing Design To Code",
        "Responsive CSS",
        "REST API",
        "Echarts",
        "Git",
        "Github",
      ],
    },
  ];

  // EXPERIENCE POINTS
  for (const getData of data) {
    for (const [
      index,
      getExperiencePoints,
    ] of getData.experience_points.entries()) {
      element_experience_points.push(
        <div key={index}>
          <span>#{index + 1}</span>
          <p>{getExperiencePoints}</p>
        </div>
      );
    }
  }

  // EXPERIENCE TECH
  for (const getData of data) {
    for (const [
      index,
      getDataExperienceTech,
    ] of getData.experience_tech.entries()) {
      element_experience_tech.push(
        <span key={index}>{getDataExperienceTech}</span>
      );
    }
  }

  // EXPERIENCE LIST
  for (const [index, getData] of data.entries()) {
    element_experience_list.push(
      <article className="experience-card" key={index}>
        <div className="experience-meta">
          <span className="experience-number">0{index + 1}</span>
          <span className="experience-period">{getData.periode}</span>
        </div>

        <div className="experience-content">
          <span className="experience-role-label">{getData.status}</span>

          <h3>{getData.title}</h3>

          <p className="experience-description">
            {getData.experience_description}
          </p>

          <div className="experience-points">{element_experience_points}</div>

          <div className="experience-tech">{element_experience_tech}</div>
        </div>
      </article>
    );
  }

  return element_experience_list;
}

export default function ExperienceComponent() {
  const root_experience = useRef(null);
  const device = useDevice();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (device === "mb") {
        initMobileAnimation();
      }

      if (device === "pc") {
        initDekstopAnimation();
      }
    }, root_experience);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root_experience}>
      <section className="experience section" id="experience">
        <div className="wrapper-container">
          <div className="experience-top">
            <p className="experience-intro">
              Practical experience working as a Front-End Engineer, developing
              interfaces, maintaining existing codebases, and collaborating on
              web application projects.
            </p>
          </div>

          <div className="experience-main">
            <div className="experience-title">
              <h2>
                Where I gained
                <br />
                <i>real-world experience.</i>
              </h2>
            </div>

            <div className="experience-list">{RenderExperienceContent()}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
