"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import Eyebrow from "./Eyebrow";
import { BASE_PATH } from "./Header";

interface PageBannerProps {
  title: string;
  eyebrow?: string;
}

/** Inner-page hero: dark-blue band below the fixed header with title + breadcrumb. */
const PageBanner = ({ title, eyebrow }: PageBannerProps) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-navy)] pt-[150px] sm:pt-[170px] lg:pt-[190px] min-[2500px]:pt-[280px] min-[3800px]:pt-[380px] pb-14 sm:pb-16 lg:pb-20 min-[2500px]:pb-28 min-[3800px]:pb-40">
      <div className="custom-container relative z-10 flex flex-col items-start gap-4 min-[2500px]:gap-6">
        {eyebrow && (
          <div data-aos="fade-up">
            <Eyebrow text={eyebrow} tone="light" />
          </div>
        )}

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
          className="flex items-center gap-2 text-white/80"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link href={BASE_PATH} className="navbar text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="navbar text-white">{title}</span>
        </nav>
      </div>
    </section>
  );
};

export default PageBanner;
