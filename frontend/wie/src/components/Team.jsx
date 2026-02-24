// Image imports (from src/assets/team)
import aditya from "../assets/team/aditya.jpeg";
import mimansha from "../assets/team/mimansha.jpeg";
import ansh from "../assets/team/ansh.jpeg";
import chandana from "../assets/team/chandana.jpeg";
import adarsh from "../assets/team/adarsh.jpeg";
import akshita from "../assets/team/akshita.jpeg";
import sushma from "../assets/team/sushma.jpeg";
import priya from "../assets/team/priya.jpeg";

import hasini from "../assets/team/hasini.jpeg";
import kushadhi from "../assets/team/kushadhi.jpeg";
import poorvi from "../assets/team/poorvi.jpeg";
import sparsha from "../assets/team/sparsha.jpeg";
import swati from "../assets/team/swati.jpeg";
import pranjal from "../assets/team/pranjal.jpeg";

// Faculty Adviser images
import ashaGH from "../assets/team/ashaGH.jpeg";
import ashaK from "../assets/team/ashaK.jpeg";

function Team() {

  const excom = [
    {
      name: "Aditya Singh",
      role: "Chairperson",
      img: aditya,
      punch: "Driving vision, leadership, and strategic growth.",
    },
    {
      name: "Mimansha Mishra",
      role: "Vice Chairperson",
      img: mimansha,
      punch: "Strengthening leadership through collaboration and execution.",
    },
    {
      name: "Ansh Rastogi",
      role: "Secretary",
      img: ansh,
      punch: "Ensuring clarity, coordination, and continuity.",
    },
    {
      name: "Chandana S",
      role: "Treasurer",
      img: chandana,
      punch: "Managing resources with transparency and responsibility.",
    },
    {
      name: "Adarsh Singh",
      role: "Technical Head",
      img: adarsh,
      punch: "Leading innovation and technical excellence.",
    },
    {
      name: "Akshita",
      role: "Technical Co-Head",
      img: akshita,
      punch: "Building reliable systems and technical support.",
    },
    {
      name: "Sushma",
      role: "Marketing Head",
      img: sushma,
      punch: "Amplifying impact through strategic communication.",
    },
    {
      name: "Priya T S",
      role: "Events Head",
      img: priya,
      punch: "Designing meaningful and engaging experiences.",
    },
  ];

  const team = [
    {
      name: "Hasini",
      role: "Technical Associate",
      img: hasini,
      punch: "Supporting development and technical initiatives.",
    },
    {
      name: "Kushadhi J",
      role: "Media Associate",
      img: kushadhi,
      punch: "Curating content and visual storytelling.",
    },
    {
      name: "Poorvi",
      role: "Events Associate",
      img: poorvi,
      punch: "Assisting in planning and execution of events.",
    },
    {
      name: "Sparsha S",
      role: "Events Associate",
      img: sparsha,
      punch: "Coordinating logistics and participant engagement.",
    },
    {
      name: "Swati Garg",
      role: "Marketing Associate",
      img: swati,
      punch: "Extending outreach through creative campaigns.",
    },
    {
      name: "Pranjal",
      role: "Design Associate",
      img: pranjal,
      punch: "Crafting visuals with clarity and purpose.",
    },
  ];

  const faculty = [
    {
      name: "Asha G.H",
      role: "Faculty Adviser",
      img: ashaGH,
      punch: "Guiding direction, mentorship, and institutional alignment.",
    },
    {
      name: "Asha K",
      role: "Faculty Adviser",
      img: ashaK,
      punch: "Supporting growth through mentorship and academic leadership.",
    },
  ];

  // Clean portrait-friendly card
  const MemberCard = ({ member }) => (
    <div className="flex flex-col items-center text-center">
      <div className="w-52 h-60 rounded-2xl bg-gray-100 shadow-md overflow-hidden mb-4">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <p className="text-lg italic text-gray-600 mb-3 max-w-sm">
        “{member.punch}”
      </p>

      <h3 className="text-xl font-semibold text-gray-900">
        {member.name}
      </h3>
      <p className="text-gray-600">{member.role}</p>
    </div>
  );

  return (
    <section className="bg-white pt-8 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ExCom */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-2">
            WIE ExCom 2026
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Executive committee guiding the vision and operations of IEEE WIE BMSIT&M
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
            {excom.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-2">
            WIE Team 2026
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Dedicated associates supporting technical, creative, and operational efforts
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
            {team.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Faculty Advisers — moved to end */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-2">
            Faculty Advisers
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Mentors guiding IEEE WIE BMSIT&M with experience and academic leadership
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-24 justify-items-center">
            {faculty.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Team;