import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Team from "./components/Team";
import Join from "./components/Join";
import Contact from "./components/Contact";
import Updates from "./components/Updates";

function App() {
  return (
    <BrowserRouter>
      {/* 🌐 GLOBAL BACKGROUND — deep blue-to-midnight-purple gradient */}
      <div
        className="min-h-screen flex flex-col"
        style={{
          background:
            "linear-gradient(135deg, #01022e 0%, #0a1045 55%, #0d0a2e 100%)",
        }}
      >
        <NavBar />

        {/* pt-24 compensates for the fixed navbar height */}
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/"        element={<Home />} />
            <Route path="/about"   element={<About />} />
            <Route path="/events"  element={<Events />} />
            <Route path="/team"    element={<Team />} />
            <Route path="/join"    element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/updates" element={<Updates />} />
          </Routes>
        </main>

        {/* ── Footer — glassmorphism ── */}
        <footer
          className="text-center py-5 text-sm text-white/50 border-t border-white/10"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(10px)",
          }}
        >
          © 2026 IEEE Women in Engineering | BMSIT&amp;M
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
