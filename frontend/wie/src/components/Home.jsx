function Home() {
  return (
    <div className="bg-softGray min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-ieeeBlue mb-6">
          Empowering Women Engineers
        </h1>

        <p className="text-darkGray text-lg mb-8">
          IEEE Women in Engineering Affinity Group at  
          BMS Institute of Technology & Management
        </p>

        <a
          href="/join"
          className="inline-block bg-wiePurple text-white px-8 py-3 rounded-full font-medium hover:opacity-90"
        >
          Join WIE
        </a>
      </div>
    </div>
  );
}

export default Home;
