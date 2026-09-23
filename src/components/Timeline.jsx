const ITEMS = [
  {
    when: "2024 — Present",
    title: "TCS",
    role: "Assistant System Engineer",
    desc: "Working in a production environment, solving real-world problems and building backend systems.",
  },
  {
    when: "2020 — 2024",
    title: "B.Tech, YCCE Nagpur",
    role: "Electronics & Telecommunication Engineering · CGPA 8.1/10",
    desc: "Built a foundation in Data Structures, Algorithms, and core engineering concepts.",
  },
];

function Timeline() {
  return (
    <section id="experience">
      <span className="section-label">Experience</span>
      <h2 className="section-title">Journey</h2>

      <div className="timeline">
        {ITEMS.map((item) => (
          <div className="card timeline-item" key={item.title}>
            <div className="when">{item.when}</div>
            <div>
              <h3>{item.title}</h3>
              <p className="role">{item.role}</p>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Timeline;
