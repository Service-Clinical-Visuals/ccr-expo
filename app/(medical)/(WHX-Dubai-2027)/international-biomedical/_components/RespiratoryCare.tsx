"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import CheckIcon from "./CheckIcon";

const advantages = [
  {
    title: "Advanced Safety Protection",
    text: "Includes automatic shutoff and alarm systems.",
  },
  {
    title: "Portable System Integration",
    text: "Offers quick-release mounting for transport incubators.",
  },
  {
    title: "Extended Battery Life",
    text: "Provides longer operation with reduced maintenance.",
  },
];

export default function RespiratoryCare() {
  return (
    <section id="respiratory-care" className="relative w-full bg-white overflow-hidden">
      {/* Blue top band with heading */}
      <div className="w-full bg-primary pt-12 sm:pt-14 xl:pt-16 2xl:pt-20 min-[2500px]:pt-28 min-[3800px]:pt-40 pb-[120px] sm:pb-[150px] xl:pb-[190px] 2xl:pb-[220px] min-[2500px]:pb-[320px] min-[3800px]:pb-[440px]">
        <div className="custom-container">
          <div
            className="mx-auto max-w-[900px] 2xl:max-w-[1040px] min-[2500px]:max-w-[1560px] min-[3800px]:max-w-[2200px] text-center flex flex-col items-center gap-3 sm:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-9"
            data-aos="fade-up"
          >
            <h2 className="!text-white">AeroNOx 2.0 For Advanced Neonatal Respiratory Care</h2>
            <p className="text-white/90">
              The AeroNOx 2.0 delivers continuous inhaled nitric oxide therapy for newborns and
              infants, combining precise gas delivery, advanced monitoring, and intuitive controls
              for safe and flexible bedside and transport use.
            </p>
          </div>
        </div>
      </div>

      {/* Info card + video, overlapping the blue band */}
      <div className="custom-container relative z-10 -mt-[90px] sm:-mt-[110px] xl:-mt-[140px] 2xl:-mt-[165px] min-[2500px]:-mt-[240px] min-[3800px]:-mt-[330px] pb-14 sm:pb-16 xl:pb-20 2xl:pb-24 min-[2500px]:pb-32 min-[3800px]:pb-44">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-6 min-[2500px]:gap-10 min-[3800px]:gap-14 items-stretch">
          {/* Info card (below the video on mobile, left on desktop) */}
          <div
            className="order-2 xl:order-1 xl:col-span-4 flex flex-col bg-white rounded-tl-2xl  rounded-br-2xl sm:rounded-tl-3xl sm:rounded-br-3xl min-[2500px]:rounded-tl-[40px] min-[2500px]:rounded-br-[40px] min-[3800px]:rounded-tl-[56px] min-[3800px]:rounded-br-[56px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] p-5 sm:p-6 2xl:p-7 min-[2500px]:p-11 min-[3800px]:p-16"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h4 className="pb-4 min-[2500px]:pb-6 min-[3800px]:pb-9 border-b border-[#E2E2E2]">
              Additional Advantages
            </h4>

            <p className="card-text pt-4 min-[2500px]:pt-6 min-[3800px]:pt-9">
              Equipped with an integrated mass flow meter and side-stream gas analysis, AeroNOx 2.0
              continuously monitors nitric oxide (NO), nitrogen dioxide (NO<sub>2</sub>), and oxygen
              (O<sub>2</sub>) levels.
            </p>

            <ul className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7 py-5 min-[2500px]:py-8 min-[3800px]:py-11 border-b border-[#E2E2E2]">
              {advantages.map((a) => (
                <li key={a.title} className="card-text flex items-start gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
                  <CheckIcon />
                  <span>
                    {a.title} – {a.text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="card-text pt-4 min-[2500px]:pt-6 min-[3800px]:pt-9 mb-5 min-[2500px]:mb-8 min-[3800px]:mb-11">
              Its color-coded visual and audible alarms provide clear feedback, while built-in safety
              mechanisms help clinicians respond to detected irregularities.
            </p>

            <div className="mt-auto">
              <Button text="View Technical Specifications" variant="secondary" href="#contact" />
            </div>
          </div>

          {/* Video */}
          <div
            className="order-1 xl:order-2 xl:col-span-8 relative w-full aspect-video  overflow-hidden bg-[#EBEBEB] rounded-tl-2xl rounded-br-2xl sm:rounded-tl-3xl sm:rounded-br-3xl min-[2500px]:rounded-tr-[40px] min-[2500px]:rounded-bl-[40px] min-[3800px]:rounded-tr-[56px] min-[3800px]:rounded-bl-[56px] shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
