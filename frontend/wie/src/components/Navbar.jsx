import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

function NavBar() {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Full width container */}
      <div className="flex h-24 items-center px-6">

        {/* Logo + Text */}
        <Link to="/" className="flex items-center gap-5">
          <img
            src={logo}
            alt="IEEE WIE BMSIT&M"
            className="h-16 w-auto"
          />
          <div className="leading-tight">
            <p className="text-xl font-semibold text-gray-900 leading-none">
              IEEE Women in Engineering
            </p>
            <p className="text-sm text-gray-500 mt-1">
              BMS Institute of Technology & Management
            </p>
          </div>
        </Link>

        {/* Right Side */}
        <div className="ml-auto flex items-center gap-10">

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-700">
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
            className="hidden md:flex items-center justify-center h-10 px-5 rounded-md bg-[#FDB515] text-base font-semibold text-black hover:opacity-90"
          >
            Join WIE
          </Link>

        </div>
      </div>
    </header>
  );
}

export default NavBar;
