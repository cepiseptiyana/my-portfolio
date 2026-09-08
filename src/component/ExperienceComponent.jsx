export default function ExperienceComponent() {
  return (
    <section className="experience section" id="experience">
      <div className="experience-top">
        <div className="section-label reveal">( 03 — EXPERIENCE )</div>

        <p className="experience-intro reveal">
          Practical experience working as a Front-End Engineer, developing
          interfaces, maintaining existing codebases, and collaborating on web
          application projects.
        </p>
      </div>

      <div className="experience-main">
        <div className="experience-title reveal">
          <h2>
            Where I gained
            <br />
            <i>real-world experience.</i>
          </h2>
        </div>

        <div className="experience-list">
          <article className="experience-card reveal">
            <div className="experience-meta">
              <span className="experience-number">01</span>

              <span className="experience-period">4 MONTHS</span>
            </div>

            <div className="experience-content">
              <span className="experience-role-label">FRONT-END ENGINEER</span>

              <h3>Junior Front-End Engineer</h3>

              <p className="experience-description">
                Worked on developing and maintaining web application interfaces,
                focusing on responsive layouts, component implementation, and
                improving existing frontend code.
              </p>

              <div className="experience-points">
                <div>
                  <span>#1</span>
                  <p>
                    Developed and improved responsive user interfaces using
                    modern frontend technologies.
                  </p>
                </div>

                <div>
                  <span>#2</span>
                  <p>
                    Continued and refactored existing codebases after previous
                    developers left the project.
                  </p>
                </div>

                <div>
                  <span>#3</span>
                  <p>
                    Worked on dashboard and landing page development based on
                    project requirements.
                  </p>
                </div>

                <div>
                  <span>#4</span>
                  <p>
                    Collaborated with the team and adapted to existing project
                    structures and workflows.
                  </p>
                </div>
              </div>

              <div className="experience-tech">
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>React.js</span>
                <span>Next.Js</span>
                <span>VueJs</span>
                <span>CSS</span>
                <span>SASS</span>
                <span>Ant Design</span>
                <span>Slicing Design To Code</span>
                <span>Responsive Css</span>
                <span>REST API</span>
                <span>Echarts</span>
                <span>Git</span>
                <span>Github</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
