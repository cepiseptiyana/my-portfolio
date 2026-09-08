import { ExternalLink } from "lucide-react";

export default function ProjectComponent() {
  const projects = [
    {
      number: "01",
      title: "Job Career",
      type: "Web Application · Laravel",
      color: "orange",
      desc: "Full-featured job portal connecting candidates with opportunities through a practical recruitment workflow.",
      tags: ["Laravel", "MySQL", "Blade"],
      github: "https://github.com/cepiseptiyana/job_career",
      image: `${import.meta.env.BASE_URL}images/job_career.webp`,
    },
    {
      number: "02",
      title: "Creative Portfolio",
      type: "Interactive · React",
      color: "blue",
      desc: "Motion-first portfolio experience focused on storytelling, performance and memorable interactions.",
      tags: ["React", "GSAP", "Swiper"],
      github: "https://github.com/cepiseptiyana/my-portfolio",
      image: `${import.meta.env.BASE_URL}images/portfolio.png`,
    },
  ];

  return (
    <section className="work section" id="work">
      <div className="section-head reveal">
        <div className="section-label">( 02 — SELECTED WORK )</div>
        <p>
          A selection of projects built with curiosity, detail and modern web
          technologies.
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
  );
}
