import Hand from "../assets/hand.png";
import Lasu from "../assets/lasu.png";
import Unilag from "../assets/unilag.png";
import CurvyDesktop from "../assets/curvy-line-1.png";
import CurvyMobile from "../assets/curvy-line-2.png";
import Lasued from "../assets/lasued.png";
import UI from "../assets/ui.png";
import Lasustech from "../assets/lasustech.png";
import Yabatech from "../assets/yabatech.png";
import Alhikmah from "../assets/alhikmah.png";
import BlueBadge from "../assets/badge.png";
import FadeUp from "./FadeUp";

export default function Hero() {
  return (
<FadeUp>
  <section className="relative mt-24 w-full overflow-hidden bg-white">
    <div className="mx-auto max-w-7xl px-6">

      {/* Launch Status */}
      <div className="mb-3 flex justify-start">
        <div className="flex max-w-10xl items-start gap-2.5 rounded-full border border-[#FF6600]/35 bg-[#FF6600]/8 px-4 py-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
          <span className="relative mt-[5px] flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6600] opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6600]" />
          </span>

          <p>
            <span className="font-semibold text-[#FF6600]">
              Quant is under construction....
            </span>{" "}
            Join our community and be among the first to get early access.
          </p>
        </div>
      </div>

      {/* Hero */}
      <div className="pt-4 pb-16 lg:pt-10 lg:pb-0">

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-0">

          {/* Left Content */}
          <div className="relative flex flex-col items-start justify-center">
            <h1 className="text-[60px] font-bold leading-[1.05] tracking-tight text-gray-900 xl:text-[85px]">
              Your{" "}
              <span className="text-[#4A42FF]">
                Academic <br />
                Assistant
              </span>{" "}
              Inside <br />
              WhatsApp
            </h1>

            {/* Curvy Arrow */}
            <div className="pointer-events-none absolute -right-15 top-[42%] z-10">
              <img
                src={CurvyDesktop}
                alt=""
                aria-hidden="true"
                className="w-50 object-contain"
              />
            </div>

            <p className="mt-7 max-w-105 text-base leading-relaxed text-gray-500">
              Get lecture summaries, assignment reminders, PDFs, timetable
              access, and CGPA tracking directly from WhatsApp.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://chat.whatsapp.com/HG0lfoJxzudGGhUYHqieV4"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#FF6600] px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="8" cy="6.5" r="2.3" />
                  <circle cx="16" cy="6.5" r="2.3" />
                  <path d="M5.2 19c.2-3.6 1.1-6.1 2.8-7.5" />
                  <path d="M18.8 19c-.2-3.6-1.1-6.1-2.8-7.5" />
                  <path d="M7.8 11.2c.7 1.7 2.1 2.8 4.2 2.8s3.5-1.1 4.2-2.8" />
                  <path d="M5.8 12.2c1.3 2.7 3.3 4.1 6.2 4.1s4.9-1.4 6.2-4.1" />
                  <path d="M8.5 15.2c.9 1.2 2.1 1.8 3.5 1.8s2.6-.6 3.5-1.8" />
                </svg>

                Join the Quant Community
              </a>
            </div>

            {/* Decorative Stars */}
            <span
              className="pointer-events-none absolute -bottom-15 -left-2.5 select-none text-4xl leading-none text-[#00C8FF]"
              aria-hidden="true"
            >
              ✦
            </span>

            <span
              className="pointer-events-none absolute -bottom-27.5 left-15 select-none text-5xl leading-none text-[#FF6B35]"
              aria-hidden="true"
            >
              ✶
            </span>
          </div>

          {/* Right Visual */}
          <div className="relative flex items-center justify-center">
            <img
              src={BlueBadge}
              alt=""
              aria-hidden="true"
              className="absolute left-3/4 top-19 z-10 w-37.5 -translate-x-1/2"
            />

            <img
              src={Hand}
              alt="Quant WhatsApp Bot on a phone"
              className="relative z-0 w-full max-w-130 scale-180 animate-[float_4s_ease-in-out_infinite] object-contain"
            />

            <span
              className="pointer-events-none absolute right-[-20px] top-[38%] hidden select-none text-3xl leading-none text-[#00C8FF] sm:block"
              aria-hidden="true"
            >
              ✦
            </span>
          </div>
        </div>

        {/* Desktop Logos */}
        <div className="mt-10 hidden justify-center lg:flex">
          <LogosPill />
        </div>

        {/* Mobile */}
        <div className="flex flex-col items-center pb-0 text-center lg:hidden">

          <h1 className="w-full max-w-100 text-[50px] font-bold leading-[1.2] tracking-tight text-gray-900 sm:text-[50px] md:text-[82px]">
            Your{" "}
            <span className="text-[#4A42FF]">
              Academic <br />
              Assistant
            </span>{" "}
            Inside <br />
            WhatsApp
          </h1>

          <p className="mt-5 max-w-90 text-base leading-relaxed text-gray-500 md:text-xl">
            Get lecture summaries, assignment reminders, PDFs, timetable
            access, and CGPA tracking directly from WhatsApp.
          </p>

          {/* Mobile CTA */}
          <a
            href="https://chat.whatsapp.com/HG0lfoJxzudGGhUYHqieV4"
            className="mt-7 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#FF6600] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="8" cy="6.5" r="2.3" />
              <circle cx="16" cy="6.5" r="2.3" />
              <path d="M5.2 19c.2-3.6 1.1-6.1 2.8-7.5" />
              <path d="M18.8 19c-.2-3.6-1.1-6.1-2.8-7.5" />
              <path d="M7.8 11.2c.7 1.7 2.1 2.8 4.2 2.8s3.5-1.1 4.2-2.8" />
              <path d="M5.8 12.2c1.3 2.7 3.3 4.1 6.2 4.1s4.9-1.4 6.2-4.1" />
              <path d="M8.5 15.2c.9 1.2 2.1 1.8 3.5 1.8s2.6-.6 3.5-1.8" />
            </svg>

            Join the Quant Community
          </a>

          {/* Logos */}
          <div className="mt-8">
            <LogosPill />
          </div>

          {/* Mobile Curvy Arrow */}
          <div className="pointer-events-none -ml-60 -mt-30 flex justify-center max-[768px]:-ml-60">
            <img
              src={CurvyMobile}
              alt=""
              aria-hidden="true"
              className="w-25 object-contain"
            />
          </div>

          {/* Mobile Product Visual */}
          <div className="relative mt-2 flex w-full justify-center">

            <img
              src={BlueBadge}
              alt=""
              aria-hidden="true"
              className="absolute left-5/8 top-45 z-10 w-37.5 -translate-x-1/2 max-[740px]:top-30 max-[740px]:w-30 max-[474px]:top-20"
            />

            <img
              src={Hand}
              alt="Quant WhatsApp Bot on a phone"
              className="w-full object-contain md:w-225"
            />

            <span
              className="pointer-events-none absolute left-2 top-[30%] select-none text-2xl leading-none text-[#00C8FF]"
              aria-hidden="true"
            >
              ✦
            </span>

            <span
              className="pointer-events-none absolute bottom-[15%] right-4 select-none text-xl leading-none text-[#FF6B35]"
              aria-hidden="true"
            >
              ✦
            </span>

            <span
              className="pointer-events-none absolute bottom-[10%] left-6 select-none text-3xl leading-none text-[#FF6B35]"
              aria-hidden="true"
            >
              ✶
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</FadeUp>
  );
}

function LogosPill() {
  return (
    <div className="group relative lg:-top-12 md:top-0 inline-flex items-center gap-0 bg-[#4A42FF] text-white py-2.5 px-4 rounded-full shadow-[0_4px_16px_rgba(74,66,255,0.35)] transition-all duration-300 cursor-default">
      <div className="flex -space-x-2.5 transition-all duration-300">
        <img
          src={Lasu}
          alt="LASU"
          className="w-9 h-9 rounded-full border-2 border-[#4A42FF] bg-white object-cover shrink-0"
        />
        <img
          src={Unilag}
          alt="Unilag"
          className="w-9 h-9 rounded-full border-2 border-[#4A42FF] bg-white object-cover shrink-0"
        />
        <img
          src={Lasued}
          alt="Lasued"
          className="w-9 h-9 hidden group-hover:block rounded-full border-2 border-[#4A42FF] bg-white object-cover shrink-0  transition-all duration-300 overflow-hidden"
        />
        <img
          src={UI}
          alt="UI"
          className="w-9 h-9 hidden group-hover:block rounded-full border-2 border-[#4A42FF] bg-white object-cover shrink-0 transition-all duration-300 overflow-hidden"
        />
        <img
          src={Lasustech}
          alt="Lasustech"
          className="w-9 h-9 hidden group-hover:block rounded-full border-2 border-[#4A42FF] bg-white object-cover shrink-0  transition-all duration-300 overflow-hidden"
        />{" "}
        <img
          src={Yabatech}
          alt="Yabatech"
          className="w-9 h-9 hidden group-hover:block rounded-full border-2 border-[#4A42FF] bg-white object-cover shrink-0  transition-all duration-300 overflow-hidden"
        />{" "}
        <img
          src={Alhikmah}
          alt="Alhikmah"
          className="w-9 h-9 hidden group-hover:block rounded-full border-2 border-[#4A42FF] bg-white object-cover shrink-0   transition-all duration-300 overflow-hidden"
        />
      </div>

      <span className="ml-1 flex items-center justify-center text-sm font-bold w-9 h-9 rounded-full bg-white text-[#212121] shrink-0 group-hover:hidden transition-all duration-200">
        +50
      </span>
      <span className=" hidden items-center justify-center text-sm font-bold w-9 h-9 rounded-full bg-white text-[#212121] shrink-0 group-hover:flex -ml-2 transition-all duration-200">
        +45
      </span>
    </div>
  );
}
