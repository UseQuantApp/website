import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import questionMark from "../../assets/faq-question.png";

// TODO: the Figma lists a different set of questions ("Who is Quant for?", "How do I start?",
// "Is Quant free?", "What if my school or course isn't supported yet?", "What is Quant Community?").
// Confirm with Quant which list is final, then edit this array.
const faqs = [
  {
    question: "What is Quant?",
    answer:
    "Quant is an academic assistant that works inside WhatsApp. It helps students find course materials, understand lecture content, keep track of deadlines and monitor their CGPA."
  },
  {
    question: "Who is Quant for??",
    answer: "Quant is designed for university students who want an easier way to manage their academics. We’re starting with LASU students and building towards supporting students across more universities.",
  },
  {
    question: "How do I start?",
    answer: "Start through Quant's official access link and follow the instructions provided. Depending on the feature, you may need to provide details such as your university, department, level, or course information to personalize your experience.",
  },
  {
    question: "Is Quant free?",
    answer: "Yes! You can get started with Quant and explore the features available to you. Our goal is to make academic life easier and more accessible for students.",
  },
  {
    question: "What if my school or course isn't supported yet?",
    answer:
      "We're still growing! If your school or course isn't available yet, let us know. Your feedback helps us understand where students need Quant most as we expand to support more schools and courses.",
  },
  {
    question: "What is Quant Community?",
    answer: "Quant Community is a space for students to connect, share ideas, learn from one another, and grow together beyond the classroom. It's about building a community where students can support one another academically and make the university experience better.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="px-4 py-10 sm:px-6 sm:py-14">
      <div className="relative mx-auto max-w-6xl">
        <img
          src={questionMark}
          alt=""
          aria-hidden="true"
          className="absolute right-2 top-0 w-[88px] md:hidden"        />
        <div className="flex items-center gap-2 text-[11px] text-quant-ink sm:text-xs">
          <span aria-hidden="true" className="size-[7px] rounded-full bg-quant-ink" />
          <span>FAQs</span>
        </div>

        <h2 className="mt-4 max-w-[480px] text-[28px] font-normal leading-[1.1] text-quant-ink sm:text-5xl md:text-[56px]">
          Frequently<br className="md:hidden" /> Asked Questions
        </h2>

        <div className="mt-10 grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] lg:gap-16">
          <img
            src={questionMark}
            alt=""
            aria-hidden="true"
            className="hidden w-[260px] justify-self-center md:block"
          />

          <div className="flex flex-col gap-2.5">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;

              return (
                <div key={faq.question} className="rounded-2xl bg-[#F4FAFF] px-5 py-4 sm:px-6">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span
                      className={`text-base text-quant-blue sm:text-lg ${isOpen ? "font-medium" : ""}`}
                    >
                      {faq.question}
                    </span>
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-quant-blue text-white">
                      {isOpen ? (
                        <X aria-hidden="true" size={16} />
                      ) : (
                        <Plus aria-hidden="true" size={16} />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[520px] pb-1 pt-3 text-sm leading-relaxed text-[#8A8A8A] sm:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
