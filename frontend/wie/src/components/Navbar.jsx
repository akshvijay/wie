import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

function NavBar() {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Full-width navbar */}
      <div className="flex h-24 items-center px-6">

        {/* Logo + Title (EXTREME LEFT) */}
        <Link to="/" className="flex items-center gap-5">
          <img
            src={logo}
            alt="IEEE WIE BMSIT&M"
            className="h-12 w-auto"
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

        {/* Right side content */}
        <div className="ml-auto flex items-center gap-10">

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-700">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Events", path: "/events" },
              { name: "Team", path: "/team" },
              { name: "Contact", path: "/contact" },
              { name: "Updates", path: "/updates" }

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

          {/* JOIN WIE – External IEEE link */}
          <a
            href="https://services10.ieee.org/as/authorization.oauth2?response_type=code&client_id=PF_AS_FOR_PA&redirect_uri=https%3A%2F%2Fwww.ieee.org%2Fpa%2Foidc%2Fcb&state=eyJ6aXAiOiJERUYiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoicDktYlR5eUlBclBIRUdLand1SFlTMm1mNC1nIiwic3VmZml4IjoiWjZQTVJOLjE3Njg2NTMxNzcifQ..gSs00_e7aEtYpptiCOEhNw.VujuYfOa5v8zf9Ek-XcUSoLJh7YBR72AgfIX5L4qU2iGaNDWcEVv-L6nXo3rcSsZOfABLM3-czfjLSNzcqdxuc_Wd8_mjR2jXBgMHJPKy-jBEjt4xrFbW-67BItsjEWl.XOYlm8LylsOdMxFUmdDu3w&nonce=xAekqt5KOtslEBoV5qbzK_SxLx__Zjp9hxsmY6pqkYs&acr_values=msp%20sts%20stm%20prf%20crt%20col%20otk%20cmc%20cmp%20spe&scope=openid%20profile%20address%20email%20phone&vnd_pi_requested_resource=https%3A%2F%2Fwww.ieee.org%2Fmembership-application%2Fjoin.html%3Fgrade%3DStudent&vnd_pi_application_name=MembershipApplication"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center h-10 px-5 rounded-md bg-[#FDB515] text-base font-semibold text-black hover:opacity-90"
          >
            Join WIE
          </a>

        </div>
      </div>
    </header>
  );
}

export default NavBar;
