"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Advancing = () => {
  return (
    <section
      id="advancing"
      className="w-full py-20 xl:py-28 relative overflow-hidden flex items-center"
      style={{
        backgroundImage: "url('/medical/eb-neuro/bg2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      {/* Mobile Overlay to fade background image for better readability */}
      <div className="absolute inset-0 bg-white/85 xl:bg-white/0 z-0 pointer-events-none transition-colors duration-300"></div>

      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8 min-[3800px]:gap-16 items-center">

          {/* Text Content */}
          <div className="xl:col-span-6 flex flex-col gap-3" data-aos="fade-right">
            <Typography variant="h5" color="secondary" className="font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] inline-block"></span> RESEARCH & DEVELOPMENT
            </Typography>

            <Typography variant="h2" color="dark" className="leading-tight mb-4 min-[3800px]:mb-8">
              Advancing the Future of Neurodiagnostic Technology
            </Typography>

            <div className="flex flex-col gap-4 mb-6 min-[3800px]:mb-10">
              <Typography variant="p" color="muted" className="leading-relaxed">
                EB Neuro considers essential to invest in research and development of new solutions. In the sites of Florence and Colognola Ai Colli (VR) is carried out the research and development activity. Several development teams, composed among others by electronic, computer and biomedical engineers, as well as by professionals in the field of health, work in close collaboration with the most influential Tuscan and Italian realities in the university and Research, designing diagnostic systems of the highest level especially in the neurological field, with digital EEG solutions, Video EEG, polysomnography, EMG/EP, transcranial magnetic stimulation, neuronavigation systems.
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed">
                EB Neuro's Research and Development Division (R&D) usually tests itsself in evolving contexts, thus anticipating customers and market needs. EB Neuro's Research and Development Division (R&D) usually tests itsself in evolving contexts, thus anticipating customers and market needs.
              </Typography>
            </div>

            <div className="pt-2">
              <Button text="Learn More" href="#advancing" variant="secondary" showIcon={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Advancing;
