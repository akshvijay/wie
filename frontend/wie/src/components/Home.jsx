function Home() {
  return (
    <div className="space-y-32">

      {/* HERO */}
      <section className="text-center pt-24 pb-20 px-6">
        <h1 className="text-5xl font-bold mb-6">
          IEEE Women in Engineering
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering women to innovate, lead, and shape the future of technology.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Mission */}
        <div className="bg-white rounded-2xl p-10 shadow-sm">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            To inspire, empower, and support women in engineering and technology
            by creating inclusive opportunities for learning, leadership, and
            innovation. IEEE WIE BMSIT&M strives to bridge gaps, nurture talent,
            and foster confidence through meaningful technical, outreach, and
            community-driven initiatives.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-2xl p-10 shadow-sm">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            To build a diverse and inclusive technical community where women are
            empowered to lead, innovate, and make a lasting impact in engineering,
            science, and society — shaping a future driven by equality,
            creativity, and collaboration.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide our initiatives, decisions, and community.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
            <p className="text-gray-600">
              Creating safe, welcoming spaces where every voice is valued and heard.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              Encouraging creativity, problem-solving, and forward-thinking ideas.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Leadership</h3>
            <p className="text-gray-600">
              Developing confident leaders who inspire change and collaboration.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Impact</h3>
            <p className="text-gray-600">
              Driving meaningful outcomes through technology, outreach, and service.
            </p>
          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">What We Do</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16">
          IEEE WIE BMSIT&M conducts initiatives that blend technical excellence,
          social responsibility, and leadership development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Technical Events</h3>
            <p className="text-gray-600">
              Workshops, hackathons, and talks that build real-world skills.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-3">STEM Outreach</h3>
            <p className="text-gray-600">
              Initiatives that inspire young minds through hands-on learning.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Community Building</h3>
            <p className="text-gray-600">
              Creating networks of support, mentorship, and collaboration.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Leadership Growth</h3>
            <p className="text-gray-600">
              Empowering students to lead with confidence and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl font-bold mb-6">
          Be a Part of the Change
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join IEEE Women in Engineering and be part of a community that believes
          in innovation, equality, and impact.
        </p>
        <a
          href="/join"
          className="inline-block px-8 py-3 rounded-lg bg-ieeeBlue text-white font-semibold hover:opacity-90"
        >
          Join IEEE WIE
        </a>
      </section>

    </div>
  );
}

export default Home;
