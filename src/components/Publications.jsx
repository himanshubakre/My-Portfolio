const ITEMS = [
  {
    title: "Research Paper — IEEE",
    meta: "Published 2024",
    href: "https://ieeexplore.ieee.org/document/10696348",
  },
  {
    title: "Patent Filed",
    meta: "2026",
    href: "https://ycce.edu/wp-content/uploads/2026/01/68.-202421090402.pdf",
  },
];

function Publications() {
  return (
    <section id="publications">
      <span className="section-label">Publications</span>
      <h2 className="section-title">Patents &amp; Publications</h2>

      <div className="projects-grid">
        {ITEMS.map((item) => (
          <div className="card project-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.meta}</p>
            <div className="project-links">
              <a href={item.href} target="_blank" rel="noreferrer" className="btn btn-outline">View</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Publications;
