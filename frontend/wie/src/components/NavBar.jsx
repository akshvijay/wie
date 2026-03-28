import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
  { name: "Updates", path: "/updates" },
];

function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f2c]/80 backdrop-blur-md border-b border-white/5">
      {/* 
          1. Removed max-w and mx-auto to push content to the far ends.
          2. px-6 provides a small breathing room from the screen edge. 
      */}
      <div className="flex items-center h-[72px] px-6 w-full">

        {/* Logo - Now sits at the absolute left end */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="logo" className="h-10 rounded-md" />
          <div className="hidden sm:block"> {/* Hidden on very small screens to save space */}
            <p className="text-white font-semibold text-[17px] leading-tight">
              IEEE Women in Engineering
            </p>
            <p className="text-white/50 text-[12px]">
              BMSIT&M
            </p>
          </div>
        </Link>

        {/* Links */}
        <nav className="hidden lg:flex ml-auto gap-8 mr-8">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `transition duration-200 font-medium text-sm ${
                  isActive ? "text-yellow-400" : "text-white/70 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Button */}
        <Link
          to="/join"
          className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-bold hover:bg-yellow-300 transition-all active:scale-95 shrink-0"
        >
          Join WIE
        </Link>
      </div>
    </header>
  );
}

export default NavBar;