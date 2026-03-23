import { useEffect, useRef } from "react";

/* ── Tilt Hook ─────────────────────────────── */
function useTilt(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `perspective(700px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg) translateZ(4px)`;
    };
    const onLeave = () => {
      el.style.transform =
        "perspective(700px) rotateY(0) rotateX(0) translateZ(0)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref]);
}

/* ── Tilt Card ─────────────────────────────── */
function TiltCard({ children, extraClass = "" }) {
  const ref = useRef(null);
  useTilt(ref);
  return (
    <div
      ref={ref}
      className={`glass-card tilt-card p-10 ${extraClass}`}
      style={{ transition: "transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease" }}
    >
      {children}
    </div>
  );
}

/* ── Scroll Reveal ─────────────────────────── */
function useScrollReveal(selector = ".sr-card") {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [selector]);
}

/* ── About Page ────────────────────────────── */
function About() {
  useScrollReveal(".about-sr");

  const cards = [
    {
      title: "Global Vision",
      body: "IEEE Women in Engineering (WIE) is a global network dedicated to inspiring, engaging, and advancing women in engineering and technology. It provides international exposure, leadership development, and professional growth opportunities.",
    },
    {
      title: "WIE at BMSIT&M",
      body: "The IEEE WIE Affinity Group at BMSIT&M focuses on building confidence, leadership, and technical excellence among women students through workshops, mentorship programs, and collaborative technical initiatives.",
    },
    {
      title: "Our Mission",
      body: "We aim to create a supportive and inclusive environment where women in engineering can thrive, collaborate on real-world projects, and develop the skills needed to lead future technological advancements.",
    },
    {
      title: "Leadership & Mentorship",
      body: "Through expert talks, industry sessions, and peer mentorship, WIE empowers students with confidence, networking skills, and exposure to real industry challenges.",
    },
    {
      title: "Technical Excellence",
      body: "From coding bootcamps to innovation challenges, we encourage members to push boundaries and contribute meaningfully to emerging technologies.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">

      {/* Heading */}
      <h2
        className="relative text-5xl md:text-6xl font-display font-extrabold text-center mb-24
                   text-white glow-text animate-slideUp"
      >
        About IEEE WIE
        <span
          className="absolute left-1/2 -bottom-5 h-[3px] rounded-full -translate-x-1/2 animate-underlineExpand"
          style={{
            width: "0",
            background: "linear-gradient(90deg, #7c3aed, #00629B)",
          }}
        />
      </h2>

      {/* Cards */}
      <div className="space-y-8">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className="about-sr section-reveal"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <TiltCard>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">
                {card.title}
              </h3>
              <p className="text-base leading-relaxed text-white/80">
                {card.body}
              </p>
            </TiltCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;