import React from "react";

/** Small pill label with a dot, used above section headings. */
export default function Badge({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 min-[2500px]:gap-3 px-3.5 min-[2500px]:px-6 py-1 min-[2500px]:py-2 rounded-full border border-gray-200 bg-white ${className}`}
    >
      <span className="block w-1.5 h-1.5 min-[2500px]:w-2.5 min-[2500px]:h-2.5 rounded-full bg-[var(--color-primary-dark)]" />
      <span className="uppercase tracking-wide text-[var(--color-secondary)] !text-[0.7rem] min-[2500px]:!text-[1.1rem] min-[3800px]:!text-[1.5rem]">
        {text}
      </span>
    </div>
  );
}
