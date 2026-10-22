"use client";

import Typography from "./Typography";
import SectionTag from "./SectionTag";

const news = [
  {
    title: "Exposanità",
    image: "/medical/endomed/n1.webp",
    text: "Endomed Participates In Exposanità To Showcase Innovative Solutions For Minimally Invasive Surgery, Connect With Healthcare Professionals, And Highlight Its Commitment To Quality And Medical Technology.",
  },
  {
    title: "Medica",
    image: "/medical/endomed/n2.webp",
    text: "Endomed Takes Part In MEDICA, The Leading International Medical Trade Fair, Showcasing Advanced Surgical Solutions And Strengthening Connections With Healthcare Professionals ....",
  },
  {
    title: "Arab Health",
    image: "/medical/endomed/n3.webp",
    text: "Endomed Participates In Arab Health To Present Its Innovative Surgical Solutions, Connect With Healthcare Professionals, And Strengthen Its Commitment To Quality And .....",
  },
];

export default function News() {
  return (
    <section id="news" className="w-full bg-white py-14 md:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44">
      <div className="custom-container flex flex-col">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-10 2xl:mb-12 min-[2500px]:mb-16 min-[3800px]:mb-24" data-aos="fade-up">
          <SectionTag text="Latest Updates" className="mb-2 min-[2500px]:mb-4" />

          <Typography variant="h2" color="dark" className="leading-[1.3] mb-4 2xl:mb-6 min-[3800px]:mb-10">
            Discover What&apos;s New At Endomed
          </Typography>

          <Typography variant="p" color="muted">
            Stay Informed About Our Latest Developments, Company Updates, And Innovations In Medical Technology
            And Surgical Solutions.
          </Typography>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">
          {news.map((item, index) => (
            <article
              key={item.title}
              className="group flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image frame */}
              <div className="border border-[#555555] rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:rounded-[16px] p-4 2xl:p-5 min-[2500px]:p-7 min-[3800px]:p-10 pb-16 2xl:pb-20 min-[2500px]:pb-24 min-[3800px]:pb-36">
                <div className="w-full aspect-[388/160] border border-[#F0F0F0] rounded-[8px] min-[2500px]:rounded-[12px] overflow-hidden flex items-center justify-center bg-white px-6 min-[2500px]:px-10 min-[3800px]:px-14">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content card overlapping the frame */}
              <div className="relative z-10 flex-1 -mt-16 2xl:-mt-20 min-[2500px]:-mt-24 min-[3800px]:-mt-36 mx-6 2xl:mx-7 min-[2500px]:mx-10 min-[3800px]:mx-14 bg-white border border-[#EEEEEE] rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.04)] text-center px-5 pt-5 pb-14 2xl:px-6 2xl:pt-6 2xl:pb-20 min-[2500px]:px-9 min-[2500px]:pt-9 min-[2500px]:pb-24 min-[3800px]:px-14 min-[3800px]:pt-14 min-[3800px]:pb-36">
                <Typography variant="h3" color="dark" weight="semibold" className="font-primary mb-4 2xl:mb-6 min-[3800px]:mb-10">
                  {item.title}
                </Typography>
                <Typography variant="p" color="dark">
                  {item.text}
                </Typography>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
