import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";

export default function ContactComponent({ Wave: ComponentWave }) {
  return (
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
      <ComponentWave className="wave-contact" />
    </section>
  );
}
