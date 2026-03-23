import { useEffect, useState, useCallback } from "react";

import slide1 from "../assets/home/slide1.png";
import slide2 from "../assets/home/slide2.png";
import slide3 from "../assets/home/slide 3.png";
import slide4 from "../assets/home/slide 4.png";
import slide5 from "../assets/home/slide 5.png";

const SLIDES = [slide1, slide2, slide3, slide4, slide5];
const INTERVAL = 4500;

function Home() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % SLIDES.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + SLIDES.length) % SLIDES.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 5rem)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slides ── */}
      {SLIDES.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >

          <img
            src={img}
            alt="IEEE WIE Event"
            className="w-full h-full object-contain object-center select-none"
          />

          {/* Multi-stop gradient overlay — richer depth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(1,2,46,0.85) 0%, rgba(10,16,69,0.55) 50%, rgba(13,10,46,0.30) 100%)",
            }}
          />
        </div>
      ))}

      {/* ── Hero Text ── */}
      <div
        className="relative flex flex-col items-center justify-center h-full text-center px-6"
        style={{ zIndex: 10 }}
      >
        <h1
          className="text-white font-display font-extrabold tracking-[0.15em] mb-4 select-none animate-slideUp"
          style={{
            fontSize: "clamp(4rem, 12vw, 9rem)",
            textShadow:
              "0 0 40px rgba(124,58,237,0.8), 0 0 80px rgba(124,58,237,0.4), 0 4px 8px rgba(0,0,0,0.6)",
            lineHeight: 1,
          }}
        >
          WIE
        </h1>

        <p
          className="text-white/85 font-medium tracking-widest uppercase animate-slideUp"
          style={{
            fontSize: "clamp(0.85rem, 2.5vw, 1.25rem)",
            animationDelay: "0.2s",
            animationFillMode: "both",
            letterSpacing: "0.2em",
          }}
        >
          IEEE Women in Engineering – BMSIT&amp;M
        </p>

        {/* Decorative divider */}
        <div
          className="mt-8 mb-0 h-px w-32 rounded-full opacity-60"
          style={{
            background: "linear-gradient(90deg, transparent, #a78bfa, transparent)",
            animationDelay: "0.4s",
          }}
        />
      </div>

      {/* ── Prev / Next chevrons ── */}
      {[
        { onClick: prev, side: "left", symbol: "‹" },
        { onClick: next, side: "right", symbol: "›" },
      ].map(({ onClick, side, symbol }) => (
        <button
          key={side}
          onClick={onClick}
          className={`absolute top-1/2 -translate-y-1/2 ${side}-5 z-20
            w-10 h-10 flex items-center justify-center rounded-full
            text-white/60 hover:text-white text-2xl
            border border-white/10 hover:border-purple-400/50
            transition-all duration-200 hover:bg-white/10`}
          style={{ backdropFilter: "blur(8px)" }}
          aria-label={side === "left" ? "Previous" : "Next"}
        >
          {symbol}
        </button>
      ))}

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current
                ? "w-6 h-2 bg-purple-400"
                : "w-2 h-2 bg-white/30 hover:bg-white/55"
              }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;