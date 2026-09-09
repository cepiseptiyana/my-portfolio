import { ArrowDownRight } from "lucide-react";

export default function AboutComponent({ Wave: ComponentWave }) {
  return (
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
            I am a Junior Web Developer with experience as a Front-End Engineer,
            focused on developing web applications and responsive user
            interfaces.
          </p>
          <p>
            My technical experience includes working with React, JavaScript,
            CSS, animation libraries, and backend technologies to support the
            development of modern web applications.
          </p>
          <div className="about-actions">
            <a href="#contact" className="inline-link">
              More about me <ArrowDownRight size={17} />
            </a>

            <a
              href={`${
                import.meta.env.BASE_URL
              }cv/Cepi_Septiyana_Junior_Fullstack_Developer.pdf`}
              download="cv_cepi_septiyana.pdf"
              className="resume-btn"
            >
              Download Resume <ArrowDownRight size={17} />
            </a>
          </div>
        </div>
      </div>

      <ComponentWave className="wave-about" />
    </section>
  );
}
