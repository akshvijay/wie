import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Team from "./components/Team";
import Join from "./components/Join";
import Contact from "./components/Contact";
import Updates from "./components/Updates";

function PageContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    /* 1. pt-[72px] is the MAGIC FIX. It matches your Navbar height exactly.
       2. We removed pt-32 or pt-24 which were causing the big gaps.
    */
    <main
      className={`flex-grow w-full pt-[72px] ${
        isHome ? "h-screen overflow-hidden" : "min-h-screen pb-10"
      }`}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen flex flex-col"
        style={{
          background: "linear-gradient(135deg, #01022e 0%, #0a1045 55%, #0d0a2e 100%)",
        }}
      >
        <NavBar />
        <PageContent />
        <footer className="text-center py-5 text-sm text-white/50 border-t border-white/10 bg-white/5 backdrop-blur-md">
          © 2026 IEEE Women in Engineering | BMSIT&M
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
