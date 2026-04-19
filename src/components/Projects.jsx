import React from "react";

import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects">
      <h2 className="glow">Projects</h2>

      <div className="grid">
        {["VentureVerse", "Real Estate App"].map((p, i) => (
          <motion.div
            className="glass"
            whileHover={{ rotateY: 10, scale: 1.05 }}
            key={i}
          >
            <h3>{p}</h3>
            <p>Full stack MERN project</p>

            <a href="#" className="btn">
              GitHub
            </a>
            <a href="#" className="btn">
              Live
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
