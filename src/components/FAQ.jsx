import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import FadeUp from './FadeUp';
const faqs = [
  {
    question: "Do I need to download an app?",
    answer: "No. Quant works directly inside WhatsApp.",
  },
  {
    question: "Can I track my CGPA?",
    answer:
      "Yes. Quant calculates and monitors your progress towards your target CGPA.",
  },
  {
    question: "Does it work on low data?",
    answer:
      "Yes. Quant is designed to be lightweight and accessible even on slower networks.",
  },
  {
    question: "How do I get lecture summaries?",
    answer:
      "Simply send the topic or course material you need help with, and Quant will provide a concise summary directly in WhatsApp.",
  },
  {
    question: "Can I download the original lecture materials?",
    answer:
      "Yes. Pro users can request and receive course PDFs within WhatsApp.",
  },
  {
    question: "Do I need a premium plan to use Quant?",
    answer:
      "Yes, you can still access all the avialable features for now without subscription.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <FadeUp>
    <section
      id="faqs"
      className="w-full bg-white py-14 md:py-20 px-4 sm:px-6 flex flex-col items-center gap-8 md:gap-12"
    >
      <div className="flex flex-col items-center">
        <h2 className="font-code text-[42.38px] sm:text-4xl md:text-[42px] font-semibold text-black text-center">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="w-full max-w-3xl space-y-3 md:space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-[#F9F9F9] rounded-xl overflow-hidden hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full flex items-center justify-between px-5 sm:px-6 py-4 hover:bg-[#F9F9F9] transition-colors"
            >
              <span className="text-base text-[28px] sm:text-lg font-medium text-[#212121] text-left pr-4">
                {faq.question}
              </span>
              <FaChevronDown
                className={`${
                  openIdx === idx ? "text-[#979797]" : "text-[#141B34]"
                } shrink-0 transition-transform duration-300 text-sm ${
                  openIdx === idx ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIdx === idx && (
              <div className="px-5 sm:px-6 py-4 bg-[#F9F9F9] text-[#918F8F] text-[24px] sm:text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    </FadeUp>
  );
}
