import { useEffect, useState } from "react";

import slide1 from "../assets/home/slide1.png";
import slide2 from "../assets/home/slide2.png";
import slide3 from "../assets/home/slide 3.png";
import slide4 from "../assets/home/slide 4.png";
import slide5 from "../assets/home/slide 5.png";

function Home() {
  const images = [slide1, slide2, slide3, slide4, slide5];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">

      {/* Slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="IEEE WIE Event"
            className="w-full h-full object-cover object-center"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-purple-900/60"></div>
        </div>
      ))}

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-wide mb-4">
          WIE
        </h1>

        <p className="text-white text-xl md:text-2xl font-medium">
          IEEE Women in Engineering – BMSIT&M
        </p>
      </div>

    </section>
  );
}

export default Home;