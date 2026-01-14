import aditya from "../assets/team/aditya.jpeg";
import mimansha from "../assets/team/mimansha.jpeg";
import ansh from "../assets/team/ansh.jpeg";
import chandana from "../assets/team/chandana.jpeg";
import adarsh from "../assets/team/adarsh.jpeg";
import akshita from "../assets/team/akshita.jpeg";
import sushma from "../assets/team/sushma.jpeg";
import priya from "../assets/team/priya.jpeg";

import hasini from "../assets/team/hasini.jpeg";
import kushadhi from "../assets/team/kushadi.jpeg";
import poorvi from "../assets/team/poorvi.jpeg";
import sparsha from "../assets/team/sparsha.jpeg";
import swati from "../assets/team/swati.jpeg";
import pranjal from "../assets/team/pranjal.jpeg";

const exCom = [
  { name: "Aditya Singh", role: "Chair", img: aditya },
  { name: "Mimansha Mishra", role: "Vice Chair", img: mimansha },
  { name: "Ansh Rastogi", role: "Secretary", img: ansh },
  { name: "Chandana S", role: "Treasurer", img: chandana },
  { name: "Adarsh Singh", role: "Tech Head", img: adarsh },
  { name: "Akshita", role: "Tech Co-Head", img: akshita },
  { name: "Sushma", role: "Marketing Head", img: sushma },
  { name: "Priya T S", role: "Events Head", img: priya },
];

const team = [
  { name: "Hasini", role: "Technical Associate", img: hasini },
  { name: "Kushadhi J", role: "Media Associate", img: kushadhi },
  { name: "Poorvi", role: "Events Associate", img: poorvi },
  { name: "Sparsha S", role: "Events Associate", img: sparsha },
  { name: "Swati Garg", role: "Marketing Associate", img: swati },
  { name: "Pranjal", role: "Design Associate", img: pranjal },
];

function TeamCard({ name, role, img }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
      <img
        src={img}
        alt={name}
        className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-wiePurple"
      />
      <h3 className="font-semibold text-lg text-darkGray">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}

function Team() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* ExCom */}
      <h2 className="text-3xl font-bold text-ieeeBlue text-center mb-10">
        WIE ExCom 2026 ✨
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {exCom.map((member, i) => (
          <TeamCard key={i} {...member} />
        ))}
      </div>

      {/* Team */}
      <h2 className="text-3xl font-bold text-ieeeBlue text-center mb-10">
        WIE Team 2026 ✨
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <TeamCard key={i} {...member} />
        ))}
      </div>
    </div>
  );
}

export default Team;
