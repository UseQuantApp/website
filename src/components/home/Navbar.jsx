import { useEffect, useState } from "react";
import { Equal, X } from "lucide-react";
import quantLogo from "../../assets/quant-logo.png";
import { WHATSAPP_URL } from "../../constants/links";

const navigation = [
  { label: "What it does", id: "what-it-does" },
  { label: "How it works", id: "how-it-works" },
  { label: "Community", id: "community" },
  { label: "FAQs", id: "faqs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const targets = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((target) => target !== null);

    if (!targets.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-3rem)] max-w-6xl -translate-x-1/2 sm:w-[calc(100%-2rem)]">
      <nav
        aria-label="Main navigation"
        className="relative grid min-h-12 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full border border-quant-line bg-quant-nav px-4 shadow-sm backdrop-blur-md sm:min-h-[52px] sm:px-5 md:flex md:justify-between"
      >
        <a href="/" aria-label="Quant home" className="flex w-fit items-center">
          <img className="h-auto w-[88px] sm:w-[96px]" src={quantLogo} alt="Quant." />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map(({ label, id }) => (
            <a
              key={id}
              href={`/#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              className={`text-[13px] transition-colors hover:text-quant-blue ${
                activeSection === id ? "text-quant-blue" : "text-quant-ink"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden shrink-0 items-center justify-center rounded-full bg-quant-orange px-4 py-2 text-[13px] text-white transition-opacity hover:opacity-90 md:inline-flex"
        >
          Try Quant now
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full bg-quant-orange text-white transition-opacity hover:opacity-90 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="quant-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" size={20} /> : <Equal aria-hidden="true" size={20} />}
        </button>

        {menuOpen && (
          <div
            id="quant-mobile-menu"
            className="absolute left-0 right-0 top-[calc(100%+0.5rem)] grid gap-1 rounded-3xl border border-quant-line bg-white p-3 shadow-lg md:hidden"
          >
            {navigation.map(({ label, id }) => (
              <a
                key={id}
                href={`/#${id}`}
                aria-current={activeSection === id ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm transition-colors hover:bg-quant-soft hover:text-quant-blue ${
                  activeSection === id ? "text-quant-blue" : "text-quant-ink"
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-1 inline-flex min-h-11 items-center justify-center rounded-full bg-quant-orange px-5 text-sm text-white transition-opacity hover:opacity-90"
            >
              Try Quant now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
