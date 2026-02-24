function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">

      {/* Heading */}
      <h2 className="relative text-5xl md:text-6xl font-extrabold text-center mb-24 
                     text-gray-900 animate-slideUp">

        About IEEE WIE

        {/* Animated Underline */}
        <span className="absolute left-1/2 -bottom-5 h-[4px] w-0 
                         bg-purple-500 
                         -translate-x-1/2 
                         rounded-full
                         animate-underlineExpand"></span>
      </h2>


      {/* Cards */}
      <div className="space-y-16">

        {/* Card 1 */}
        <div className="p-10 rounded-2xl 
                        border-2 border-purple-300
                        shadow-[0_0_45px_rgba(168,85,247,0.45)]
                        transition-all duration-300 ease-in-out
                        hover:shadow-[0_0_70px_rgba(168,85,247,0.8)]
                        hover:border-purple-200
                        hover:-translate-y-1">

          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Global Vision
          </h3>

          <p className="text-lg leading-relaxed text-gray-800">
            IEEE Women in Engineering (WIE) is a global network dedicated to
            inspiring, engaging, and advancing women in engineering and
            technology. It provides international exposure, leadership
            development, and professional growth opportunities.
          </p>
        </div>


        {/* Card 2 */}
        <div className="p-10 rounded-2xl 
                        border-2 border-purple-300
                        shadow-[0_0_45px_rgba(168,85,247,0.45)]
                        transition-all duration-300 ease-in-out
                        hover:shadow-[0_0_70px_rgba(168,85,247,0.8)]
                        hover:border-purple-200
                        hover:-translate-y-1">

          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            WIE at BMSIT&M
          </h3>

          <p className="text-lg leading-relaxed text-gray-800">
            The IEEE WIE Affinity Group at BMSIT&M focuses on building
            confidence, leadership, and technical excellence among women
            students through workshops, mentorship programs, and
            collaborative technical initiatives.
          </p>
        </div>


        {/* Card 3 */}
        <div className="p-10 rounded-2xl 
                        border-2 border-purple-300
                        shadow-[0_0_45px_rgba(168,85,247,0.45)]
                        transition-all duration-300 ease-in-out
                        hover:shadow-[0_0_70px_rgba(168,85,247,0.8)]
                        hover:border-purple-200
                        hover:-translate-y-1">

          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Our Mission
          </h3>

          <p className="text-lg leading-relaxed text-gray-800">
            We aim to create a supportive and inclusive environment where
            women in engineering can thrive, collaborate on real-world
            projects, and develop the skills needed to lead future
            technological advancements.
          </p>
        </div>


        {/* Card 4 */}
        <div className="p-10 rounded-2xl 
                        border-2 border-purple-300
                        shadow-[0_0_45px_rgba(168,85,247,0.45)]
                        transition-all duration-300 ease-in-out
                        hover:shadow-[0_0_70px_rgba(168,85,247,0.8)]
                        hover:border-purple-200
                        hover:-translate-y-1">

          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Leadership & Mentorship
          </h3>

          <p className="text-lg leading-relaxed text-gray-800">
            Through expert talks, industry sessions, and peer mentorship,
            WIE empowers students with confidence, networking skills, and
            exposure to real industry challenges.
          </p>
        </div>


        {/* Card 5 */}
        <div className="p-10 rounded-2xl 
                        border-2 border-purple-300
                        shadow-[0_0_45px_rgba(168,85,247,0.45)]
                        transition-all duration-300 ease-in-out
                        hover:shadow-[0_0_70px_rgba(168,85,247,0.8)]
                        hover:border-purple-200
                        hover:-translate-y-1">

          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Technical Excellence
          </h3>

          <p className="text-lg leading-relaxed text-gray-800">
            From coding bootcamps to innovation challenges, we encourage
            members to push boundaries and contribute meaningfully to
            emerging technologies.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;