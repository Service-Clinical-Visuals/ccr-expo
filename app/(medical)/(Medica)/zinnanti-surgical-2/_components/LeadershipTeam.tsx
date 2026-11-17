"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Typography from "./Typography";

const team = [
  { name: "William Zinnanti MD PhD", image: "/medical/zinnanti-surgical-2/img1.webp" },
  { name: "Stacey Boscoe Zinnanti", image: "/medical/zinnanti-surgical-2/img2.webp" },
  { name: "Colleen Levine", image: "/medical/zinnanti-surgical-2/img3.webp" },
];

/** About page: "Meet Our Leadership Team" — inset blue wave band with three profile cards. */
const LeadershipTeam = () => {
  return (
    <section className="w-full bg-white px-3 sm:px-5 lg:px-8 min-[2500px]:px-12 min-[3800px]:px-16">
      <div
        className="relative w-full overflow-hidden bg-[var(--color-secondary)] bg-cover bg-center bg-no-repeat py-14 sm:py-16 xl:py-20 min-[2500px]:py-32 min-[3800px]:py-44"
        style={{ backgroundImage: "url('/medical/zinnanti-surgical-2/bg2.webp')" }}
      >
        <div className="custom-container relative z-10">
          {/* Heading row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 lg:gap-10 min-[2500px]:gap-16">
            <div className="flex flex-col items-start gap-3 sm:gap-4 min-[2500px]:gap-6 lg:max-w-[45%]" data-aos="fade-up">
              <span className="inline-flex items-center gap-2 min-[2500px]:gap-3 rounded-full bg-white/10 border border-white/15 px-3 py-1 sm:px-4 sm:py-1.5 min-[2500px]:px-6 min-[2500px]:py-2.5 text-white">
                <span aria-hidden className="block w-1.5 h-1.5 min-[2500px]:w-2.5 min-[2500px]:h-2.5 rounded-full bg-white" />
                Meet Our Leadership Team
              </span>
              <Typography variant="h2" color="white" className="leading-snug">
                The Dedicated People Behind Our Innovation and Success
              </Typography>
            </div>

            <Typography
              variant="p"
              color="white"
              className="!font-normal text-white/90 leading-relaxed lg:max-w-[48%] lg:text-right"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Behind every innovative solution is a dedicated team with diverse expertise and a
              shared commitment to surgical care. Our leadership combines medical knowledge,
              creative vision, and operational experience to guide product development,
              strengthen quality, and support the company&apos;s growth.
            </Typography>
          </div>

          {/* Cards */}
          <div className="mt-10 sm:mt-12 xl:mt-14 min-[2500px]:mt-20 min-[3800px]:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`group flex flex-col ${
                  // Odd last card: centre it on the 2-column (tablet) layout
                  team.length % 2 === 1 && i === team.length - 1
                    ? "sm:col-span-2 sm:justify-self-center sm:w-[calc(50%-0.75rem)] lg:col-span-1 lg:w-auto lg:justify-self-stretch"
                    : ""
                } bg-white/[0.06] border border-[#4FA3D9]/70 rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-md rounded-bl-md min-[2500px]:rounded-tl-[2.5rem] min-[2500px]:rounded-br-[2.5rem] p-2.5 sm:p-3 min-[2500px]:p-5 min-[3800px]:p-7 transition-colors duration-300 hover:bg-white/[0.12]`}
                data-aos="fade-up"
                data-aos-delay={100 + i * 100}
              >
                <div className="flex items-center justify-between gap-3 px-2 pt-2 pb-3 sm:pb-3.5 min-[2500px]:px-4 min-[2500px]:pt-4 min-[2500px]:pb-6">
                  <Typography
                    variant="h3"
                    color="white"
                    className="!text-[1.05rem] sm:!text-[1.15rem] min-[2500px]:!text-[1.9rem] min-[3800px]:!text-[2.7rem]"
                  >
                    {member.name}
                  </Typography>
                  <Link
                    href="#"
                    aria-label={`View ${member.name}'s profile`}
                    className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-white text-[var(--color-secondary)] transition-transform duration-300 group-hover:rotate-45"
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10" />
                  </Link>
                </div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
