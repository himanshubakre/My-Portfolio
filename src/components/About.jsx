import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="About">
      <h2 className="glow">About Me</h2>
      <div className="glass">
        <p>
          I am a dedicated Full Stack Developer with hands-on experience in
          building modern web applications using the MERN stack. I have a strong
          foundation in Data Structures, Algorithms, and backend systems.
          Currently working in a production environment, I actively solve
          real-world problems and continuously enhance my technical expertise.
        </p>
      </div>
      <div className="grid">
        {["1+ Years", "2 projects", "2 Patents"].map((stat, i) => (
          <motion.div className="glass" key={i} whileHover={{ scale: 1.05 }}>
            <h3 className="glow">{stat}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default About;
