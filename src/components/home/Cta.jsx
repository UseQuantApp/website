import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { COMMUNITY_URL, WHATSAPP_URL } from "../../constants/links";

export default function Cta() {
  return (
    <section className="px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-[260px] text-[28px] font-normal leading-[1.15] text-quant-ink sm:max-w-none sm:text-5xl md:text-[56px]">
          Ready To Take Control
          <br className="hidden md:block" /> Of Your Academic
          <br className="hidden md:block" /> Goals?
        </h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-quant-blue px-6 text-sm text-white transition-opacity hover:opacity-90"
          >
            <FaWhatsapp aria-hidden="true" size={16} />
            Try Quant now
          </a>

          <a
            href={COMMUNITY_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-4 sm:justify-between rounded-full border border-quant-line bg-white py-1.5 pl-5 pr-1.5 text-sm text-quant-ink shadow-sm transition-opacity hover:opacity-90"
          >
            Explore Quant Community
            <span className="grid size-9 place-items-center rounded-full bg-quant-orange text-white">
              <ArrowUpRight aria-hidden="true" size={18} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
