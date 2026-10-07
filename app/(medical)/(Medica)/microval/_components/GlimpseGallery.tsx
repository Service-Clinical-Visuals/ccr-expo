import React from "react";
import Button from "./Button";

export default function GlimpseGallery() {
  return (
    <section
      className="relative w-full py-24 sm:py-32 lg:py-30 flex items-center justify-center bg-[url('/medical/microval/bg.webp')] bg-cover bg-center bg-no-repeat"
    >

      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-12 flex flex-col items-center text-center">

        <div
          className="flex items-center gap-3 mb-6"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div className="w-[30px] h-[4px] bg-white rounded-full shadow-[0px_5px_15px_0px_#D9D9D9]"></div>
          <span className="font-dmsans font-bold text-white section-text tracking-widest uppercase">
            LET'S CONNECT
          </span>
        </div>

        <h2
          className="section-title font-semibold tracking-tight font-dmsans text-white mb-8 leading-tight max-w-3xl"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          Need safe and high-quality equipment?
        </h2>

        <p
          className="section-text text-white font-regular leading-relaxed font-inter mb-10 max-w-4xl"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
        >
          Don't hesitate to contact us to learn more about our surgical implants and instruments, our expertise, and the solutions we provide for healthcare professionals.
        </p>

        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
        >
          <Button href="#contact" showArrow={true}>
            CONTACT MICROVAL
          </Button>
        </div>

      </div>
    </section>
  );
}
