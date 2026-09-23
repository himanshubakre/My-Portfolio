import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaBars, FaXmark } from "react-icons/fa6";
import { SOCIALS } from "./config";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav className="navbar">
      <a href="#top" className="logo">Himanshu Bakre</a>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          </li>
        ))}
        <li className="nav-socials">
          <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={SOCIALS.x} target="_blank" rel="noreferrer" aria-label="X (Twitter)"><FaXTwitter /></a>
          <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </li>
      </ul>

      <button
        className="hamburger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <FaXmark /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
