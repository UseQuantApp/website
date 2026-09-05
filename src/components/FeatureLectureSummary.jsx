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

              <a
                href=" https://wa.me/2349135622583"
                className="inline-flex items-center gap-2.5 bg-[#910383] text-white font-semibold text-base px-6 py-4 rounded-xl hover:opacity-90 transition-colors w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Try Quant now
              </a>
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
