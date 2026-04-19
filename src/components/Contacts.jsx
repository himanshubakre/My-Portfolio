import React from "react";

function Contacts() {
  return (
    <section id="contact">
      <h2 className="glow">Contact Me</h2>

      <form className="contact-form glass">
        <div className="input-group">
          <input type="text" required />
          <label>Name</label>
        </div>

        <div className="input-group">
          <input type="email" required />
          <label>Email</label>
        </div>

        <div className="input-group">
          <textarea rows="4" required></textarea>
          <label>Message</label>
        </div>

        <button className="btn">Send Message</button>
      </form>

      {/* Optional Social Links */}
      <div className="contact-box">
        <a href="mailto:himanshubakre572@gmail.com">📧 Email</a>
        <a href="https://github.com/himanshubakre" target="_blank">
          💻 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/himanshu-bakre-45b272252/"
          target="_blank"
        >
          🔗 LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contacts;
