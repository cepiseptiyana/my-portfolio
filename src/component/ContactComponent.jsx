import { useEffect, useRef } from "react";
import "../styles/contact_component.sass";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import useDevice from "../hooks/useDevice";

gsap.registerPlugin(ScrollTrigger, SplitText);

const contactData = {
  email: "cepifams3@gmail.com",
  marquee: "Available for work ✦ Let's talk ✦ ",
  info: [
    { label: "Email", value: "cepifams3@gmail.com", href: "mailto:cepifams3@gmail.com" },
    { label: "Based in", value: "Tangerang, Indonesia", href: "" },
    { label: "Status", value: "Open for freelance & full-time", href: "", live: true },
  ],
  fields: [
    { name: "name", label: "Your name", tag: "input", type: "text" },
    { name: "email", label: "Your email", tag: "input", type: "email" },
    { name: "message", label: "Tell me about your project", tag: "textarea", type: "" },
  ],
};

function splitTitle() {
  const split = new SplitText(".contact-title-2", {
    type: "chars",
    charsClass: "char",
  });

  gsap.set(split.chars, { opacity: 0.05 });
  return split;
}

function initFieldFocus() {
  const fields = gsap.utils.toArray(".contact-field");
  let cleanups = [];

  for (const field of fields) {
    const input = field.querySelector(".contact-input");
    const line = field.querySelector(".contact-field-line");
    const label = field.querySelector(".contact-label");

    const onFocus = () => {
      gsap.to(line, { scaleX: 1, duration: 0.6, ease: "power3.out" });
      label.classList.add("active");
      gsap.to(label, { y: -2, duration: 0.3 });
    };

    const onBlur = () => {
      if (input.value.trim() !== "") return;
      gsap.to(line, { scaleX: 0, duration: 0.5, ease: "power3.inOut" });
      label.classList.remove("active");
      gsap.to(label, { y: 0, duration: 0.3 });
    };

    input.addEventListener("focus", onFocus);
    input.addEventListener("blur", onBlur);

    cleanups.push(() => {
      input.removeEventListener("focus", onFocus);
      input.removeEventListener("blur", onBlur);
    });
  }

  return () => {
    for (const cleanup of cleanups) cleanup();
  };
}

function initMagneticButton() {
  const btn = gsap.utils.toArray(".contact-submit")[0];
  if (!btn) return () => {};

  const moveX = gsap.quickTo(btn, "x", { duration: 0.8, ease: "elastic.out(1, 0.4)" });
  const moveY = gsap.quickTo(btn, "y", { duration: 0.8, ease: "elastic.out(1, 0.4)" });

  const onMove = (e) => {
    const rect = btn.getBoundingClientRect();
    moveX((e.clientX - (rect.left + rect.width / 2)) * 0.35);
    moveY((e.clientY - (rect.top + rect.height / 2)) * 0.35);
  };

  const onLeave = () => {
    moveX(0);
    moveY(0);
  };

  btn.addEventListener("mousemove", onMove);
  btn.addEventListener("mouseleave", onLeave);

  return () => {
    btn.removeEventListener("mousemove", onMove);
    btn.removeEventListener("mouseleave", onLeave);
  };
}

function initLiveDot() {
  gsap.fromTo(
    ".contact-dot-pulse",
    { scale: 1, opacity: 0.6 },
    { scale: 2.6, opacity: 0, duration: 1.4, repeat: -1, ease: "power1.out" }
  );
}

function initMobileAnimation() {
  const split = splitTitle();

  gsap.fromTo(
    ".contact-marquee-track",
    { xPercent: 0 },
    {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".contact",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    }
  );

  const contactTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact",
      start: "top 65%",
      end: "bottom bottom",
      scrub: 1,
      // markers: true,
    },
  });

  contactTl.fromTo(
    ".contact-title-1",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
  );

  contactTl.to(split.chars, {
    opacity: 1,
    duration: 0.3,
    stagger: { each: 0.04 },
    ease: "none",
  });

  contactTl.fromTo(
    ".contact-info-item",
    { clipPath: "inset(0% 0% 100% 0%)", y: 20 },
    { clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: 0.5, stagger: 0.15, ease: "power2.out" }
  );

  contactTl.fromTo(
    ".contact-field",
    { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
    { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" }
  );

  contactTl.fromTo(
    ".contact-submit",
    { scale: 0.6, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" }
  );

  initLiveDot();
  return initFieldFocus();
}

function initDekstopAnimation() {
  const split = splitTitle();

  gsap.set(".contact-submit", { scale: 0.6, opacity: 0 });

  const contactTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact",
      start: "top top",
      end: () => `+=${window.innerHeight * 2.5}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      // markers: true,
    },
  });

  contactTl.fromTo(
    ".contact-title-1",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  contactTl.to(split.chars, {
    opacity: 1,
    duration: 0.3,
    stagger: { each: 0.05 },
    ease: "none",
  });

  contactTl.fromTo(
    ".contact-title-desc",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
    "<+0.3"
  );

  contactTl.fromTo(
    ".contact-info-item",
    { clipPath: "inset(0% 0% 100% 0%)", y: 30 },
    { clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }
  );

  contactTl.fromTo(
    ".contact-field",
    { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
    { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 0.7, stagger: 0.25, ease: "power2.out" },
    "<+0.2"
  );

  contactTl.to(".contact-submit", {
    scale: 1,
    opacity: 1,
    duration: 0.6,
    ease: "back.out(2.5)",
  });

  contactTl.to({}, { duration: 0.8 });

  contactTl.fromTo(
    ".contact-marquee-track",
    { xPercent: 0 },
    { xPercent: -50, ease: "none", duration: contactTl.duration() },
    0
  );

  initLiveDot();

  const cleanFocus = initFieldFocus();
  const cleanMagnet = initMagneticButton();

  return () => {
    cleanFocus();
    cleanMagnet();
  };
}

function RenderElement(fields) {
  let element = [];

  for (const field of fields) {
    const Tag = field.tag;

    element.push(
      <div className="contact-field" key={field.name}>
        <label className="contact-label" htmlFor={`contact-${field.name}`}>
          {field.label}
        </label>
        <Tag
          className="contact-input"
          id={`contact-${field.name}`}
          name={field.name}
          type={field.tag === "input" ? field.type : undefined}
          rows={field.tag === "textarea" ? 3 : undefined}
          autoComplete="off"
          required
        />
        <span className="contact-field-line" />
      </div>
    );
  }

  return element;
}

function RenderInfoElement(info) {
  let element = [];

  for (const item of info) {
    const value = item.href ? (
      <a className="contact-info-value" href={item.href}>
        {item.value}
      </a>
    ) : (
      <div className="contact-info-value">{item.value}</div>
    );

    element.push(
      <div className="contact-info-item" key={item.label}>
        <div className="contact-info-label">
          {item.live && (
            <span className="contact-dot">
              <span className="contact-dot-pulse" />
            </span>
          )}
          {item.label}
        </div>
        {value}
      </div>
    );
  }

  return element;
}

export default function ContactComponent() {
  const root_contact = useRef(null);
  const status = useRef(null);
  const device = useDevice();

  useEffect(() => {
    let cleanup = null;

    const ctx = gsap.context(() => {
      if (device === "mb") {
        cleanup = initMobileAnimation();
      }

      if (device === "pc") {
        cleanup = initDekstopAnimation();
      }
    }, root_contact);

    return () => {
      if (cleanup) cleanup();
      ctx.revert();
    };
  }, [device]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
    );

    gsap.fromTo(
      status.current,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
  };

  const renderForm = () => (
    <form className="contact-form" onSubmit={handleSubmit}>
      {RenderElement(contactData.fields)}

      <div className="contact-action">
        <button className="contact-submit" type="submit">
          Send message
        </button>
        <div className="contact-status" ref={status}>
          Opening your mail app…
        </div>
      </div>
    </form>
  );

  const renderMarquee = () => (
    <div className="contact-marquee" aria-hidden="true">
      <div className="contact-marquee-track">
        <span>{contactData.marquee.repeat(4)}</span>
        <span>{contactData.marquee.repeat(4)}</span>
      </div>
    </div>
  );

  return (
    <div ref={root_contact}>
      <section className="contact section" id="contact">
        {renderMarquee()}

        <div className="wrapper-container">
          {/* =====================
              MOBILE
          ===================== */}
          {device === "mb" && (
            <div className="content-mb">
              <div className="center-container">
                <div className="contact-main">
                  <div className="contact-title">
                    <div className="title-1 contact-title-1">Got a project?</div>
                    <div className="title-2 contact-title-2">Say Hello.</div>
                    <div className="title-desc contact-title-desc">
                      Tell me what you are building and I will get back to you
                      within two days.
                    </div>
                  </div>
                </div>

                <div className="contact-info">
                  {RenderInfoElement(contactData.info)}
                </div>

                {renderForm()}
              </div>
            </div>
          )}

          {/* =====================
              DEKSTOP
          ===================== */}
          {device === "pc" && (
            <div className="content-pc">
              <div className="center-container">
                <div className="contact-main">
                  <div className="contact-left">
                    <div className="contact-title">
                      <div className="title-1 contact-title-1">Got a project?</div>
                      <div className="title-2 contact-title-2">Say Hello.</div>
                      <div className="title-desc contact-title-desc">
                        Tell me what you are building and I will get back to
                        you within two days.
                      </div>
                    </div>

                    <div className="contact-info">
                      {RenderInfoElement(contactData.info)}
                    </div>
                  </div>

                  <div className="contact-right">{renderForm()}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
