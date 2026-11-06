"use client";

import Link from "next/link";

const solutions = [
  {
    title: "Supporting Every Stage Of Neonatal Care",
    description:
      "The NeoView Neonatal Video Intubation System enables videolaryngoscopy for tracheal intubation on the most fragile patients.",
    image: "/medical/international-biomedical/i1.webp",
  },
  {
    title: "Infant Positioning Aid",
    description:
      "The Transportle Neuro Protection system is a clinically advanced positioning aid that provides protective support for the most precious package during transport and into the NICU.",
    image: "/medical/international-biomedical/i2.webp",
  },
];

export default function InnovativeSolutions() {
  return (
    <section id="solutions" className="relative w-full bg-white overflow-hidden">
      {/* Grey top band with heading */}
      <div className="w-full bg-[#F4F4F4] pt-12 sm:pt-14 xl:pt-16 2xl:pt-20 min-[2500px]:pt-28 min-[3800px]:pt-40 pb-[150px] sm:pb-[170px] xl:pb-[230px] 2xl:pb-[270px] min-[2500px]:pb-[380px] min-[3800px]:pb-[540px]">
        <div className="custom-container">
          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4 sm:gap-6 xl:gap-12 min-[2500px]:gap-20">
            <h2 className="xl:max-w-[30%]" data-aos="fade-right">
              Innovative Solutions For Neonatal Care
            </h2>
            <p
              className="xl:max-w-[52%] xl:text-right"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              Discover specialized neonatal equipment designed to support safe procedures, effective
              patient positioning, and reliable care. International Biomedical combines advanced
              technology and thoughtful design to meet the unique needs of newborns and healthcare
              professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Cards overlapping the grey band */}
      <div className="custom-container relative z-10 -mt-[110px] sm:-mt-[130px] xl:-mt-[180px] 2xl:-mt-[215px] min-[2500px]:-mt-[300px] min-[3800px]:-mt-[430px] pb-14 sm:pb-16 xl:pb-20 2xl:pb-24 min-[2500px]:pb-32 min-[3800px]:pb-44">
        <div className="custom-grid-2">
          {solutions.map((item, i) => (
            <article
              key={item.title}
              className="group h-full flex flex-col bg-white rounded-tl-md rounded-tr-xl rounded-bl-md rounded-br-3xl min-[2500px]:rounded-br-[40px] min-[3800px]:rounded-br-[56px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] p-3.5 sm:p-4 2xl:p-5 min-[2500px]:p-7 min-[3800px]:p-10"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="relative w-full aspect-[763/413] overflow-hidden rounded-br-2xl min-[2500px]:rounded-br-[32px] min-[3800px]:rounded-br-[44px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover  "
                />
              </div>

              <div className="flex flex-col flex-1 pt-5 sm:pt-6 min-[2500px]:pt-9 min-[3800px]:pt-12">
                <h4 className="mb-2 min-[2500px]:mb-3 min-[3800px]:mb-5">{item.title}</h4>
                <p className="card-text mb-4 min-[2500px]:mb-6 min-[3800px]:mb-9 xl:max-w-[85%]">
                  {item.description}
                </p>
                <Link
                  href="#products"
                  className="link-text mt-auto self-start text-primary underline underline-offset-4 hover:text-secondary transition-colors"
                >
                  Review Products &gt;&gt;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
