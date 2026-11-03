"use client";

import Typography from "./Typography";
import { DiamondIcon, TrainingIcon, CertificateIcon, SupportIcon } from "./FeatureIcons";
import SectionTag from "./SectionTag";

const features = [
  {
    title: "High Quality Products",
    Icon: DiamondIcon,
    description:
      "Our In-House Laboratory Is Our Flagship, Reflecting Our Commitment To Innovation, Precision, And Quality In Minimally Invasive Surgery.",
  },
  {
    title: "Training",
    Icon: TrainingIcon,
    description:
      "We Ensure Staff Receive Comprehensive Training To Maintain Quality And Efficiency.",
  },
  {
    title: "Certifications",
    Icon: CertificateIcon,
    description:
      "Each Step Of The Production Cycle Involves Quality Control To Which We Dedicate The Utmost Attention.",
  },
  {
    title: "24/7 Support",
    Icon: SupportIcon,
    description:
      "Endomed Will Respond Promptly Thanks To A Long-Lasting Guarantee On The Products Offered.",
  },
];

export default function Specialist() {
  return (
    <section id="specialist" className="w-full bg-white pb-14 md:pb-20 2xl:pb-24 min-[2500px]:pb-32 min-[3800px]:pb-44">
      {/* Heading on the brand band */}
      <div className="w-full bg-primary/80 pt-14 md:pt-20 2xl:pt-24 min-[2500px]:pt-32 min-[3800px]:pt-44 pb-8 2xl:pb-10 min-[2500px]:pb-14 min-[3800px]:pb-20">
        <div className="custom-container flex flex-col items-center text-center" data-aos="fade-up">
          <SectionTag text="Laparoscopic Surgical Solutions" light className="mb-2 min-[2500px]:mb-4" />

          <Typography variant="h2" color="white" className="leading-[1.3] mb-4 2xl:mb-6 min-[3800px]:mb-10">
            Specialists In Advanced Minimally Invasive Surgery Systems
          </Typography>

          <Typography variant="p" color="white" className="max-w-[70%]">
            Endomed Builds On Decades Of Experience In Endoscopic Equipment And Minimally Invasive Surgical
            Instruments. Since 2009, We Have Supplied High-Quality Products Under Our MEDICI Brand, Combining
            Technical Expertise, Reliable Service, Competitive Pricing, And Efficient Delivery To Meet The
            Evolving Needs Of Modern Healthcare.
          </Typography>
        </div>
      </div>

      {/* Cards straddle the band and the white area */}
      <div className="w-full bg-linear-to-b from-primary/80 from-65% to-white to-65%">
        <div className="custom-container grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5 2xl:gap-8 min-[2500px]:gap-10 min-[3800px]:gap-14">
          {features.map(({ title, Icon, description }, index) => (
            <div
              key={title}
              className="relative overflow-hidden group cursor-pointer bg-white border border-[#1A1A1A] rounded-[8px] min-[2500px]:rounded-[12px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] 2xl:h-[300px] min-[2500px]:h-[380px] min-[3800px]:h-[500px] p-5 sm:p-6 lg:p-7 2xl:p-9 min-[2500px]:p-12 min-[3800px]:p-16 transition-all duration-300 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Default State: Icon on top, Title at bottom (vertically centered) */}
              <div className="flex flex-col justify-center gap-3 lg:gap-4 2xl:gap-5 min-[3800px]:gap-7 h-full transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:invisible group-hover:-translate-y-2">
                <Icon className="w-8 h-8 lg:w-10 lg:h-10 2xl:w-14 2xl:h-14 min-[2500px]:w-17 min-[2500px]:h-17 min-[3800px]:w-22 min-[3800px]:h-22 text-primary shrink-0" />
                <Typography variant="h3" color="primary" weight="normal" className="font-primary">
                  {title}
                </Typography>
              </div>

              {/* Hover State: Title on top, Description below (vertically centered) */}
              <div className="absolute inset-0 p-5 sm:p-6 lg:p-7 2xl:p-9 min-[2500px]:p-12 min-[3800px]:p-16 flex flex-col justify-center transition-all duration-300 ease-in-out opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 bg-white">
                <Typography variant="h3" color="primary" weight="normal" className="font-primary mb-2 sm:mb-2.5 2xl:mb-4">
                  {title}
                </Typography>
                <p className="font-secondary text-[#333333] text-xs sm:text-[13px] lg:text-[14px] 2xl:text-base min-[2500px]:text-lg min-[3800px]:text-2xl leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
