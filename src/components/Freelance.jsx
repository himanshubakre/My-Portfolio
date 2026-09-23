import { WHATSAPP_NUMBER } from "./config";

const SERVICES = [
  "Mobile-friendly business websites",
  "WhatsApp-integrated websites",
  "Google Maps / contact integration",
  "Simple, modern sites for local businesses",
];

function Freelance() {
  return (
    <section id="freelance">
      <div className="freelance">
        <h2>Need a Website for Your Business?</h2>
        <p>
          Alongside my day-to-day development work, I build practical,
          fast-loading websites for local businesses — designed to look good
          and actually bring in customers.
        </p>
        <div className="freelance-list">
          {SERVICES.map((s) => <div key={s}>{s}</div>)}
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Let's Build Your Website
        </a>
      </div>
    </section>
  );
}
export default Freelance;
