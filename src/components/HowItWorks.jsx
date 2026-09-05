import { useState } from "react";
import Iphone18 from "../assets/18.png";
import Iphone17 from "../assets/17.png";
import Iphone16 from "../assets/16.png";
import addIcon from "../assets/add_icon.png";
import targetIcon from "../assets/target_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";
import zigzag from "../assets/zigzag.png";
import line1 from "../assets/line_1.png";
import line2 from "../assets/line_2.png";

import { FaWhatsapp } from "react-icons/fa";
import FadeUP from "./FadeUp";

const steps = [
  {
    icon: addIcon,
    title: "Create Your Academic Profile",
    description:
      "Tell Quant what you study, your department, level, and current courses. This allows the platform to personalize summaries, deadlines, materials, and recommendations specifically for your academic journey.",
    image: Iphone18,
    hoverBg: "hover:bg-[#EDFFF9]",
    imageBg: "group-hover:bg-[#00E59F]",
    accentColor: "#00E59F",
    alt: "step 1",
  },
  {
    icon: targetIcon,
    title: "Set Your CGPA Goal",
    description:
      "Define the CGPA you're working towards and Quant will calculate the performance level required to reach it. You'll always know whether you're on track and what needs attention before it's too late.",
    image: Iphone17,
    hoverBg: "hover:bg-[#FFF2FE]",
    imageBg: "group-hover:bg-[#910383]",
    accentColor: "#910383",
    alt: "step 2",
  },
  {
    icon: whatsappIcon,
    title: "Learn Through WhatsApp",
    description:
      "Simply send a message whenever you need help. Get lecture summaries, course PDFs, assignment reminders, timetable information, and academic progress updates directly inside WhatsApp.",
    image: Iphone16,
    hoverBg: "hover:bg-[#DAE1FF]",
    imageBg: "group-hover:bg-[#4A42FF]",
    accentColor: "#0225B6",
    alt: "step 3",
  },
];

export default function HowItWorksSection() {
  const [ctaColor, setCtaColor] = useState("#212121");

  return (
    <FadeUP>
      <section
        id="how-it-works"
        className="w-full bg-[#FCFCFC] py-14 md:py-20 px-4 sm:px-6 flex flex-col items-center gap-8 md:gap-12"
      >
        <div className="flex flex-col items-center">
          <h2 className="font-code text-3xl sm:text-4xl md:text-[42px] font-semibold text-black text-center">
            How Quant Works
          </h2>
          <img src={zigzag} alt="" className="mt-2 w-40 sm:w-52 md:w-56.5" />
        </div>

        <div className="flex w-full max-w-6xl flex-col gap-6 items-stretch md:flex-row md:gap-8 md:hover:items-end">
          {steps.map(
            ({
              icon,
              title,
              description,
              image,
              hoverBg,
              imageBg,
              accentColor,
              alt,
            }) => (
              <div
                key={title}
                onMouseEnter={() => setCtaColor(accentColor)}
                onMouseLeave={() => setCtaColor("#212121")}
                className={`group relative flex-1 overflow-hidden rounded-2xl bg-[#F4F8FF] ${hoverBg} flex min-h-105 cursor-pointer flex-col justify-between p-5 pr-0 pb-0 transition-colors duration-500 sm:min-h-115`}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <img src={icon} alt="" width={24} className="shrink-0" />
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-[#212121] leading-6">
                      {title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#212121] pr-2 transition-all duration-500 sm:pr-4 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100">
                    {description}
                  </p>
                </div>

                <div
                  style={{ "--card-accent": accentColor }}
                  className={`relative z-10 mt-5 overflow-hidden rounded-2xl transition-colors duration-500 bg-(--card-accent) md:mt-6 md:bg-white ${imageBg} md:group-hover:bg-(--card-accent) pb-4`}
                >
                  <img
                    src={line1}
                    alt=""
                    className="bg-transparent absolute -top-8.25 left-0 w-[377.69px] h-[338.71px] rotate-[1.58deg] sm:w-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none z-0"
                  />
                  <img
                    src={line2}
                    alt=""
                    className="bg-transparent absolute -bottom-1 -left-5 rounded-[40px] w-[377.69px] h-[338.71px] sm:w-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none z-0"
                  />

                  <div className="relative flex justify-center transition-all duration-500 md:justify-end md:group-hover:justify-center md:group-hover:bottom-4">
                    <img
                      src={image}
                      alt={alt}
                      width={220}
                      height={420}
                      className="relative z-10 h-auto w-44 object-contain sm:w-52 md:w-55 md:-right-5 md:group-hover:right-0"
                    />
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        <a
          href=" https://wa.me/2349135622583"
          style={{ backgroundColor: ctaColor }}
          className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center gap-2 text-base sm:text-[20px] font-medium hover:opacity-90 transition-all duration-500"
        >
          <FaWhatsapp />
          <span>Get started</span>
        </a>
      </section>
    </FadeUP>
  );
}
