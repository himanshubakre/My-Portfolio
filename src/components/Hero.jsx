import { Typewriter } from "react-simple-typewriter";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiFigma,
} from "react-icons/si";

import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      {/* Floating Icons */}
      <FaReact className="icon react" />
      <FaNodeJs className="icon node" />
      <SiMongodb className="icon mongo" />
      <FaDocker className="icon docker" />
      <SiExpress className="icon express" />
      <SiPostgresql className="icon postgres" />
      <SiFirebase className="icon firebase" />
      <SiRedis className="icon redis" />
      <SiNextdotjs className="icon nextjs" />
      <SiTypescript className="icon typescript" />
      <SiTailwindcss className="icon tailwind" />
      <SiJavascript className="icon javascript" />
      <SiRedux className="icon redux" />
      <FaGithub className="icon github" />
      <FaGitAlt className="icon git" />
      <FaAws className="icon aws" />
      <SiFigma className="icon figma" />

      <img src={profile} alt="profile" className="profile-img" />

      <h1 className="glow">Himanshu Bakre</h1>

      <h2>
        <Typewriter
          words={["MERN Stack Developer", "Backend Engineer", "Problem Solver"]}
          loop
          cursor
        />
      </h2>

      <div className="hero-buttons">
        <a href="#contact" className="btn">
          Hire Me
        </a>
        <a href="/resume.pdf" className="btn">
          Download Resume
        </a>
      </div>

      <div className="scroll-down">↓</div>
    </section>
  );
}

export default Hero;
