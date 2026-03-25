import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";



const JOIN_URL =
  "https://services10.ieee.org/as/authorization.oauth2?response_type=code&client_id=PF_AS_FOR_PA&redirect_uri=https%3A%2F%2Fwww.ieee.org%2Fpa%2Foidc%2Fcb&state=eyJ6aXAiOiJERUYiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoicDktYlR5eUlBclBIRUdLand1SFlTMm1mNC1nIiwic3VmZml4IjoiWjZQTVJOLjE3Njg2NTMxNzcifQ..gSs00_e7aEtYpptiCOEhNw.VujuYfOa5v8zf9Ek-XcUSoLJh7YBR72AgfIX5L4qU2iGaNDWcEVv-L6nXo3rcSsZOfABLM3-czfjLSNzcqdxuc_Wd8_mjR2jXBgMHJPKy-jBEjt4xrFbW-67BItsjEWl.XOYlm8LylsOdMxFUmdDu3w&nonce=xAekqt5KOtslEBoV5qbzK_SxLx__Zjp9hxsmY6pqkYs&acr_values=msp%20sts%20stm%20prf%20crt%20col%20otk%20cmc%20cmp%20spe&scope=openid%20profile%20address%20email%20phone&vnd_pi_requested_resource=https%3A%2F%2Fwww.ieee.org%2Fmembership-application%2Fjoin.html%3Fgrade%3DStudent&vnd_pi_application_name=MembershipApplication";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
  { name: "Updates", path: "/updates" },
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── shared nav-link styles ── */
  const linkClass = ({ isActive }) =>
    [
      "relative text-[17px] font-medium tracking-[0.3px]",
      "transition-colors duration-300",
      "after:absolute after:left-0 after:-bottom-0.5",
      "after:h-[1.5px] after:rounded-full",
      "after:transition-[width] after:duration-300 after:ease-out",
      isActive
        ? "text-white after:w-full after:bg-purple-400"
        : "text-white/55 hover:text-white/90 after:w-0 hover:after:w-full after:bg-purple-400/60",
    ].join(" ");

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(1,2,46,0.88)" : "rgba(1,2,46,0.55)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.45)" : "none",
        transition: "background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
      }}
    >
      {/* ── Inner container ── */}
      <div
        className="flex items-center h-[72px] mx-auto"
        style={{ padding: "0 40px", maxWidth: "1320px" }}
      >

        {/* ── Logo + Wordmark ── */}
        <Link
          to="/"
          className="flex items-center gap-3.5 flex-shrink-0 group"
          style={{ textDecoration: "none" }}
        >
          <img
            src={logo}
            alt="IEEE WIE BMSIT&M"
            className="h-10 w-auto rounded-md"
            style={{
              outline: "1.5px solid rgba(255,255,255,0.12)",
              outlineOffset: "2px",
              transition: "outline-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.outlineColor = "rgba(167,139,250,0.55)")}
            onMouseLeave={(e) => (e.currentTarget.style.outlineColor = "rgba(255,255,255,0.12)")}
          />
          <div style={{ lineHeight: 1 }}>
            <p
              style={{
                fontFamily: "'Inter', 'Poppins', sans-serif",
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "-0.2px",
                color: "rgba(255,255,255,0.95)",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              IEEE Women in Engineering
            </p>
            <p
              style={{
                fontFamily: "'Inter', 'Poppins', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                letterSpacing: "0.2px",
                color: "rgba(255,255,255,0.48)",
                marginTop: "3px",
                margin: 0,
                marginTop: "4px",
              }}
            >
              BMS Institute of Technology &amp; Management
            </p>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center ml-auto" style={{ gap: "30px", marginRight: "32px" }}>
          {NAV_LINKS.map((item) => (
            <NavLink key={item.name} to={item.path} className={linkClass}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* ── Join WIE button ── */}
        <a
          href={JOIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center flex-shrink-0"
          style={{
            fontFamily: "'Inter', 'Poppins', sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "0.2px",
            color: "#1a1200",
            background: "linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)",
            padding: "9px 20px",
            borderRadius: "10px",
            boxShadow: "0 2px 12px rgba(251,191,36,0.25)",
            transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.04) translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 6px 22px rgba(251,191,36,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 12px rgba(251,191,36,0.25)";
          }}
        >
          Join WIE
        </a>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden ml-auto flex flex-col justify-center items-center w-9 h-9"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ gap: "5px", cursor: "pointer", background: "none", border: "none", padding: "4px" }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "20px",
                height: "1.5px",
                borderRadius: "2px",
                background: "rgba(255,255,255,0.8)",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform:
                  !menuOpen ? "none"
                    : i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                      : i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)"
                        : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      <div
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
          background: "rgba(1,2,46,0.97)",
          backdropFilter: "blur(20px)",
          borderTop: menuOpen ? "1px solid rgba(255,255,255,0.07)" : "none",
        }}
      >
        <div className="flex flex-col px-10 py-5" style={{ gap: "18px" }}>
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-[15px] font-medium tracking-[0.3px] transition-colors duration-200 ${isActive ? "text-purple-400" : "text-white/60 hover:text-white/90"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <a
            href="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMWIE050"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              fontSize: "14px",
              fontWeight: 600,
              color: "#1a1200",
              background: "linear-gradient(135deg, #FBBF24, #F59E0B)",
              padding: "9px 20px",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            Join WIE
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
