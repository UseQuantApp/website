import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-no-bg.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("features");
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className=" fixed w-full px-6 md:px-16 py-4 flex items-center justify-between bg-white  top-0 shadow-sm z-50">
      <div className=" flex items-center ">
        <img src={logo} alt="Quant Logo" className="w-10" />

        <span className="text-[26px] font-bold text-[#212121] tracking-tight">
          Quant
        </span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        <a
          href="#features"
          className={`text-sm font-medium transition-colors ${
            activeSection === "features"
              ? "text-[#4A42FF]"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Features
        </a>

        <a
          href="#how-it-works"
          className={`text-sm font-medium transition-colors ${
            activeSection === "how-it-works"
              ? "text-[#4A42FF]"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          How It Works
        </a>

        <a
          href="#faqs"
          className={`text-sm font-medium transition-colors ${
            activeSection === "faqs"
              ? "text-[#4A42FF]"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          FAQs
        </a>
      </div>

      <div className="hidden md:block">
        <button
        type="button"
        disabled
        className="w-full cursor-default rounded-full border border-brand-orange/20 bg-brand-orange/10 px-6 py-3 text-center font-semibold text-brand-orange/70 backdrop-blur-sm"
      >
        Coming Soon
      </button>
      </div>

      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full justify-center items-center bg-white shadow-lg flex flex-col px-6 py-6 gap-5 md:hidden z-50">
          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 font-medium"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 font-medium"
          >
            How It Works
          </a>

          <a
            href="#faqs"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 font-medium"
          >
            FAQs
          </a>

          <button
            type="button"
            disabled
            className="w-full cursor-default rounded-full border border-brand-orange/20 bg-brand-orange/10 px-6 py-3 text-center font-semibold text-brand-orange/70 backdrop-blur-sm"
          >
            Coming Soon
          </button>
        </div>
      )}
    </nav>
  );
}
