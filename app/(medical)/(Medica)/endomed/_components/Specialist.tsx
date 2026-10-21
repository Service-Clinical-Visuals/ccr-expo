"use client";

import Typography from "./Typography";
import { DiamondIcon, TrainingIcon, CertificateIcon, SupportIcon } from "./FeatureIcons";
import SectionTag from "./SectionTag";

const features = [
  { title: "High Quality Products", Icon: DiamondIcon },
  { title: "Training", Icon: TrainingIcon },
  { title: "Certifications", Icon: CertificateIcon },
  { title: "24/7 Support", Icon: SupportIcon },
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
          {features.map(({ title, Icon }, index) => (
            <div
              key={title}
              className="flex flex-col justify-center gap-3 lg:gap-4 2xl:gap-5 min-[3800px]:gap-8 bg-white border border-[#1A1A1A] rounded-[6px] min-[2500px]:rounded-[10px] px-4 py-6 md:px-5 md:py-8 lg:px-10 lg:py-10 2xl:px-12 2xl:py-12 min-[2500px]:px-16 min-[2500px]:py-16 min-[3800px]:px-24 min-[3800px]:py-24"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Icon className="w-7 h-7 lg:w-9 lg:h-9 2xl:w-15 2xl:h-15 min-[2500px]:w-17 min-[2500px]:h-17 min-[3800px]:w-22 min-[3800px]:h-22 text-primary" />
              <Typography variant="h3" color="primary" weight="normal" className="font-primary">
                {title}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
