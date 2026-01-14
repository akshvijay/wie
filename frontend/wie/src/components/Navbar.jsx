import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

function NavBar() {
  return (
    <header className="bg-white border-b border-gray-2800">
      <div className="max-w-5xl mx-auto px-6">
        {/* Fixed height container */}
        <div className="h-16 flex items-left justify-between">

          {/* Logo + Text */}
          <Link to="/" className="flex items-center gap-5">
            <img
              src={logo}
              alt="IEEE WIE BMSIT&M"
              className="h-18 w-auto"
            />
            <div className="leading-tight">
              <p className="text-xl font-semibold text-gray-900 leading-none">
                IEEE Women in Engineering
              </p>
              <p className="text-lg text-gray-500 leading-none mt-1">
                BMS Institute of Technology & Management
              </p>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xl font-large text-gray-1000">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Events", path: "/events" },
              { name: "Team", path: "/team" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative pb-1 transition ${
                    isActive
                      ? "text-ieeeBlue after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-ieeeBlue"
                      : "hover:text-ieeeBlue"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/join"
            className="hidden md:flex items-center justify-center h-9 px-4 rounded-md bg-[#FDB515] text-sm font-semibold text-black hover:opacity-90"
          >
            Join WIE
          </Link>

        </div>
      </div>
    </header>
  );
}

export default NavBar;
