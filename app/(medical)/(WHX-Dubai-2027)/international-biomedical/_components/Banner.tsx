"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section
      id="home"
      className="relative w-full pt-[84px] sm:pt-[92px] 2xl:pt-[100px] min-[2500px]:pt-[140px] min-[3800px]:pt-[200px]"
    >
      <div className="custom-container">
        <div className="relative w-full h-screen overflow-hidden rounded-tl-2xl sm:rounded-tl-3xl  rounded-br-2xl sm:rounded-br-3xl min-[2500px]:rounded-[40px] min-[3800px]:rounded-[56px] bg-black flex flex-col justify-end">
          {/* Background video */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DynamicVideoPlayer
              type="banner"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
            />
          </div>


          {/* Bottom-left tagline */}
          <div className="relative z-20 px-5 pb-12 sm:px-8 sm:pb-16 xl:px-10 xl:pb-24 2xl:pb-28 min-[2500px]:px-16 min-[2500px]:pb-40 min-[3800px]:px-24 min-[3800px]:pb-56">
            <h1
              className="banner-title text-white max-w-[90%] sm:max-w-[560px] 2xl:max-w-[680px] min-[2500px]:max-w-[960px] min-[3800px]:max-w-[1300px] drop-shadow-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our Infant Care Solutions Are With You Every Step Of The Way.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
