import { motion } from "framer-motion";

function Timeline() {
  return (
    <section id="timeline">
      <h2 className="glow">Journey</h2>

      <div className="timeline">
        <motion.div
          className="glass"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
        >
          <h3>Education</h3>
          <p>B.Tech - YCCE</p>
        </motion.div>

        <motion.div
          className="glass"
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
        >
          <h3>TCS</h3>
          <p>Assistant System Engineer</p>
        </motion.div>
      </div>
    </section>
  );
}
export default Timeline;
