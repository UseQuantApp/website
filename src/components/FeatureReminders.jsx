import Phone from "../assets/16.png";
import Clock from "../assets/clock.png";
import FadeUp from "./FadeUp";
import { motion } from "framer-motion";

export default function FeatureReminders() {
  return (
    <FadeUp>
      <section
        id="features"
        className="relative w-full bg-[#EEEDFF] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 lg:py-32">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
            <div className="relative flex justify-center w-full lg:w-1/2 shrink-0">
              <div className="relative bg-[#4A42FF] hover:opacity-90 p-8 pt-0 rounded-[34px] shadow-lg w-full max-w-105">
                <img
                  src={Phone}
                  alt="Reminders Feature"
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
                  <div className="hidden lg:block absolute -bottom-16 -left-16 w-37 pointer-events-none">
                    <img
                      src={Clock}
                      alt="Clock"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="lg:hidden absolute -bottom-20 -right-10 w-32.5 pointer-events-none">
                    <img
                      src={Clock}
                      alt="Clock"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full lg:w-1/2 lg:max-w-xl">
              <p className="text-[#4A42FF] font-bold text-sm md:text-base tracking-widest uppercase">
                Never Miss A Deadline
              </p>

              <div className="flex flex-col gap-2">
                <p className="text-[32px] md:text-[38px] leading-[1.2] font-normal text-[#4A42FF]">
                  Get reminders for:
                </p>

                <ul className="flex flex-col gap-1 pl-1">
                  {["Assignments", "Tests", "Submissions"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="text-[#4A42FF] text-xl font-bold leading-none">
                        ·
                      </span>
                      <span className="text-[32px] md:text-[38px] leading-[1.2] font-extrabold text-[#4A42FF]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
              type="button"
              disabled
              className="inline-flex items-center gap-2.5 bg-[#4A42FF] text-white font-semibold text-base px-6 py-4 rounded-xl w-fit cursor-default"
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

        <div className="lg:flex md:flex hidden justify-center lg:-mb-8 md:-mb-7 max-[800px]:-mb-5 w-full pointer-events-none select-none overflow-hidden text-[#b9cef9]">
          <p className="font-bold text-[10.5vw] leading-none whitespace-nowrap opacity-60">
            DAILY REMINDERS
          </p>
        </div>
      </section>
    </FadeUp>
  );
}
