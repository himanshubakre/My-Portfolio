const SKILLS = [
  { title: "Frontend", items: ["React.js", "HTML", "CSS", "JavaScript"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Database", items: ["MongoDB", "SQL"] },
  { title: "Languages", items: ["Java", "C++", "JavaScript"] },
  { title: "Tools / Platforms", items: ["Git", "Linux", "Shell", "Raspberry Pi"] },
  { title: "Concepts", items: ["OOP", "DSA", "DBMS", "Agile"] },
];

function Skills() {
  return (
    <section id="skills">
      <span className="section-label">Skills</span>
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-grid">
        {SKILLS.map((category) => (
          <div className="card skill-card" key={category.title}>
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.items.map((skill) => (
                <span className="skill-chip" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
