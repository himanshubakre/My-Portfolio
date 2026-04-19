import { useState } from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo glow">Himanshu Bakre</h2>

      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#timeline">Journey(Educational & Professional)</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#patent">Patents</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
