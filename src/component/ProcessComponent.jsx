export default function ProcessComponent() {
  const process = [
    {
      number: "01",
      title: "Discover",
      desc: "Understanding goals, users and the problem before touching the interface.",
    },
    {
      number: "02",
      title: "Design",
      desc: "Turning ideas into a visual direction with hierarchy, rhythm and clarity.",
    },
    {
      number: "02",
      title: "Build",
      desc: "Developing responsive components with performance and maintainability in mind.",
    },
    {
      number: "02",
      title: "Refine",
      desc: "Polishing details, interactions and motion until the experience feels right.",
    },
  ];

  return (
    <section className="process section">
      <div className="section-label reveal">( 03 — PROCESS )</div>
      <div className="process-grid">
        {process.map((data, index) => (
          <div className="process-card reveal" key={index}>
            <span>{data.number}</span>
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
