"use client";

const images = [
  { src: "/medical/international-biomedical/abt1.webp", alt: "International Biomedical headquarters – aerial view" },
  { src: "/medical/international-biomedical/abt2.webp", alt: "Solar panels on the International Biomedical facility roof" },
  { src: "/medical/international-biomedical/abt3.webp", alt: "International Biomedical campus and surroundings" },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative w-full bg-white py-14 sm:py-16 xl:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44"
    >
      <div className="custom-container">
        {/* Heading + intro */}
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4 sm:gap-6 xl:gap-12 min-[2500px]:gap-20 mb-8 sm:mb-10 xl:mb-12 min-[2500px]:mb-16 min-[3800px]:mb-24">
          <h2 className="xl:max-w-[30%]" data-aos="fade-right">
            Supporting Every Step Of The Neonatal Care Journey
          </h2>
          <p
            className="xl:max-w-[56%] xl:text-right"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            International Biomedical is a family-owned company dedicated to designing,
            manufacturing, and distributing innovative neonatal and perinatal care solutions. With
            over 45 years of industry experience and a team of more than 100 professionals
            worldwide, we focus on supporting healthcare providers with reliable products that make
            a difference in infant care.
          </p>
        </div>

        {/* Image grid */}
        <div className="custom-grid-3">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`relative w-full aspect-[533/397] overflow-hidden rounded-br-2xl sm:rounded-br-3xl min-[2500px]:rounded-br-[40px] min-[3800px]:rounded-br-[56px] ${
                i === 2 ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] xl:col-span-1 xl:mx-0 xl:w-full" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
