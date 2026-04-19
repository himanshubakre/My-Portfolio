import React from "react";

function Experience() {
  const exp = [
    {
      company: "Tata Consultancy Services(TCS)",
      position: "Assistant System Engineer",
      description:
        "Working on enterprise-level banking applications, ensuring system reliability and performance. Experienced in debugging production issues using SQL and Linux-based log analysis. Optimized complex queries to enhance system efficiency and reduce processing time. Collaborated with cross-functional teams to resolve critical issues and maintain smooth backend operations.",
      year: "Oct 2024 - Present",
    },
  ];
  return (
    <section id="experience">
      <h2 className="section-title">Professional Experience</h2>
      <div className="exp-container">
        {exp.map((item, index) => (
          <div key={index} className="exp-card">
            <div className="exp-header">
              <h3>{item.company}</h3>
              <span>{item.year}</span>
            </div>

            <h4>{item.position}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
