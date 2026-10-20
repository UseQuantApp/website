import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gatheringPhoto from "../../assets/community-1.png";
import lectureHallPhoto from "../../assets/community-2.png";
import selfiePhoto from "../../assets/community-3.png";
import { COMMUNITY_URL } from "../../constants/links";

const photos = [
  { src: gatheringPhoto, alt: "Students studying together on the grass" },
  { src: lectureHallPhoto, alt: "Three students working on a laptop in a lecture hall" },
  { src: selfiePhoto, alt: "Students taking a selfie together on campus" },
];

// Each group repeats the photos so it is wider than any screen and the loop stays seamless.
const group = [...photos, ...photos];

function PhotoGroup({ hidden = false }) {
  return (
    <div className="flex shrink-0 gap-3 pr-3" aria-hidden={hidden || undefined}>
      {group.map((photo, index) => (
        <img
          key={index}
          src={photo.src}
          alt={hidden || index >= photos.length ? "" : photo.alt}
          loading="lazy"
className="aspect-[411/419] w-[260px] shrink-0 rounded-3xl object-cover sm:w-[340px]"        />
      ))}
    </div>
  );
}

export default function Community() {
  return (
    <section id="community" className="px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2 text-[11px] text-quant-ink sm:text-xs">
          <span aria-hidden="true" className="size-[7px] rounded-full bg-quant-ink" />
          <span>BEYOND THE APP</span>
        </div>

        <h2 className="mt-4 max-w-5xl text-4xl font-normal leading-[1.1] text-quant-ink sm:text-5xl md:text-[56px]">
          Your University Experience Is Bigger Than Your Lecture Notes.
        </h2>
        <p className="mt-5 text-sm text-quant-ink sm:text-base">
          There’s So Much To Learn Outside The Classroom, Too.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="quant-dot-grid mt-8 overflow-hidden rounded-3xl bg-[#E8F8FF] pb-5 pt-5 sm:pb-6 sm:pt-6"
        >
          <div className="flex flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-12">
            <p className="text-base text-quant-ink sm:text-xl">
              You Don’t Have To Take Every Step Alone!
            </p>
            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-4 rounded-full bg-white py-2 pl-5 pr-2 text-sm text-quant-ink shadow-sm transition-opacity hover:opacity-90"
            >
              Explore Quant Community
              <span className="grid size-10 place-items-center rounded-full bg-quant-orange text-white">
                <ArrowUpRight aria-hidden="true" size={18} />
              </span>
            </a>
          </div>

          <div className="mt-6 overflow-hidden sm:mt-8">
            <div className="flex w-max animate-[quant-ticker-scroll_45s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none">
              <PhotoGroup />
              <PhotoGroup hidden />
            </div>
          </div>

          <div className="mt-5 px-5 sm:px-12">
            <div className="mx-auto max-w-[920px] rounded-2xl bg-white p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-quant-violet sm:text-lg">
                Quant Community Brings Students Together Around Learning, Opportunities,
                Technology, Careers And Personal Growth. It’s A Space To Discover Useful
                Information, Connect With Other Students And Be Part Of Something That Helps You
                Move Forward.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
