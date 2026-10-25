import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import phoneMockup from "../../assets/hero-phone.webp";
import { WHATSAPP_URL } from "../../constants/links";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex flex-col items-center px-9 pb-14 pt-28 text-center sm:px-5 sm:pt-32"
      >
        <div className="flex items-center gap-2 text-[11px] text-quant-ink sm:text-xs">
          <span aria-hidden="true" className="size-[7px] rounded-full bg-quant-ink" />
          <span>MEET QUANT</span>
        </div>

        <h1 className="mt-4 max-w-5xl text-[30px] font-normal leading-[1.1] text-quant-ink sm:text-5xl md:text-[56px]">
          <span className="md:block">
            Your <span className="text-quant-violet">Academic Assistant</span>
          </span>
          {" "}
          <span className="md:mt-1 md:block">Inside WhatsApp</span>
        </h1>

        <p className="mt-4 max-w-[420px] text-sm leading-[1.55] text-quant-ink">
          Get Lecture Summaries, Assignment Reminders, PDFs, Timetable Access, And CGPA Tracking
          Directly From WhatsApp.
        </p>

        <div className="mt-5 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-quant-blue px-5 text-sm text-white transition-opacity hover:opacity-90 sm:w-auto"
          >
            <FaWhatsapp aria-hidden="true" size={15} />
            Try Quant now
          </a>
          <a
            href="#how-it-works"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-quant-line bg-quant-soft px-5 text-sm text-quant-blue transition-colors hover:bg-white sm:w-auto"
          >
            see how it works
          </a>
        </div>

        <div className="relative mt-8 flex w-full max-w-[480px] justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-x-[8%] top-[10%] -z-10 aspect-square rounded-full bg-quant-blue/15 blur-[72px]"
          />
          <img
            src={phoneMockup}
            alt="A WhatsApp conversation with Quant showing lecture notes, course PDFs, and student support"
            className="h-auto w-[85%] max-w-[480px] object-contain sm:w-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
