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
        <a
          href=" https://wa.me/2349135622583"
          className="bg-brand-orange text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
        >
          Try it out
        </a>
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

          <a
            href="https://wa.me/2349135622583"
            className="bg-brand-orange text-white px-6 py-3 rounded-full w-full font-semibold text-center"
          >
            Try it out
          </a>
        </div>
      )}
    </nav>
  );
}
