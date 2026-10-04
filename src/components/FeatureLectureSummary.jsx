import Phone from "../assets/18.png";
import Mascot from "../assets/mascot.png";
import FadeUp from "./FadeUp";
import { motion } from "framer-motion";

export default function FeatureLectureSummary() {
  return (
    <FadeUp>
      <section
        id="features"
        className="relative w-full bg-[#F9E8F9] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 lg:py-32">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
            <div className="relative flex justify-center w-full lg:w-1/2 shrink-0">
              <div className="relative bg-[#910383]  hover:opacity-90 p-8 pt-0 rounded-[34px] shadow-lg w-full max-w-105">
                <img
                  src={Phone}
                  alt="Lecture Summary Feature"
                  className="w-full object-contain"
                />

                <motion.div
                  className="pointer-events-none"
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="hidden lg:block absolute -bottom-20 -right-12 w-[148.37px] pointer-events-none">
                    <img
                      src={Mascot}
                      alt="Quant Mascot"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="lg:hidden absolute -bottom-12 -left-10 w-[130.12px] pointer-events-none">
                    <img
                      src={Mascot}
                      alt="Quant Mascot"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full lg:w-1/2 lg:max-w-xl md:text-center lg:text-left md:items-center lg:items-start  sm:text-left">
              <p className="text-[#910383] font-bold text-sm md:text-lg tracking-0 uppercase ">
                Smart Lecture Summaries
              </p>

              <h2 className="text-[32px] md:text-[46px] leading-[1.2] tracking-0 font-normal text-[#910383]   sm:w-[80%]">
                Convert lengthy lecture materials into{" "}
                <span className="font-bold">simple summaries</span> you can read
                in minutes.
              </h2>

              <button
              type="button"
              disabled
              className="inline-flex items-center gap-2.5 bg-[#910383] text-white font-semibold text-base px-6 py-4 rounded-xl w-fit cursor-default"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 shrink-0"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>

              Coming Soon
            </button>
            </div>
          </div>
        </div>

        <div className="lg:flex md:flex hidden justify-center lg:-mb-8 md:-mb-7 max-[800px]:-mb-5 max-[598px]:-mb-4 w-full pointer-events-none select-none overflow-hidden text-[#f2b8f2]">
          <p className="font-bold text-[10.5vw] max-[598px]:text-[10vw] leading-none whitespace-nowrap opacity-60">
            LECTURE SUMMARY
          </p>
        </div>
      </section>
    </FadeUp>
  );
}
