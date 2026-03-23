import { useEffect } from "react";

/* ── Scroll reveal ─────────────────────────── */
function useReveal(sel) {
  useEffect(() => {
    const els = document.querySelectorAll(sel);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sel]);
}

/* ── Social Link Card ──────────────────────── */
function SocialLink({ href, label, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card flex items-center justify-between px-6 py-4 group"
      style={{ transition: "transform 0.2s ease, box-shadow 0.3s ease, border-color 0.3s ease" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <span className="font-medium text-white group-hover:text-purple-300 transition-colors">{label}</span>
      <span className="text-white/40 group-hover:text-purple-400 transition-colors text-lg">↗</span>
    </a>
  );
}

function Contact() {
  useReveal(".contact-sr");

  return (
    <section className="pt-8 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="contact-sr section-reveal text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-white glow-text mb-3">
            Contact Us
          </h2>
          <p className="text-purple-300 font-medium">
            IEEE Women in Engineering – BMSIT&amp;M
          </p>
          <p className="text-white/55 mt-4 leading-relaxed text-sm">
            Let's connect, collaborate, and build a stronger tech community together.
          </p>
        </div>

        {/* Main layout */}
        <div className="contact-sr section-reveal grid md:grid-cols-2 gap-10 items-start" style={{ transitionDelay: "0.1s" }}>

          {/* Left — Email & Location */}
          <div className="glass-card p-8 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Email</p>
              <a
                href="mailto:ieee.wie@bmsit.in"
                className="text-lg font-semibold text-white hover:text-purple-400 transition-colors"
              >
                ieee.wie@bmsit.in
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Location</p>
              <p className="text-lg font-semibold text-white">Bengaluru, Karnataka</p>
            </div>
          </div>

          {/* Right — Social links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-5">Connect</p>
            <div className="space-y-3">
              <SocialLink href="https://www.instagram.com/ieeewie.bmsit/" label="Instagram" />
              <SocialLink href="https://www.linkedin.com/in/ieee-wie-15217935b/" label="LinkedIn" />
              <SocialLink href="#" label="InfoBoard" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;