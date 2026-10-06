import { useEffect, useRef } from "react";
import "../styles/footer_component.sass";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import useDevice from "../hooks/useDevice";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

const footerData = {
  email: "cepifams3@gmail.com",
  groups: [
    {
      label: "Navigate",
      links: [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#project" },
      ],
    },
    {
      label: "Elsewhere",
      links: [
        { name: "GitHub", href: "https://github.com/cepiseptiyana" },
        { name: "LinkedIn", href: "www.linkedin.com/in/cepi-septiyana" },
      ],
    },
  ],
};

function splitTitle() {
  const split = new SplitText(".footer-title-2", {
    type: "chars",
    charsClass: "char",
  });

  gsap.set(split.chars, { opacity: 0.05 });
  return split;
}

function handleBackToTop() {
  gsap.to(window, { scrollTo: 0, duration: 1.2, ease: "power3.inOut" });
}

function initMobileAnimation() {
  const split = splitTitle();

  const footerTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "top 75%",
      end: "bottom bottom",
      scrub: 1,
      // markers: true,
    },
  });

  footerTl.fromTo(
    ".footer-title-1",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
  );

  footerTl.to(split.chars, {
    opacity: 1,
    duration: 0.3,
    stagger: { each: 0.04 },
    ease: "none",
  });

  footerTl.fromTo(
    ".footer-email",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  footerTl.fromTo(
    ".footer-group",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "power2.out" }
  );

  footerTl.fromTo(
    ".footer-line",
    { scaleX: 0 },
    { scaleX: 1, duration: 0.6, ease: "none" }
  );

  footerTl.fromTo(
    ".footer-bottom",
    { opacity: 0 },
    { opacity: 1, duration: 0.4, ease: "none" }
  );
}

function initDekstopAnimation() {
  const split = splitTitle();

  const footerTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1,
      invalidateOnRefresh: true,
      // markers: true,
    },
  });

  footerTl.fromTo(
    ".footer-title-1",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  footerTl.to(split.chars, {
    opacity: 1,
    duration: 0.3,
    stagger: { each: 0.05 },
    ease: "none",
  });

  footerTl.fromTo(
    ".footer-email",
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
    "<+0.3"
  );

  footerTl.fromTo(
    ".footer-group",
    { x: 60, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" },
    "<"
  );

  footerTl.fromTo(
    ".footer-line",
    { scaleX: 0 },
    { scaleX: 1, duration: 0.8, ease: "none" }
  );

  footerTl.fromTo(
    ".footer-bottom",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
  );
}

function RenderElement(groups) {
  let element = [];

  for (const group of groups) {
    let links = [];

    for (const link of group.links) {
      links.push(
        <a
          className="footer-link"
          key={link.name}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
        >
          {link.name}
        </a>
      );
    }

    element.push(
      <div className="footer-group" key={group.label}>
        <div className="footer-group-label">{group.label}</div>
        <div className="footer-group-links">{links}</div>
      </div>
    );
  }

  return element;
}

export default function FooterComponent() {
  const root_footer = useRef(null);
  const device = useDevice();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (device === "mb") {
        initMobileAnimation();
      }

      if (device === "pc") {
        initDekstopAnimation();
      }
    }, root_footer);

    return () => ctx.revert();
  }, [device]);

  return (
    <div ref={root_footer}>
      <footer className="footer section" id="footer">
        <div className="wrapper-container">
          {/* =====================
              MOBILE
          ===================== */}
          {device === "mb" && (
            <div className="content-mb">
              <div className="center-container">
                <div className="footer-main">
                  <div className="footer-title">
                    <div className="title-1 footer-title-1">Have an idea?</div>
                    <div className="title-2 footer-title-2">
                      Let's build it.
                    </div>
                  </div>

                  <a
                    className="footer-email"
                    href={`mailto:${footerData.email}`}
                  >
                    {footerData.email}
                  </a>
                </div>

                <div className="footer-groups">
                  {RenderElement(footerData.groups)}
                </div>

                <div className="footer-line" />

                <div className="footer-bottom">
                  <div className="footer-copy">
                    © {new Date().getFullYear()} All rights reserved.
                  </div>
                  <button
                    className="footer-top"
                    type="button"
                    onClick={handleBackToTop}
                  >
                    Back to top
                  </button>
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
                <div className="footer-main">
                  <div className="footer-title">
                    <div className="title-1 footer-title-1">Have an idea?</div>
                    <div className="title-2 footer-title-2">
                      Let's build it.
                    </div>
                  </div>

                  <div className="footer-side">
                    <a
                      className="footer-email"
                      href={`mailto:${footerData.email}`}
                    >
                      {footerData.email}
                    </a>

                    <div className="footer-groups">
                      {RenderElement(footerData.groups)}
                    </div>
                  </div>
                </div>

                <div className="footer-line" />

                <div className="footer-bottom">
                  <div className="footer-copy">
                    © {new Date().getFullYear()} All rights reserved.
                  </div>
                  <button
                    className="footer-top"
                    type="button"
                    onClick={handleBackToTop}
                  >
                    Back to top
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}
