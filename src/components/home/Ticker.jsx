const tickerItems = [
  "Student Community",
  "Course PDFs",
  "Lecture Summaries",
  "Assignment Reminders",
  "CGPA Tracking",
  "Course Updates",
];

function TickerItems() {
  return (
    <span className="flex shrink-0 items-center gap-5 pr-5" aria-hidden="true">
      {tickerItems.map((item) => (
        <span key={item} className="flex shrink-0 items-center gap-5">
          <span>{item}</span>
          <span aria-hidden="true" className="text-[9px]">
            ●
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Ticker() {
  return (
    <div className="overflow-hidden bg-quant-cyan py-2 text-[13px] text-white sm:py-[9px] sm:text-sm">
      <div className="quant-ticker-motion flex w-max items-center">
        <TickerItems />
        <TickerItems />
      </div>
      <span className="sr-only">{tickerItems.join(" • ")}</span>
    </div>
  );
}
