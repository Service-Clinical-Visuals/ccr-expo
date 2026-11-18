"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Typography from "./Typography";
import { BASE_PATH } from "./Header";

interface PageBannerProps {
  title: string;
}

/** Inner-page hero: inset blue wave band below the fixed header with centered title + breadcrumb. */
const PageBanner = ({ title }: PageBannerProps) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-navy)] pt-[calc(var(--zs-header-h,110px)+3.5rem)] lg:pt-[calc(var(--zs-header-h,110px)+5rem)] min-[2500px]:pt-[calc(var(--zs-header-h,110px)+8rem)] pb-14 sm:pb-16 lg:pb-20 min-[2500px]:pb-28 min-[3800px]:pb-40">
      <div className="custom-container relative z-10 flex flex-col items-start gap-4 min-[2500px]:gap-6">
        <Typography
          variant="h1"
          color="white"
          className="uppercase leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {title}
        </Typography>

        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 min-[2500px]:gap-3 text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Link href={BASE_PATH} className="navbar text-white hover:text-white/75 transition-colors">
            Home
          </Link>
          <ChevronRight
            aria-hidden
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9"
          />
          <span className="navbar text-white">{title}</span>
        </nav>
      </div>
    </section>
  );
};

export default PageBanner;
