import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <span className="hero-label">Full-Stack Developer</span>
        <h1>Hi, I'm <span>Himanshu Bakre</span></h1>
        <p className="hero-role">MERN Stack Developer &middot; Backend Engineer</p>
        <p className="hero-desc">
          I build modern web experiences and practical digital solutions —
          from production backend systems to clean, fast websites for
          freelance clients.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Let's Connect</a>
          <a href="/Himanshu_Bakre.pdf" className="btn btn-outline" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-photo-wrap">
        <div className="hero-photo-frame">
          <img
            src={profile}
            alt="Himanshu Bakre, full-stack developer"
            width="700"
            height="875"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
