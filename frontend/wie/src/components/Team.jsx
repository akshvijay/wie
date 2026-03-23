import { useEffect, useRef } from "react";

// Image imports
import aditya   from "../assets/team/aditya.jpeg";
import mimansha from "../assets/team/mimansha.jpeg";
import ansh     from "../assets/team/ansh.jpeg";
import rohit    from "../assets/team/Rohit M H.jpeg";
import adarsh   from "../assets/team/adarsh.jpeg";
import akshita  from "../assets/team/akshita.jpeg";
import sushma   from "../assets/team/sushma.jpeg";
import priya    from "../assets/team/priya.jpeg";

import hasini   from "../assets/team/hasini.jpeg";
import akanksha from "../assets/team/akanksha.jpeg"; // ✅ added
import kushadhi from "../assets/team/kushadhi.jpeg";
import poorvi   from "../assets/team/poorvi.jpeg";
import sparsha  from "../assets/team/sparsha.jpeg";
import swati    from "../assets/team/swati.jpeg";
import pranjal  from "../assets/team/pranjal.jpeg";
import sanjana  from "../assets/team/sanjana.jpeg";

import ashaGH from "../assets/team/ashaGH.jpeg";
import ashaK  from "../assets/team/ashaK.jpeg";

/* Tilt */
function useTilt(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
      el.style.transform = `perspective(700px) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg) translateZ(6px)`;
    };

    const leave = () => {
      el.style.transform = "perspective(700px) rotateY(0) rotateX(0) translateZ(0)";
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [ref]);
}

/* Card */
function MemberCard({ member }) {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <div
      ref={ref}
      className="tilt-card flex flex-col items-center text-center p-6 cursor-default"
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(210, 180, 140, 0.25)",
        borderRadius: "18px",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.25)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#d2b48c";
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(210, 180, 140, 0.25)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div className="w-44 h-52 overflow-hidden mb-5 rounded-xl">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <p className="text-xs italic mb-3 text-white/50">
        "{member.punch}"
      </p>

      <h3 className="text-[#f5deb3] font-semibold">
        {member.name}
      </h3>

      <p className="text-xs text-white/60">
        {member.role}
      </p>
    </div>
  );
}

/* Heading */
function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-sm text-white/50 max-w-xl mx-auto">{subtitle}</p>
    </div>
  );
}

/* Reveal */
function useReveal(sel) {
  useEffect(() => {
    const els = document.querySelectorAll(sel);
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sel]);
}

/* Main */
function Team() {
  useReveal(".team-sr");

  const excom = [
    { name: "Mimansha Mishra", role: "Chairperson", img: mimansha, punch: "Driving vision, leadership, and strategic growth." },
    { name: "Aditya Singh", role: "Vice Chairperson", img: aditya, punch: "Strengthening leadership through collaboration and execution." },
    { name: "Ansh Rastogi", role: "Secretary", img: ansh, punch: "Ensuring clarity, coordination, and continuity." },
    { name: "Rohit M H", role: "Treasurer", img: rohit, punch: "Managing resources with transparency and responsibility." },
    { name: "Adarsh Singh", role: "Technical Head", img: adarsh, punch: "Leading innovation and technical excellence." },
    { name: "Akshita", role: "Technical Co-Head", img: akshita, punch: "Building reliable systems and technical support." },
    { name: "Sushma", role: "Marketing Head", img: sushma, punch: "Amplifying impact through strategic communication." },
    { name: "Priya T S", role: "Events Head", img: priya, punch: "Designing meaningful and engaging experiences." },
  ];

  const team = [
    { name: "Hasini", role: "Technical Associate", img: hasini, punch: "Supporting development and technical initiatives." },

    // ✅ NEW AKANKSHA
    { name: "Akanksha", role: "Technical Associate", img: akanksha, punch: "Contributing to development and technical solutions." },

    { name: "Kushadhi J", role: "Media Associate", img: kushadhi, punch: "Curating content and visual storytelling." },
    { name: "Poorvi", role: "Events Associate", img: poorvi, punch: "Assisting in planning and execution of events." },
    { name: "Sparsha S", role: "Events Associate", img: sparsha, punch: "Coordinating logistics and participant engagement." },
    { name: "Swati Garg", role: "Marketing Associate", img: swati, punch: "Extending outreach through creative campaigns." },
    { name: "Pranjal", role: "Design Associate", img: pranjal, punch: "Crafting visuals with clarity and purpose." },
    { name: "Sanjana", role: "Design Associate", img: sanjana, punch: "Creative design and visual storytelling." },
  ];

  const faculty = [
    { name: "Asha G.H", role: "Faculty Adviser", img: ashaGH, punch: "Guiding direction, mentorship, and institutional alignment." },
    { name: "Asha K", role: "Faculty Adviser", img: ashaK, punch: "Supporting growth through mentorship and academic leadership." },
  ];

  return (
    <section className="pt-8 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="team-sr mb-20">
          <SectionHeading
            title="WIE ExCom 2026"
            subtitle="Executive committee guiding the vision and operations of IEEE WIE BMSIT&M"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {excom.map((m) => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>

        <hr className="mb-20" />

        <div className="team-sr mb-20">
          <SectionHeading
            title="WIE Team 2026"
            subtitle="Dedicated associates supporting technical, creative, and operational efforts"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((m) => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>

        <hr className="mb-20" />

        <div className="team-sr">
          <SectionHeading
            title="Faculty Advisors"
            subtitle="Mentors guiding IEEE WIE BMSIT&M with experience and academic leadership"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {faculty.map((m) => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Team;