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
    <section className="w-full bg-[var(--color-background)] pt-[104px] sm:pt-[118px] lg:pt-[124px] min-[2500px]:pt-[190px] min-[3800px]:pt-[270px] px-3 sm:px-5 lg:px-8 min-[2500px]:px-12 min-[3800px]:px-16">
      <div
        className="relative w-full overflow-hidden bg-[var(--color-secondary)] bg-cover bg-center bg-no-repeat py-12 sm:py-14 lg:py-16 xl:py-20 min-[2500px]:py-28 min-[3800px]:py-40"
        style={{ backgroundImage: "url('/medical/zinnanti-surgical-2/bg1.webp')" }}
      >
        <div className="custom-container relative z-10 flex flex-col items-center text-center gap-3 sm:gap-4 min-[2500px]:gap-6">
          <Typography
            variant="h1"
            color="white"
            className="leading-tight !text-[2rem] sm:!text-[2.5rem] lg:!text-[3rem] min-[2500px]:!text-[4.5rem] min-[3800px]:!text-[6.5rem]"
            data-aos="fade-up"
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
      </div>
    </section>
  );
};

export default PageBanner;
