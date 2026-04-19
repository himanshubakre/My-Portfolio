import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      title: "Languages",
      items: ["Java", "C++", "JavaScript"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database",
      items: ["SQL", "MongoDB"],
    },
    {
      title: "Frontend",
      items: ["React.js", "HTML", "CSS"],
    },
    {
      title: "Tools",
      items: ["Git", "Linux", "Shell", "Raspberry Pi"],
    },
    {
      title: "Concepts",
      items: ["OOP", "DSA", "DBMS", "Agile"],
    },
  ];

  return (
    <section id="skills">
      <h2 className="glow">Technical Skills</h2>

      <div className="skills-3d-grid">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            className="skill-3d-card"
            whileHover={{ rotateY: 10, rotateX: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>{category.title}</h3>

            <div className="skill-tags">
              {category.items.map((skill, i) => (
                <span key={i} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
