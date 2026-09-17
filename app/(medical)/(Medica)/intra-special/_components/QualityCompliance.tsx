"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import { X, CloudDownload } from "lucide-react";

export default function QualityCompliance() {
  const [activeCert, setActiveCert] = useState<string | null>(null);

  const certificates = [
    {
      id: 1,
      image: "/medical/intra-special/c1.png",
      title: "EG-Zertifikat / EC-Certificate (gem. 93/42/EWG)",
    },
    {
      id: 2,
      image: "/medical/intra-special/c2.png",
      title: "Anlage / Annex (Reg.-Nr. 44 235 192153)",
    },
    {
      id: 3,
      image: "/medical/intra-special/c3.png",
      title: "Zertifikat / Certificate (DIN EN ISO 13485:2021)",
    },
  ];

  return (
    <section
      id="certificates"
      className="w-full bg-white py-16 sm:py-20 xl:py-24 overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center text-center">
        {/* Section Header */}
        <div
          className="flex flex-col items-center gap-3 xl:max-w-[70%] max-w-[90%] mx-auto text-center"
          data-aos="fade-up"
        >
          <Typography
            variant="h4"
            color="primary"
            weight="semibold"
            className="uppercase tracking-[0.04em]"
          >
            QUALITY & COMPLIANCE
          </Typography>

          <Typography variant="h2" color="dark">
            Certified Quality Supporting Reliable Medical Device Manufacturing
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="mt-2 leading-relaxed"
          >
            INTRA maintains a quality management system meeting the requirements of DIN EN ISO 13485:2021 / EN ISO 13485:2016 + AC:2018 + A11:2021 for the manufacture and distribution of special catheters and drainage systems. The certificate is issued by TÜV NORD CERT GmbH and is valid through 7 March 2027, providing documented assurance of INTRA’s commitment to consistent quality and regulatory requirements.
          </Typography>
        </div>

        {/* 3 Certificates Grid */}
        <div
          className="mt-12 sm:mt-14 lg:mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 min-[2500px]:gap-12 w-full"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert.image)}
              className="group relative bg-white border border-gray-300 hover:border-[#D70826] rounded-[10px] p-3 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="w-full aspect-[1/1.414] relative overflow-hidden rounded-[6px] bg-white flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Hover Overlay with exact Figma Component 8 Download button */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
                  <a
                    href={cert.image}
                    download={`INTRA-Certificate-${cert.id}.png`}
                    onClick={(e) => e.stopPropagation()}
                    className="w-[175px] h-[46px] bg-[#EC1C24] hover:bg-[#b8061f] border border-[#EC1C24] rounded-[10px] px-[25px] py-[10px] flex items-center justify-center gap-[15px] text-white shadow-md transition-transform duration-200 hover:scale-105 cursor-pointer select-none shrink-0"
                  >
                    <span className="font-primary font-medium text-[16px] leading-[20px] text-white">
                      Download
                    </span>
                    <CloudDownload className="w-[24px] h-[24px] text-white shrink-0" strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for Certificate Preview */}
      {activeCert && (
        <div
          onClick={() => setActiveCert(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-[10px] p-2 sm:p-4 shadow-2xl flex flex-col items-center"
          >
            <button
              onClick={() => setActiveCert(null)}
              className="absolute -top-4 -right-4 bg-white text-[#202020] hover:text-[#D70826] p-2 rounded-full shadow-lg transition-colors cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeCert}
              alt="Certificate Full View"
              className="max-h-[82vh] w-auto object-contain rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
}
