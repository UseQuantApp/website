import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Loader2, Mail, Send } from "lucide-react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import logoWhite from "../../assets/quant-logo-white.png";
import { SUGGESTIONS_API_URL } from "../../constants/links";

const SUPPORT_EMAIL = "hello@getquant.app";

// Quant's official profiles.
const socials = [
  { label: "LinkedIn", Icon: FaLinkedin, href: "https://www.linkedin.com/company/getquant-app/" },
  { label: "X", Icon: FaXTwitter, href: "https://x.com/getquant_app" },
  { label: "Instagram", Icon: FaInstagram, href: "https://www.instagram.com/getquant.app" },
];

const exploreLinks = [
  { label: "What it does", href: "/#what-it-does" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Community", href: "/#community" },
  { label: "FAQs", href: "/#faqs" },
];

// Approximation of the woven texture in the design.
const weave = {
  backgroundImage:
    "repeating-linear-gradient(0deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 4px), repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 8px, transparent 8px 12px)",
};

const linkClass = "transition-opacity hover:opacity-80";

export default function Footer() {
  const [message, setMessage] = useState("");
  // "idle" | "sending" | "sent" | "error" — shown on the button instead of an alert.
  const [status, setStatus] = useState("idle");
  const sending = status === "sending";

  async function handleSubmit(event) {
    event.preventDefault();
    const body = message.trim();
    if (!body || sending) return;

    setStatus("sending");
    try {
      const response = await fetch(SUGGESTIONS_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: body }),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      setMessage("");
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      // Keep the message so the visitor can retry.
      setStatus("error");
    }
  }

  return (
    <footer className="px-4 pb-6 sm:px-6 sm:pb-8">
      <div
        style={weave}
        className="mx-auto flex max-w-6xl flex-col rounded-3xl bg-quant-orange p-6 text-white sm:p-10 md:min-h-[520px]"
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <img src={logoWhite} alt="Quant." className="w-[130px] sm:w-[170px]" />
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank" rel="noreferrer" target="_blank" rel="noreferrer" aria-label={label}
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
                    <a href="/terms" className={linkClass}>
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
              className={`mt-8 flex items-center justify-center gap-3 text-sm sm:text-base md:inline-flex md:justify-start
                 ${linkClass}`}
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
            className="mx-auto flex w-full max-w-[630px] items-center gap-2 rounded-full bg-[#F4FAFF] p-1.5 pl-4 sm:p-2 sm:pl-6"
          >
            <label htmlFor="footer-message" className="sr-only">
              Need support or have a suggestion?
            </label>
            <textarea
              id="footer-message"
              rows={1}
              value={message}
              disabled={sending}
              onChange={(event) => {
                setMessage(event.target.value);
                if (status !== "sending") setStatus("idle");
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  event.currentTarget.form.requestSubmit();
                }
              }}
              placeholder="Need Support or have a suggestion?"
              className="h-9 min-w-0 flex-1 resize-none bg-transparent py-0 text-[13px] leading-[18px] text-quant-ink outline-none placeholder:text-[#9AA3AD] sm:h-6 sm:text-base"
            />
            <button
              type="submit"
              disabled={sending}
              aria-live="polite"
              className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full bg-quant-blue px-4 text-[13px] text-white sm:min-h-10 sm:gap-2 sm:px-5 sm:text-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sending && (
                <>
                  Sending
                  <Loader2 aria-hidden="true" size={15} className="animate-spin" />
                </>
              )}
              {status === "sent" && (
                <>
                  Sent
                  <Check aria-hidden="true" size={15} />
                </>
              )}
              {status === "error" && (
                <>
                  Try again
                  <Send aria-hidden="true" size={15} />
                </>
              )}
              {status === "idle" && (
                <>
                  Send
                  <Send aria-hidden="true" size={15} />
                </>
              )}
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
