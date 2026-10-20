import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, GraduationCap, Send } from "lucide-react";
import stepOnePhone from "../../assets/step-1.png";
import stepTwoPhone from "../../assets/step-2.png";
import stepThreePhone from "../../assets/step-3.png";
import stepFourPhone from "../../assets/step-4.png";
import numeralOne from "../../assets/step-num-1.png";
import numeralTwo from "../../assets/step-num-2.png";
import numeralThree from "../../assets/step-num-3.png";
import numeralFour from "../../assets/step-num-4.png";

const steps = [
  {
    id: 1,
    title: "Click ‘Try Quant Now’ Button",
    text: "This Opens Your Direct Chat With Quant On WhatsApp.",
    Icon: ArrowUpRight,
    cardClass: "bg-[#FFF0E5]",
    titleClass: "text-quant-orange",
    iconClass: "bg-quant-orange",
    numeral: numeralOne,
    phone: stepOnePhone,
    phoneAlt: "The Quant homepage on a phone, showing the Try Quant now button",
  },
  {
    id: 2,
    title: "Send “Hi Quant”",
    text: "Message Quant, Get Onboarded With Immediate Response.",
    Icon: Send,
    cardClass: "bg-[#EAF3FF]",
    titleClass: "text-quant-blue",
    iconClass: "bg-quant-blue",
    numeral: numeralTwo,
    phone: stepTwoPhone,
    phoneAlt: "A WhatsApp chat where Quant welcomes a new student after they send Hi Quant",
  },
  {
    id: 3,
    title: "Set Academic Profile",
    text: "Select Your University, Department, And Current Level To",
    Icon: GraduationCap,
    cardClass: "bg-[#E3F6FF]",
    titleClass: "text-quant-cyan",
    iconClass: "bg-quant-cyan",
    numeral: numeralThree,
    numeralClass: "h-[36%]",
    phone: stepThreePhone,
    phoneAlt:
      "A WhatsApp chat where Quant asks for the student's name, email, matric number, university, department and level",
  },
  {
    id: 4,
    title: "Start Studying",
    text: "Pull Course Materials, Track Your CGPA, And Get Reminders All In WhatsApp.",
    Icon: BookOpen,
    cardClass: "bg-[#EDEBFF]",
    titleClass: "text-quant-violet",
    iconClass: "bg-quant-violet",
    numeral: numeralFour,
    numeralClass: "h-[32%]",
    phone: stepFourPhone,
    phoneAlt: "A WhatsApp chat where a student asks Quant for a thermodynamics PDF and receives it",
  },
];

function StepCard({ step, index }) {
  const { Icon } = step;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`quant-dot-grid relative aspect-square overflow-hidden rounded-3xl ${step.cardClass}`}
    >
      <img
        src={step.numeral}
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute left-[1%] top-0 w-auto select-none [filter:drop-shadow(-3px_3px_0_white)] ${step.numeralClass ?? "h-[38%]"}`}      />

      <h3
        className={`absolute inset-x-0 top-[9%] text-center text-base sm:text-lg lg:text-xl ${step.titleClass}`}
      >
        {step.title}
      </h3>

      <img
        src={step.phone}
        alt={step.phoneAlt}
        className="absolute left-1/2 top-[22%] w-[66%] -translate-x-1/2"
      />

      <div className="absolute inset-x-[6.5%] bottom-[5%] flex items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:gap-4 sm:p-4">
        <span
          className={`grid size-10 shrink-0 place-items-center rounded-full text-white sm:size-12 ${step.iconClass}`}
        >
          <Icon aria-hidden="true" size={20} />
        </span>
        <p className="text-xs leading-snug text-[#222222] sm:text-sm lg:text-base">{step.text}</p>
      </div>
    </motion.article>
  );
}

export default function GetStarted() {
  return (
    <section id="how-it-works" className="px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2 text-[11px] text-quant-ink sm:text-xs">
          <span aria-hidden="true" className="size-[7px] rounded-full bg-quant-ink" />
          <span>GET STARTED</span>
        </div>

        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2 className="max-w-[560px] text-4xl font-normal leading-[1.1] text-quant-ink sm:text-5xl md:text-[56px]">
            Up And Running In Under Two Minutes.
          </h2>
          <p className="max-w-[380px] text-sm leading-relaxed text-quant-ink">
            No App To Download. No Menus To Dig Through. Quant Works Right Inside Your WhatsApp
            Chat.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
