import React from "react";

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Electronics & Telecommunication Engineering",
      College:
        "Yeshwantrao Chavan College of Engineering (YCCE), Nagpur | 2020 - 2024",
      cgpa: "CGPA: 8.1 / 10",
    },
  ];
  return (
    <section id="Education">
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="timeline">
          <div className="timeline-item">
            <h3>{edu.degree}</h3>
            <p>{edu.branch}</p>
            <p>{edu.College}</p>
            <p>{edu.cgpa}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Education;
