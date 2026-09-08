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

export default function SkillComponent() {
  return (
    <section className="skills-section section" id="skills">
      <div className="section-label reveal">( 02 — SKILLS )</div>

      <div className="skills-header reveal">
        <h2>
          Technologies I use
          <br />
          <i>to build for the web.</i>
        </h2>

        <p>
          A collection of technologies and tools I have worked with throughout
          web development projects.
        </p>
      </div>

      <div className="skills-modern">
        <div className="skill-category reveal">
          <div className="skill-number">01</div>

          <div className="skill-content">
            <span className="skill-label">FRONTEND</span>

            <h3>Frontend Development</h3>

            <div className="skill-list">
              <div className="skill-item">
                <Code2 size={28} />
                <span>React.js</span>
              </div>

              <div className="skill-item">
                <Layers3 size={28} />
                <span>Next.js</span>
              </div>

              <div className="skill-item">
                <Braces size={28} />
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <FileCode2 size={28} />
                <span>TypeScript</span>
              </div>

              <div className="skill-item">
                <FileCode2 size={28} />
                <span>HTML</span>
              </div>

              <div className="skill-item">
                <Palette size={28} />
                <span>CSS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skill-category reveal">
          <div className="skill-number">02</div>

          <div className="skill-content">
            <span className="skill-label">UI & INTERACTION</span>

            <h3>Interface & Animation</h3>

            <div className="skill-list">
              <div className="skill-item">
                <Sparkles size={28} />
                <span>GSAP</span>
              </div>

              <div className="skill-item">
                <Layers3 size={28} />
                <span>Swiper</span>
              </div>

              <div className="skill-item">
                <Palette size={28} />
                <span>Tailwind CSS</span>
              </div>

              <div className="skill-item">
                <Palette size={28} />
                <span>Bootstrap</span>
              </div>

              <div className="skill-item">
                <Layers3 size={28} />
                <span>Ant Design</span>
              </div>

              <div className="skill-item">
                <Code2 size={28} />
                <span>Responsive Design</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skill-category reveal">
          <div className="skill-number">03</div>

          <div className="skill-content">
            <span className="skill-label">BACKEND</span>

            <h3>Backend Development</h3>

            <div className="skill-list">
              <div className="skill-item">
                <Server size={28} />
                <span>Laravel</span>
              </div>

              <div className="skill-item">
                <FileCode2 size={28} />
                <span>PHP</span>
              </div>

              <div className="skill-item">
                <Server size={28} />
                <span>Node.js</span>
              </div>

              <div className="skill-item">
                <Server size={28} />
                <span>Express.js</span>
              </div>

              <div className="skill-item">
                <Braces size={28} />
                <span>REST API</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skill-category reveal">
          <div className="skill-number">04</div>

          <div className="skill-content">
            <span className="skill-label">DATABASE</span>

            <h3>Database</h3>

            <div className="skill-list">
              <div className="skill-item">
                <Database size={28} />
                <span>MySQL</span>
              </div>

              <div className="skill-item">
                <Database size={28} />
                <span>PostgreSQL</span>
              </div>
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
            <div className="skill-item">
              <GitBranch size={28} />
              <span>Git</span>
            </div>

            <div className="skill-item">
              <Github size={28} />
              <span>GitHub</span>
            </div>

            <div className="skill-item">
              <Terminal size={28} />
              <span>Jenkins</span>
            </div>

            <div className="skill-item">
              <Container size={28} />
              <span>Docker</span>
            </div>

            <div className="skill-item">
              <Terminal size={28} />
              <span>Linux</span>
            </div>

            <div className="skill-item">
              <Server size={28} />
              <span>Apache</span>
            </div>
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
  );
}
