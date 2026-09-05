import trueIcon from "../assets/true.png";
import falseIcon from "../assets/false.png";
import zigzag from "../assets/zigzag.png";
import FadeUp from "./FadeUp";

const features = [
  { name: "Course Directory Access", free: true, pro: true },
  { name: "Basic Topic Summaries", free: true, pro: true },
  { name: "View Assignment Deadlines", free: true, pro: true },
  { name: "Unlimited Lecture Summaries", free: false, pro: true },
  { name: "Download Course PDFs", free: false, pro: true },
  { name: "Audio Voice Summaries", free: false, pro: true },
  { name: "Custom CGPA Goal Tracking", free: false, pro: true },
  { name: "Academic Risk Alerts", free: false, pro: true },
  { name: "Priority Academic Updates", free: false, pro: true },
  { name: "Full Timetable Access", free: false, pro: true },
];

export default function Pricing() {
  return (
    <FadeUp>
    <section
      id="pricing"
      className="w-full bg-[#F4F8FF] py-14 md:py-20 px-4 sm:px-6 flex flex-col items-center gap-8 md:gap-12"
    >
      <div className="flex flex-col items-center">
        <h2 className="font-code text-3xl sm:text-4xl md:text-[42px] font-semibold text-black text-center">
          Pricing
        </h2>
        <img src={zigzag} alt="" className="mt-2 w-40 sm:w-52 md:w-56.5" />
      </div>
      <div className="w-[80vw] relative md:flex flex-col bg-[#212121] text-white rounded-xl overflow-hidden shadow">
        <div className="flex border-b border-[#555]">
          <div className="w-[52%] px-8 py-6 font-semibold text-xl">
            Features
          </div>

          <div className="w-[24%] border-l border-[#555] px-4 py-6 text-center font-semibold text-xl">
            Free
          </div>

          <div className="w-[24%] border-l border-[#555] px-4 py-6 text-center font-semibold text-xl">
            Pro
          </div>
        </div>

        {features.map((feature) => (
          <div key={feature.name} className="flex">
            <div className="w-[52%] px-8 py-6 text-[18px]">{feature.name}</div>

            <div className="w-[24%] border-l border-[#555] flex items-center justify-center">
              {feature.free ? (
                <img src={trueIcon} alt="Yes" className="h-6 w-6" />
              ) : (
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF2020]">
                  <img src={falseIcon} alt="No" className="h-6 w-6" />
                </span>
              )}
            </div>

            <div className="w-[24%] border-l border-[#555] flex items-center justify-center">
              {feature.pro ? (
                <img src={trueIcon} alt="Yes" className="h-6 w-6" />
              ) : (
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF2020]">
                  <img src={falseIcon} alt="No" className="h-6 w-6" />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
    </FadeUp>
  );
}
