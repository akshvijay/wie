import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Team from "./components/Team";
import Join from "./components/Join";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-softGray flex flex-col">
        {/* Navbar */}
        <NavBar />

        {/* Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-ieeeBlue text-white text-center py-4 text-sm">
          © 2026 IEEE Women in Engineering | BMSIT&M
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
