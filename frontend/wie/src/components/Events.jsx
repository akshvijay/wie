import { useEffect, useState } from "react";

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

/* ---------------- IMAGE SLIDER ---------------- */

function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2600);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[24rem] bg-gray-100 rounded-2xl overflow-hidden shadow">
      <img
        key={index}
        src={images[index]}
        alt=""
        className="absolute inset-0 w-full h-full object-contain p-4 animate-fade"
      />
    </div>
  );
}

/* ---------------- EVENT SECTION ---------------- */

function EventSection({ title, subtitle, desc, images, reverse }) {
  return (
    <section className="py-24">
      <div
        className={`max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {reverse ? (
          <>
            <div>
              <h2 className="text-4xl font-bold mb-4">{title}</h2>
              <p className="text-lg text-gray-500 mb-6">{subtitle}</p>
              <p className="text-gray-700 leading-relaxed max-w-xl">
                {desc}
              </p>
            </div>
            <ImageSlider images={images} />
          </>
        ) : (
          <>
            <ImageSlider images={images} />
            <div>
              <h2 className="text-4xl font-bold mb-4">{title}</h2>
              <p className="text-lg text-gray-500 mb-6">{subtitle}</p>
              <p className="text-gray-700 leading-relaxed max-w-xl">
                {desc}
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/* ---------------- MAIN EVENTS PAGE ---------------- */

function Events() {
  return (
    <div className="bg-white">

      {/* Page Header */}
      <div className="text-center pt-16 pb-10 px-6">
        <h1 className="text-5xl font-bold mb-4">Our Events</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Each initiative reflects our commitment to innovation, inclusion, and impact.
        </p>
      </div>

      {/* IDEA HEIST */}
      <EventSection
        title="I.D.E.A Heist 💰"
        subtitle="Innovation • Debugging • Strategy"
        desc="Not just a tech event—but a sabotage-surviving mission. Participants cracked bugs in The Grid Escape, raced through quizzes on The Innovation Trail, and battled it out in Pitch or Perish using wild brainstorming and sabotage cards. It was aptitude, action, and debugging combined—you either crack the game or get locked out."
        images={[ih1, ih2, ih3, ih4]}
      />

      {/* STEM */}
      <EventSection
        title="Project STEMSetGo! 🌱"
        subtitle="Empowering young minds through STEM & IoT"
        desc="Bringing innovation to classrooms that need it most. Project STEMSetGo! is an IoT and STEM outreach initiative by IEEE WIE BMSIT&M in collaboration with Rotary Club of Bangalore West. Through hands-on learning at Sai Shankara Vidya Shala, students explored technology beyond textbooks—learning by doing, experimenting, and imagining."
        images={[s1, s2, s3, s4, s5]}
        reverse
      />

      {/* SMILE */}
      <EventSection
        title="SMILE Project 😊"
        subtitle="AI • Empathy • Human Connection"
        desc="At Kalarava, technology met joy. The SMILE Project used an AI-powered face recognition model that detects smiles in real time and automatically clicks your picture the moment you grin. A simple smile became data, memory, and connection—showing how AI can amplify human emotion, not replace it."
        images={[sm1, sm2, sm3, sm4]}
      />

      {/* DONATION DRIVE */}
      <EventSection
        title="Wings of Hope 🕊️💛"
        subtitle="Compassion • Care • Community"
        desc="An effort to give every child the chance to fly. What started as a donation drive became a moment of shared purpose. Wings of Hope wasn’t just about giving—it was about standing together, believing in hope, and creating impact that lasts beyond the event."
        images={[d1, d2, d3, d4]}
        reverse
      />

    </div>
  );
}

export default Events;
