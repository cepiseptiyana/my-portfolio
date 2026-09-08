import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export default function PlaygroundComponent() {
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
    <section className="showcase section reveal">
      <div className="section-label">( PLAYGROUND )</div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          900: { slidesPerView: 2 },
        }}
      >
        {projects.map((p) => (
          <SwiperSlide key={p.number}>
            <div className={"slide-card"}>
              <img src={p.image} alt={p.title} className="slide-image" />

              <div className="slide-overlay"></div>

              <span>{p.number}</span>

              <h3>{p.title}</h3>

              <p>{p.type}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
