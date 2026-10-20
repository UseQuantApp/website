import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Send } from "lucide-react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import logoWhite from "../../assets/quant-logo-white.png";

const SUPPORT_EMAIL = "hello@getquant.app";

// TODO: replace the "#" links with Quant's real social profiles.
const socials = [
  { label: "LinkedIn", Icon: FaLinkedin, href: "#" },
  { label: "X", Icon: FaXTwitter, href: "#" },
  { label: "Instagram", Icon: FaInstagram, href: "#" },
];

const exploreLinks = [
  { label: "What it does", href: "#what-it-does" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Community", href: "#community" },
  { label: "FAQs", href: "#faqs" },
];

// Approximation of the woven texture in the design.
const weave = {
  backgroundImage:
    "repeating-linear-gradient(0deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 4px), repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 8px, transparent 8px 12px)",
};

const linkClass = "transition-opacity hover:opacity-80";

export default function Footer() {
  const [message, setMessage] = useState("");

  // Stopgap until Quant picks a backend: opens the visitor's email app addressed to support.
  function handleSubmit(event) {
    event.preventDefault();
    const body = message.trim();
    if (!body) return;

    const subject = encodeURIComponent("Quant support / suggestion");
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
    setMessage("");
  }

  return (
    <footer className="px-4 pb-6 sm:px-6 sm:pb-8">
      <div
        style={weave}
        className="mx-auto flex max-w-6xl flex-col rounded-3xl bg-quant-orange p-6 text-white sm:p-10 md:min-h-[520px]"
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <img src={logoWhite} alt="Quant." className="w-[150px] sm:w-[170px]" />
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-8 place-items-center rounded-full bg-white text-[#555555] transition-opacity hover:opacity-90"
                >
                  <Icon aria-hidden="true" size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              <nav aria-label="Explore">
                <h3 className="text-base font-medium">Explore</h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm sm:text-base">
                  {exploreLinks.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className={linkClass}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav aria-label="Support">
                <h3 className="text-base font-medium">Support</h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm sm:text-base">
                  <li>
                    {/* TODO: there is no Terms of Service page yet. */}
                    <a href="#" className={linkClass}>
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <Link to="/privacy" className={linkClass}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <a href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className={`mt-8 inline-flex items-center gap-3 text-sm sm:text-base ${linkClass}`}
            >
              <span className="grid size-8 place-items-center rounded-full bg-white text-quant-orange">
                <Mail aria-hidden="true" size={15} />
              </span>
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-14 md:mt-auto md:pt-14">
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-full max-w-[630px] items-center gap-2 rounded-full bg-[#F4FAFF] p-1.5 pl-5 sm:p-2 sm:pl-6"
          >
            <label htmlFor="footer-message" className="sr-only">
              Need support or have a suggestion?
            </label>
            <input
              id="footer-message"
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Need Support or have a suggestion?"
              className="min-w-0 flex-1 bg-transparent text-sm text-quant-ink outline-none placeholder:text-[#9AA3AD] sm:text-base"
            />
            <button
              type="submit"
              className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full bg-quant-blue px-5 text-sm text-white transition-opacity hover:opacity-90"
            >
              Send
              <Send aria-hidden="true" size={15} />
            </button>
          </form>

          <p className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} Quant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
