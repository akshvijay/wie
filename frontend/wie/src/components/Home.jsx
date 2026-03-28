import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import slide1 from "../assets/home/slide1.png";
import slide2 from "../assets/home/slide2.png";
import slide3 from "../assets/home/slide 3.png"; 
import slide4 from "../assets/home/slide 4.png";

const SLIDES = [slide1, slide2, slide3, slide4];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-full w-full text-white flex items-center px-6 md:px-16 overflow-hidden">
      
      {/* CLEAN BACKGROUND: 
         Removed the SVG pattern and checks. 
         Keeping subtle ambient glows for depth.
      */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center w-full z-10">
        
        {/* LEFT CONTENT WITH MOTION */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6 inline-block"
          >
            IEEE WIE BMSIT&M Section
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Women</span> <br /> 
            in Technology
          </h1>

          <p className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed">
            Building innovators, leaders, and a strong tech community. 
            Join a global network dedicated to changing the world.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-5"
          >
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:bg-yellow-300 hover:scale-105 transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)] active:scale-95">
              Join WIE
            </button>
            <button className="border border-white/20 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition-all active:scale-95">
              Explore Events
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT SLIDESHOW WITH MOTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, r: 10 }}
          animate={{ opacity: 1, scale: 1, r: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group"
        >
          <div className="relative w-full h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <img
                  src={SLIDES[current]}
                  alt="WIE Event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01022e] via-transparent to-transparent opacity-60" />
              </motion.div>
            </AnimatePresence>

            {/* Slide Progress Bar */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
              {SLIDES.map((_, i) => (
                <motion.div 
                  key={i} 
                  animate={{ 
                    width: i === current ? 32 : 8,
                    backgroundColor: i === current ? "#facc15" : "rgba(255,255,255,0.3)" 
                  }}
                  className="h-1.5 rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;