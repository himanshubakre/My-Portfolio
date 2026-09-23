import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { EMAIL, SOCIALS, WHATSAPP_NUMBER } from "./config";

function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend is connected yet — this opens the user's email client instead.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "website"}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact">
      <span className="section-label">Contact</span>
      <h2 className="section-title">Let's Talk</h2>

      <div className="contact-wrap">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required value={form.message} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
          <p className="form-note">Opens your email app — there's no backend wired up yet.</p>
        </form>

        <div className="contact-links">
          <a href={`mailto:${EMAIL}`}><FaEnvelope /> {EMAIL}</a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp</a>
          <a href={SOCIALS.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
