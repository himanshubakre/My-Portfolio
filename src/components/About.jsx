function About() {
  return (
    <section id="about">
      <span className="section-label">About</span>
      <h2 className="section-title">Who I Am</h2>

      <div className="about-grid">
        <p className="about-text">
          I'm a dedicated Full Stack Developer with hands-on experience
          building modern web applications using the MERN stack, alongside a
          strong foundation in Data Structures, Algorithms, and backend
          systems. I currently work in a production environment where I solve
          real-world problems and keep sharpening my technical skills. Outside
          of my day job, I take on freelance web development for local
          businesses, building fast, mobile-friendly sites end to end.
        </p>
        <div className="about-stats">
          <div className="card">
            <h3>1+</h3>
            <p>Years Experience</p>
          </div>
          <div className="card">
            <h3>2</h3>
            <p>Projects Built</p>
          </div>
          <div className="card">
            <h3>2</h3>
            <p>Patents / Publications</p>
          </div>
          <div className="card">
            <h3>MERN</h3>
            <p>Core Stack</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
