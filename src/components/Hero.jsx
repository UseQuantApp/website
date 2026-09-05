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
      <section className="relative w-full h-fit bg-white overflow-hidden px-0 mt-20">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 lg:pt-20 lg:pb-0 max-[1024px]:pb-0">
          <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:justify-between lg:gap-0">
            <div className="flex flex-col items-start justify-center relative">
              <h1 className="md:text-[60px] text-[30px] xl:text-[85px] md:font-bold xl: text-gray-900 leading-[1.05] tracking-tight">
                Your{" "}
                <span className="text-[#4A42FF]">
                  Academic <br /> Assistant
                </span>{" "}
                Inside <br /> WhatsApp
              </h1>

              <div className="absolute top-[42%] -right-15 z-10 pointer-events-none">
                <img
                  src={CurvyDesktop}
                  alt=""
                  aria-hidden="true"
                  className="w-50 object-contain"
                />
              </div>

              <p className="mt-7 text-base text-gray-500 leading-relaxed max-w-105">
                Get lecture summaries, assignment reminders, PDFs, timetable
                access, and CGPA tracking directly from WhatsApp.
              </p>

              <a
                href=" https://wa.me/2349135622583"
                className="mt-8 inline-flex items-center gap-2.5 bg-[#FF6600] text-white font-semibold text-base px-6 py-3.5 rounded-xl hover:opacity-90 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.24-1.44l-.37-.22-3.87 1.02 1.03-3.77-.24-.39A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5H7.5c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                </svg>
                Try Quant now
              </a>

              <span
                className="absolute -left-2.5 -bottom-15 text-[#00C8FF] text-4xl select-none pointer-events-none"
                style={{ lineHeight: 1 }}
              >
                ✦
              </span>
              <span
                className="absolute left-15 -bottom-27.5 text-[#FF6B35] text-5xl select-none pointer-events-none"
                style={{ lineHeight: 1 }}
              >
                ✶
              </span>
            </div>

            <div className="relative flex justify-center items-center">
              <img
                src={BlueBadge}
                alt=""
                className="absolute w-37.5 top-19 left-3/4 transform -translate-x-1/2 z-10 "
              />
              <img
                src={Hand}
                alt="Quant WhatsApp Bot on a phone"
                className="animate-[float_4s_ease-in-out_infinite] w-full scale-180 max-w-130 object-contain relative z-0"
              />

              <span
                className="hidden sm:absolute top-[38%] -right-5 text-[#00C8FF] text-3xl select-none pointer-events-none"
                style={{ lineHeight: 1 }}
              >
                ✦
              </span>
            </div>
          </div>

          <div className="hidden lg:flex justify-center mt-10">
            <LogosPill />
          </div>

          {/* Mobile view */}

          <div className="lg:hidden  flex flex-col justify-center items-center text-center pb-0">
            <h1 className=" w-100 text-[50px] sm:text-[50px] md:text-[82px] font-bold text-gray-900 leading-[1.2] tracking-tight self-center">
              Your{" "}
              <span className="text-[#4A42FF]">
                Academic <br /> Assistant
              </span>{" "}
              Inside <br /> WhatsApp
            </h1>

            <p className="mt-5 md:text-xl sm:text-base text-gray-500 leading-relaxed max-w-90">
              Get lecture summaries, assignment reminders, PDFs, timetable
              access, and CGPA tracking directly from WhatsApp.
            </p>

            <a
              href=" https://wa.me/2349135622583"
              className="mt-7 inline-flex items-center gap-2.5 bg-brand-orange text-white font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-orange-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.24-1.44l-.37-.22-3.87 1.02 1.03-3.77-.24-.39A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5H7.5c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
              </svg>
              Try Quant now
            </a>

            <div className="mt-8">
              <LogosPill />
            </div>

            <div className="lg:mt-4 md:-mt-30 md:-ml-60 max-[768px]:-ml-60 max-[768px]:-mt-30 flex justify-center pointer-events-none">
              <img
                src={CurvyMobile}
                alt=""
                aria-hidden="true"
                className="w-25 object-contain"
              />
            </div>

            <div className="relative mt-2 w-full flex justify-center">
              <img
                src={BlueBadge}
                alt=""
                className="absolute w-37.5 top-45 left-5/8 max-[740px]:w-30 max-[740px]:top-30 max-[474px]:top-20 transform -translate-x-1/2 z-10 "
              />

              <img
                src={Hand}
                alt="Quant WhatsApp Bot on a phone"
                className="w-full md:w-225  object-contain"
              />

              <span
                className="absolute left-2 top-[30%] text-[#00C8FF] text-2xl select-none pointer-events-none"
                style={{ lineHeight: 1 }}
              >
                ✦
              </span>
              <span
                className="absolute right-4 bottom-[15%] text-[#FF6B35] text-xl select-none pointer-events-none"
                style={{ lineHeight: 1 }}
              >
                ✦
              </span>
              <span
                className="absolute left-6 bottom-[10%] text-[#FF6B35] text-3xl select-none pointer-events-none"
                style={{ lineHeight: 1 }}
              >
                ✶
              </span>
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
