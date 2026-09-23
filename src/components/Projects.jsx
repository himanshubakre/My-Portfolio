const PROJECTS = [
  {
    name: "VentureVerse",
    desc: "Full-stack MERN project.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    name: "Real Estate App",
    desc: "Full-stack MERN project.",
    tags: ["React", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects">
      <span className="section-label">Projects</span>
      <h2 className="section-title">Things I've Built</h2>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div className="card project-card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
            <div className="project-links">
              <a href={p.github} className="btn btn-outline">GitHub</a>
              <a href={p.live} className="btn btn-primary">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
