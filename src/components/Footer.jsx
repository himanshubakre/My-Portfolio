import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { SOCIALS, WHATSAPP_NUMBER } from "./config";

function Footer() {
  return (
    <footer>
      <div className="footer-socials">
        <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href={SOCIALS.x} target="_blank" rel="noreferrer" aria-label="X (Twitter)"><FaXTwitter /></a>
        <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Himanshu Bakre. Built with React.</p>
    </footer>
  );
}
export default Footer;
