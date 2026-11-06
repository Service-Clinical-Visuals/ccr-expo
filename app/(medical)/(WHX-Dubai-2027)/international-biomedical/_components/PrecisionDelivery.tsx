"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

const features = [
  {
    title: "User-Friendly Interface",
    text: "Simplifies device operation through intuitive controls and a clear digital display.",
  },
  {
    title: "Flexible Mounting Options",
    text: "Offers quick-release mounting configurations for convenient equipment integration.",
  },
];

const CheckIcon = () => (
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
    className="shrink-0 w-4 h-4 2xl:w-[18px] 2xl:h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 mt-[3px] min-[2500px]:mt-1.5"
  >
    <circle cx="10" cy="10" r="10" fill="#5BB5E3" />
    <path
      d="M6 10.4l2.6 2.6L14 7.6"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PrecisionDelivery() {
  return (
    <section id="precision-delivery" className="relative w-full bg-white overflow-hidden">
      {/* Blue top band with heading */}
      <div className="w-full bg-primary pt-12 sm:pt-14 xl:pt-16 2xl:pt-20 min-[2500px]:pt-28 min-[3800px]:pt-40 pb-[120px] sm:pb-[150px] xl:pb-[190px] 2xl:pb-[220px] min-[2500px]:pb-[320px] min-[3800px]:pb-[440px]">
        <div className="custom-container">
          <div
            className="mx-auto max-w-7xl 2xl:max-w-7xl min-[2500px]:max-w-[1560px] min-[3800px]:max-w-[2200px] text-center flex flex-col items-center gap-3 sm:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-9"
            data-aos="fade-up"
          >
            <h2 className="!text-white">Precision Nitric Oxide Delivery</h2>
            <p className="text-white">
              The AeroNOx 2.0 combines advanced gas delivery technology with precise flow control to
              support continuous inhaled nitric oxide therapy for newborns and infants. Its integrated
              mass flow meter and monitoring system help clinicians manage therapy delivery while
              maintaining continuous awareness of gas concentrations.
            </p>
          </div>
        </div>
      </div>

      {/* Video + info card, overlapping the blue band */}
      <div className="custom-container relative z-10 -mt-[90px] sm:-mt-[110px] xl:-mt-[140px] 2xl:-mt-[165px] min-[2500px]:-mt-[240px] min-[3800px]:-mt-[330px] pb-14 sm:pb-16 xl:pb-20 2xl:pb-24 min-[2500px]:pb-32 min-[3800px]:pb-44">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-6 min-[2500px]:gap-10 min-[3800px]:gap-14 items-stretch">
          {/* Video */}
          <div
            className="xl:col-span-8 relative w-full aspect-video   overflow-hidden bg-[#EBEBEB] rounded-tl-2xl rounded-br-2xl sm:rounded-tl-3xl sm:rounded-br-3xl min-[2500px]:rounded-tl-[40px] min-[2500px]:rounded-br-[40px] min-[3800px]:rounded-tl-[56px] min-[3800px]:rounded-br-[56px] shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Info card */}
          <div
            className="xl:col-span-4 flex flex-col bg-white rounded-tl-2xl  rounded-br-2xl  sm:rounded-tl-3xl sm:rounded-br-3xl min-[2500px]:rounded-tl-[40px] min-[2500px]:rounded-br-[40px] min-[3800px]:rounded-tl-[56px] min-[3800px]:rounded-br-[56px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] p-5 sm:p-6 2xl:p-7 min-[2500px]:p-11 min-[3800px]:p-16"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            {/* Title */}
            <h4 className="pb-4 2xl:pb-5 min-[2500px]:pb-7 min-[3800px]:pb-10 border-b border-[#E2E2E2]">
              Intelligent Monitoring &amp; Clinical Safety
            </h4>

            {/* Intro + feature list */}
            <div className="py-4 2xl:py-5 min-[2500px]:py-7 min-[3800px]:py-10 border-b border-[#E2E2E2]">
              <p className="card-text mb-4 2xl:mb-5 min-[2500px]:mb-7 min-[3800px]:mb-10">
                Designed for demanding neonatal care environments, the AeroNOx 2.0 features an
                intuitive interface, advanced monitoring capabilities, and multiple safety mechanisms.
              </p>

              <ul className="flex flex-col gap-3 2xl:gap-3.5 min-[2500px]:gap-5 min-[3800px]:gap-7 pl-1 min-[2500px]:pl-2 min-[3800px]:pl-3">
                {features.map((f) => (
                  <li key={f.title} className="card-text flex items-start gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
                    <CheckIcon />
                    <span>
                      <strong className="font-semibold text-heading">{f.title}</strong> – {f.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Closing text */}
            <p className="card-text pt-4 2xl:pt-5 min-[2500px]:pt-7 min-[3800px]:pt-10 mb-5 2xl:mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12">
              Its smart alarms and automatic safety responses help clinicians identify system
              irregularities and manage therapy with greater awareness.
            </p>

            {/* CTA */}
            <div className="mt-auto">
              <Button text="Discover Delivery Features" variant="secondary" href="#contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
