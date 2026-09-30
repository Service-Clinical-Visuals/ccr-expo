import React from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import Typography from "./Typography";

export interface ProductCardTheme {
  bar: string;
  iconBox: string;
  label: string;
}

export const hemodialysisTheme: ProductCardTheme = {
  bar: "from-[#0EA5E9] to-[#4F46E5]",
  iconBox: "bg-[#F0F9FF] text-[#0369A1]",
  label: "text-[#075985]",
};

export const urologyTheme: ProductCardTheme = {
  bar: "from-[#10B981] to-[#0D9488]",
  iconBox: "bg-[#ECFDF5] text-[#047857]",
  label: "text-[#047857]",
};

interface ProductCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  categoryLabel: string;
  icon: LucideIcon;
  status?: string;
  href?: string;
  theme?: ProductCardTheme;
}

export default function ProductCard({
  title,
  description,
  tags,
  image,
  categoryLabel,
  icon: Icon,
  status = "In Stock",
  href = "#contact",
  theme = hemodialysisTheme,
}: ProductCardProps) {
  return (
    <article className="group w-full h-full flex flex-col bg-white rounded-[6px] min-[2500px]:rounded-[10px] min-[3800px]:rounded-[14px] border border-[#CBD5E1] overflow-hidden hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-shadow duration-300">
      {/* Gradient top accent */}
      <div className={`h-1 min-[2500px]:h-1.5 min-[3800px]:h-2 w-full bg-linear-to-r ${theme.bar} shrink-0`} />

      <div className="flex flex-col flex-1 p-4 min-[2500px]:p-7 min-[3800px]:p-10">
        {/* Category & Status */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-[2500px]:gap-3 min-w-0">
            <span
              className={`flex items-center justify-center w-6 h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 rounded-[4px] min-[2500px]:rounded-[6px] shrink-0 ${theme.iconBox}`}
            >
              <Icon className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7" strokeWidth={2} />
            </span>
            <Typography variant="span" color="none" className={`uppercase tracking-[0.04em] truncate ${theme.label}`}>
              {categoryLabel}
            </Typography>
          </div>
          <Typography
            variant="span"
            color="none"
            weight="semibold"
            className="shrink-0 px-2 py-0.5 min-[2500px]:px-3.5 min-[2500px]:py-1 min-[3800px]:px-5 min-[3800px]:py-1.5 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] text-[#047857]"
          >
            {status}
          </Typography>
        </div>

        {/* Image */}
        <div className="mt-3 min-[2500px]:mt-5 min-[3800px]:mt-7 w-full aspect-[476/245] overflow-hidden bg-white">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
          />
        </div>

        {/* Content */}
        <Typography
          variant="h2"
          color="dark"
          weight="bold"
          className="mt-5 min-[2500px]:mt-8 min-[3800px]:mt-10 !font-semibold leading-[1.35] "
        >
          {title}
        </Typography>
        <Typography variant="p" color="none" className="mt-3 min-[2500px]:mt-5 text-[#475569] line-clamp-3">
          {description}
        </Typography>

        <div className="flex flex-wrap gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4 mt-4 min-[2500px]:mt-6 min-[3800px]:mt-8 mb-6 min-[2500px]:mb-10">
          {tags.map((tag) => (
            <Typography
              key={tag}
              variant="span"
              color="none"
              weight="medium"
              className="px-2 py-1 min-[2500px]:px-3.5 min-[2500px]:py-1.5 min-[3800px]:px-5 min-[3800px]:py-2 rounded-[4px] min-[2500px]:rounded-[6px] bg-[#F1F5F9] text-[#334155]"
            >
              {tag}
            </Typography>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <Link
        href={href}
        className="mt-auto flex items-center gap-2 px-6 py-4 min-[2500px]:px-9 min-[2500px]:py-6 min-[3800px]:px-12 min-[3800px]:py-8 bg-[#F8FAFC] text-[#0F172A] hover:text-[var(--color-primary)] transition-colors"
      >
        <Typography variant="h5" color="none">
          View Product
        </Typography>
        <ArrowRight
          className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          strokeWidth={2}
        />
      </Link>
    </article>
  );
}
