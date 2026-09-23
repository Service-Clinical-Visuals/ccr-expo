"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Comprehensive = () => {
  const features = [
    "Multi-channel Analysis",
    "QRS Template Classification",
    "Automatic Arrhythmia Analysis",
    "ST-Segment Measurement",
    "Pacemaker Analysis",
  ];

  return (
    <section
      id="comprehensive"
      className="w-full py-20 min-[1281px]:py-28 bg-[var(--color-primary)] overflow-hidden relative"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full opacity-30 z-0"
        style={{
          backgroundImage: "url('/medical/eb-neuro/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 min-[1281px]:grid-cols-12 gap-12 min-[3800px]:gap-16 items-center">

          {/* Video (Mobile: 2nd, Desktop: 1st) */}
          <div
            className="w-full min-[1281px]:col-span-8 aspect-video relative overflow-hidden order-2 min-[1281px]:order-1 rounded-sm min-[3800px]:rounded-[2rem] bg-white/10"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Text Content */}
          <div className="min-[1281px]:col-span-4 flex flex-col gap-4 order-1 min-[1281px]:order-2" data-aos="fade-left" data-aos-delay="100">
            <Typography variant="h5" color="white" className="font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white inline-block"></span> CORE FUNCTIONALITIES
            </Typography>

            <Typography variant="h2" color="white" className="leading-tight mb-2">
              Comprehensive ECG Analysis
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed mb-4">
              Easy ECG Smart is a PC-based ECG solution designed for efficient cardiac data acquisition, review, and interpretation, supporting healthcare professionals in routine cardiac assessment.
            </Typography>

            {/* Divider */}
            <div className="w-[25%] h-1 bg-white/50 mb-4"></div>

            <Typography variant="h4" color="white" className="font-semibold mb-4">
              Key Features :
            </Typography>

            <ul className="flex flex-col gap-4 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <svg className="w-5 h-auto min-[3800px]:w-10 shrink-0" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.7676 3.99792C19.9414 3.25192 20.5481 2.49592 20.1146 1.39192C19.6821 0.286916 18.3878 -0.276084 17.223 0.133916C15.4354 0.761916 13.749 1.95092 12.2906 3.22092C10.8068 4.51292 9.42328 6.00992 8.25145 7.40492C7.51654 8.2818 6.80794 9.17986 6.12655 10.0979C5.61812 9.56492 5.12892 9.15892 4.66708 8.85292C3.94392 8.37292 3.1286 8.03192 2.25049 7.99992C1.00776 7.99992 0 8.95492 0 10.1339C0 11.6179 1.12626 11.7099 2.0854 12.3479C2.44394 12.5849 3.22381 13.2479 4.23562 14.9249C4.43688 15.2513 4.71936 15.5214 5.05618 15.7095C5.39301 15.8977 5.77298 15.9977 6.15997 15.9999C6.54718 16.0067 6.92976 15.916 7.27161 15.7363C7.61345 15.5566 7.90326 15.2939 8.11371 14.9729C8.11371 14.9729 8.70013 14.0909 9.11944 13.4999C9.95802 12.3204 10.8432 11.1738 11.773 10.0629C12.8598 8.76892 14.0823 7.45392 15.3361 6.36292C16.6143 5.24992 17.8206 4.59792 18.7676 3.99792Z" fill="white" />
                  </svg>
                  <Typography variant="p" color="white">{feature}</Typography>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button text="Know More" href="#comprehensive" variant="secondary" showIcon={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comprehensive;
