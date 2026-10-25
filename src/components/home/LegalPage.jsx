import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Shared layout for the Privacy Policy and Terms of Service pages.
// sections: [{ heading, lead?: string[], items?: (string | { label, text })[], after?: string[], contactEmail?: string }]
export default function LegalPage({ title, pageTitle, lastUpdated, intro = [], sections }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = pageTitle ?? `${title} | Quant`;
  }, [title, pageTitle]);

  return (
    <div className="quant-dot-grid font-sans overflow-x-hidden">
      <Navbar />

      <main className="mx-auto max-w-3xl px-5 pb-16 pt-28 sm:px-6 sm:pt-32">
        <h1 className="text-center text-4xl font-normal leading-[1.1] text-quant-blue sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-center text-sm text-[#6B6B6B]">Last Updated: {lastUpdated}</p>

        <div className="mt-10 space-y-4 text-sm leading-relaxed text-quant-ink sm:text-base">
          {intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {sections.map((section) => (
          <section key={section.heading} className="mt-9">
            <h2 className="text-lg font-medium text-quant-ink sm:text-xl">{section.heading}</h2>

            <div className="mt-3 space-y-3 text-sm leading-relaxed text-quant-ink sm:text-base">
              {section.lead?.map((paragraph, index) => (
                <p key={`lead-${index}`}>{paragraph}</p>
              ))}

              {section.items && (
                <ul className="list-disc space-y-2 pl-5">
                  {section.items.map((item, index) => (
                    <li key={index}>
                      {typeof item === "string" ? (
                        item
                      ) : (
                        <>
                          <span className="font-medium">{item.label}</span> {item.text}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {section.after?.map((paragraph, index) => (
                <p key={`after-${index}`}>{paragraph}</p>
              ))}

              {section.contactEmail && (
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href={`mailto:${section.contactEmail}`}
                    className="text-quant-blue underline underline-offset-2"
                  >
                    {section.contactEmail}
                  </a>
                </p>
              )}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
