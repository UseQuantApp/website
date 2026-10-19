import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { BellRing, GraduationCap, Library } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import materialsPhone from "../../assets/feature-materials.png";
import remindersPhone from "../../assets/feature-reminders.png";
import cgpaPhone from "../../assets/feature-cgpa.png";
import { WHATSAPP_URL } from "../../constants/links";

// TODO: confirm the Course Materials and Reminders descriptions with Quant (placeholders).
const features = [
  {
    id: "materials",
    title: "Course Materials",
    Icon: Library,
    description:
      "Find course PDFs, lecture notes and past questions in seconds, right inside WhatsApp.",
    image: materialsPhone,
    alt: "WhatsApp chat where Quant shares EEE 312 lecture notes as a PDF",
  },
  {
    id: "reminders",
    title: "Reminders",
    Icon: BellRing,
    description:
      "Never miss a class or a deadline. Quant reminds you before lectures and assignments are due.",
    image: remindersPhone,
    alt: "WhatsApp chat where Quant sends a class reminder",
  },
  {
    id: "cgpa",
    title: "CGPA Tracker",
    Icon: GraduationCap,
    description:
      "Track your CGPA, set academic targets, and see what you need to achieve your desired results.",
    image: cgpaPhone,
    alt: "WhatsApp chat where Quant shows a CGPA goal tracker",
  },
];

export default function WhatQuantDoes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.4 });
  const active = features[activeIndex];

  const goNext = () => setActiveIndex((index) => (index + 1) % features.length);

  return (
    <section id="what-it-does" ref={sectionRef} className="px-4 py-10 sm:px-6 sm:py-14">
      <div className="quant-dot-grid mx-auto max-w-6xl rounded-3xl bg-[#EEF0FF] p-5 sm:p-10">
        <div className="flex items-center gap-2 text-[11px] text-quant-ink sm:text-xs">
          <span aria-hidden="true" className="size-[7px] rounded-full bg-quant-ink" />
          <span>WHAT QUANT DOES</span>
        </div>

        <div className="mt-6 grid items-center gap-8 md:grid-cols-2 lg:gap-14">
          <div className="group w-full max-w-[480px] rounded-3xl border border-[#E9F0FF] bg-white px-6 py-2 shadow-sm sm:px-8">
            {features.map(({ id, title, Icon, description }, index) => {
              const isActive = index === activeIndex;

              return (
                <div key={id} className="border-b border-[#E8EEFF] last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-expanded={isActive}
                    aria-controls={`feature-panel-${id}`}
                    className="flex w-full items-center gap-3 py-6 text-left"
                  >
                    <Icon
                      aria-hidden="true"
                      size={22}
                      className={isActive ? "text-quant-blue" : "text-[#6B6B6B]"}
                    />
                    <span
                      className={`text-lg transition-colors sm:text-xl ${
                        isActive ? "text-quant-blue" : "text-[#666666]"
                      }`}
                    >
                      {title}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={`feature-panel-${id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[380px] text-base leading-relaxed text-[#8A8A8A]">
                          {description}
                        </p>

                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-quant-blue px-5 text-sm text-white transition-opacity hover:opacity-90"
                        >
                          <FaWhatsapp aria-hidden="true" size={16} />
                          Try Quant now
                        </a>

                        <div className="my-6 h-[3px] w-full overflow-hidden rounded-full bg-[#EEF0FF]">
                          <div
                            key={activeIndex}
                            onAnimationEnd={goNext}
                            className={`h-full w-full rounded-full bg-quant-blue animate-[quant-progress_5s_linear_forwards] motion-reduce:animate-none group-hover:[animation-play-state:paused] ${
                              inView ? "" : "[animation-play-state:paused]"
                            }`}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center md:justify-end">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.image}
                alt={active.alt}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="h-[420px] w-auto object-contain sm:h-[520px] lg:h-[600px]"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
