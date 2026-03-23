import { useEffect, useState, useRef } from "react";

// IH – Idea Heist
import ih1 from "../assets/events/ih/ih1.jpeg";
import ih2 from "../assets/events/ih/ih2.jpeg";
import ih3 from "../assets/events/ih/ih3.jpeg";
import ih4 from "../assets/events/ih/ih4.jpeg";

// STEM
import s1 from "../assets/events/stem/s1.jpeg";
import s2 from "../assets/events/stem/s2.jpeg";
import s3 from "../assets/events/stem/s3.jpeg";
import s4 from "../assets/events/stem/s4.jpeg";
import s5 from "../assets/events/stem/s5.jpeg";

// SMILE
import sm1 from "../assets/events/smile/sm1.jpeg";
import sm2 from "../assets/events/smile/sm2.jpeg";
import sm3 from "../assets/events/smile/sm3.jpeg";
import sm4 from "../assets/events/smile/sm4.jpeg";

// Donation Drive
import d1 from "../assets/events/don/d1.jpeg";
import d2 from "../assets/events/don/d2.jpeg";
import d3 from "../assets/events/don/d3.jpeg";
import d4 from "../assets/events/don/d4.jpeg";

/* ── Polished Image Slider ─────────────────── */
function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % images.length), 2800);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.6)] border border-white/10 group">
      {/* Aspect ratio wrapper */}
      <div className="relative w-full" style={{ paddingBottom: "66.66%" }}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}
        {/* subtle vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 60%, rgba(1,2,46,0.4) 100%)",
          }}
        />
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === index ? "w-5 h-1.5 bg-purple-400" : "w-1.5 h-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Scroll Reveal for sections ────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".ev-sr");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── Event Section ─────────────────────────── */
function EventSection({ title, subtitle, desc, images, reverse }) {
  return (
    <section className="ev-sr section-reveal py-20">
      <div
        className={`max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}
      >
        {reverse ? (
          <>
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 text-white">
                {title}
              </h2>
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-6">
                {subtitle}
              </p>
              <p className="text-white/75 leading-relaxed text-base">{desc}</p>
            </div>
            <ImageSlider images={images} />
          </>
        ) : (
          <>
            <ImageSlider images={images} />
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 text-white">
                {title}
              </h2>
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-6">
                {subtitle}
              </p>
              <p className="text-white/75 leading-relaxed text-base">{desc}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/* ── Events Page ───────────────────────────── */
function Events() {
  useReveal();

  return (
    <div>
      {/* Page Header */}
      <div className="text-center pt-16 pb-10 px-6">
        <h1 className="text-5xl font-display font-bold text-white glow-text mb-4">
          Our Events
        </h1>
        <p className="text-white/60 max-w-3xl mx-auto text-base">
          Each initiative reflects our commitment to innovation, inclusion, and impact.
        </p>
      </div>

      {/* Divider */}
      <hr className="wie-divider max-w-4xl mx-auto" />

      <EventSection
        title="I.D.E.A Heist 💰"
        subtitle="Innovation • Debugging • Strategy"
        desc="Not just a tech event—but a sabotage-surviving mission. Participants cracked bugs in The Grid Escape, raced through quizzes on The Innovation Trail, and battled it out in Pitch or Perish using wild brainstorming and sabotage cards. It was aptitude, action, and debugging combined—you either crack the game or get locked out."
        images={[ih1, ih2, ih3, ih4]}
      />

      <hr className="wie-divider max-w-4xl mx-auto" />

      <EventSection
        title="Project STEMSetGo! 🌱"
        subtitle="Empowering young minds through STEM & IoT"
        desc="Bringing innovation to classrooms that need it most. Project STEMSetGo! is an IoT and STEM outreach initiative by IEEE WIE BMSIT&M in collaboration with Rotary Club of Bangalore West. Through hands-on learning at Sai Shankara Vidya Shala, students explored technology beyond textbooks—learning by doing, experimenting, and imagining."
        images={[s1, s2, s3, s4, s5]}
        reverse
      />

      <hr className="wie-divider max-w-4xl mx-auto" />

      <EventSection
        title="SMILE Project 😊"
        subtitle="AI • Empathy • Human Connection"
        desc="At Kalarava, technology met joy. The SMILE Project used an AI-powered face recognition model that detects smiles in real time and automatically clicks your picture the moment you grin. A simple smile became data, memory, and connection—showing how AI can amplify human emotion, not replace it."
        images={[sm1, sm2, sm3, sm4]}
      />

      <hr className="wie-divider max-w-4xl mx-auto" />

      <EventSection
        title="Wings of Hope 🕊️💛"
        subtitle="Compassion • Care • Community"
        desc="An effort to give every child the chance to fly. What started as a donation drive became a moment of shared purpose. Wings of Hope wasn't just about giving—it was about standing together, believing in hope, and creating impact that lasts beyond the event."
        images={[d1, d2, d3, d4]}
        reverse
      />
    </div>
  );
}

export default Events;
