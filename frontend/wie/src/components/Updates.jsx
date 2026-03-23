import { useEffect } from "react";

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

function Updates() {
  useReveal(".upd-sr");

  const upcomingEvents = [
    "Code Eleven",
    "Faculty Workshop",
    "Game Craft",
    "Elicit",
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="upd-sr section-reveal text-center mb-14">
          <h2 className="text-4xl font-display font-bold text-white glow-text mb-3">
            Updates
          </h2>
          <p className="text-white/55 text-sm">
            Announcements, upcoming events, and official notices from IEEE WIE BMSIT&amp;M
          </p>
        </div>

        {/* Upcoming Events Card */}
        <div
          className="upd-sr section-reveal glass-card p-8"
          style={{ transitionDelay: "0.1s" }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(0,98,155,0.4))",
              border: "1px solid rgba(124,58,237,0.4)",
              color: "#c4b5fd",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-purple-400"
              style={{ boxShadow: "0 0 6px rgba(167,139,250,0.8)" }}
            />
            Upcoming Events
          </div>

          <h3 className="text-2xl font-semibold text-white mb-6">
            What's Coming Up
          </h3>

          <ul className="space-y-3">
            {upcomingEvents.map((event, i) => (
              <li
                key={i}
                className="flex items-center gap-4 px-5 py-3.5 rounded-xl text-white/85 font-medium text-sm"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  borderLeft: "3px solid rgba(124,58,237,0.7)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "rgba(167,139,250,0.9)", boxShadow: "0 0 6px rgba(167,139,250,0.6)" }}
                />
                {event}
              </li>
            ))}
          </ul>

          <p className="text-xs text-white/35 mt-8">
            Event dates and registration details will be announced soon.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Updates;
