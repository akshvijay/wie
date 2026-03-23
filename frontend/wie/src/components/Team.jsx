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
import kushadhi from "../assets/team/kushadhi.jpeg";
import poorvi   from "../assets/team/poorvi.jpeg";
import sparsha  from "../assets/team/sparsha.jpeg";
import swati    from "../assets/team/swati.jpeg";
import pranjal  from "../assets/team/pranjal.jpeg";
import sanjana  from "../assets/team/sanjana.jpeg"; // ✅ added

// Faculty
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
      el.style.transform = `perspective(700px) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg)`;
    };

    const leave = () => {
      el.style.transform = "perspective(700px) rotateY(0) rotateX(0)";
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
    <div ref={ref} className="p-6 text-center">
      <img
        src={member.img}
        alt={member.name}
        className="w-44 h-52 object-cover mx-auto mb-4 rounded-xl"
      />
      <p className="text-xs italic text-white/50 mb-2">
        "{member.punch}"
      </p>
      <h3 className="text-white font-semibold">{member.name}</h3>
      <p className="text-white/60 text-sm">{member.role}</p>
    </div>
  );
}

/* Main */
function Team() {

  const excom = [
    { name: "Mimansha Mishra", role: "Chairperson", img: mimansha, punch: "Driving vision and leadership." },
    { name: "Aditya Singh", role: "Vice Chairperson", img: aditya, punch: "Collaboration and execution." },
    { name: "Ansh Rastogi", role: "Secretary", img: ansh, punch: "Coordination and clarity." },

    // ✅ UPDATED TREASURER
    { name: "Rohit M H", role: "Treasurer", img: rohit, punch: "Managing resources with transparency." },

    { name: "Adarsh Singh", role: "Technical Head", img: adarsh, punch: "Leading innovation." },
    { name: "Akshita", role: "Technical Co-Head", img: akshita, punch: "Reliable systems." },
    { name: "Sushma", role: "Marketing Head", img: sushma, punch: "Strategic communication." },
    { name: "Priya T S", role: "Events Head", img: priya, punch: "Engaging experiences." },
  ];

  const team = [
    { name: "Hasini", role: "Technical Associate", img: hasini, punch: "Development support." },
    { name: "Kushadhi J", role: "Media Associate", img: kushadhi, punch: "Visual storytelling." },
    { name: "Poorvi", role: "Events Associate", img: poorvi, punch: "Event execution." },
    { name: "Sparsha S", role: "Events Associate", img: sparsha, punch: "Logistics handling." },
    { name: "Swati Garg", role: "Marketing Associate", img: swati, punch: "Creative campaigns." },
    { name: "Pranjal", role: "Design Associate", img: pranjal, punch: "Clean visuals." },

    // ✅ NEW SANJANA
    { name: "Sanjana", role: "Design Associate", img: sanjana, punch: "Creative design and visuals." },
  ];

  const faculty = [
    { name: "Asha G.H", role: "Faculty Adviser", img: ashaGH, punch: "Guiding direction and mentorship." },
    { name: "Asha K", role: "Faculty Adviser", img: ashaK, punch: "Academic leadership and support." },
  ];

  return (
    <div className="p-10">

      <h2 className="text-white text-2xl mb-6">ExCom</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {excom.map((m) => <MemberCard key={m.name} member={m} />)}
      </div>

      <h2 className="text-white text-2xl mt-12 mb-6">Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((m) => <MemberCard key={m.name} member={m} />)}
      </div>

      <h2 className="text-white text-2xl mt-12 mb-6">Faculty</h2>
      <div className="grid grid-cols-2 gap-6">
        {faculty.map((m) => <MemberCard key={m.name} member={m} />)}
      </div>

    </div>
  );
}

export default Team;