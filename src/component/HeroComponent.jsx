import { ArrowDownRight } from "lucide-react";

export default function HeroComponent({ Wave: ComponentWave }) {
  return (
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
            I'm a Junior Web Developer with experience as a Front-End Engineer.
            I focus on building responsive, modern, and interactive web
            applications using React and modern web technologies.
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
      <ComponentWave className="wave-hero" />
    </section>
  );
}
