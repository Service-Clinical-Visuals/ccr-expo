"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FiArrowUpRight } from "react-icons/fi";
import Typography from "./Typography";

type CategoryId = "digestive" | "uro";

interface Product {
  id: number;
  brand: string;
  title: string;
  description: string;
  image: string;
}

interface Category {
  id: CategoryId;
  label: string;
  products: Product[];
}

const categories: Category[] = [
  {
    id: "digestive",
    label: "Digestive Surgery",
    products: [
      {
        id: 1,
        brand: "Mesh",
        title: "Polypropylene",
        description:
          "Swing-Mesh® devices are suitable for abdominal wall reinforcement of ventral or inguinal hernias treatments, via open or laparoscopic surgery.",
        image: "/tht/p1.png",
      },
      {
        id: 2,
        brand: "Mesh",
        title: "Polyester",
        description:
          "Swing-Mesh® devices are suitable for abdominal wall reinforcement of ventral or inguinal hernias treatments, via open or laparoscopic surgery.",
        image: "/tht/p2.png",
      },
      {
        id: 3,
        brand: "Mesh",
        title: "Self-Fixative",
        description:
          "Swing-Contact® devices are suitable for abdominal wall reinforcement of ventral or inguinal hernias treatments, via open or laparoscopic surgery.",
        image: "/tht/p3.png",
      },
      {
        id: 4,
        brand: "Mesh",
        title: "Composite",
        description:
          "Intra-Swing® UMBI-LINK devices are suitable for abdominal wall reinforcement for umbilical hernias treatments.",
        image: "/tht/p4.png",
      },
    ],
  },
  {
    id: "uro",
    label: "Uro-Gynecological Surgery",
    products: [
      {
        id: 5,
        brand: "Band",
        title: "Urinary Incontinence",
        description:
          "Swing-Band® sling is suitable for the surgical treatment of female stress urinary incontinence, providing reliable support during minimally invasive procedures.",
        image: "/tht/p5.png",
      },
      {
        id: 6,
        brand: "Mesh",
        title: "Prolapse",
        description:
          "Pro-Swing® device is suitable for female prolapse treatments, providing reliable support during minimally invasive surgical procedures.",
        image: "/tht/p6.png",
      },
      {
        id: 7,
        brand: "Mesh",
        title: "Uterine Manipulator",
        description:
          "Hystero-Swing® device is designed for uterus manipulation, supporting controlled positioning during gynecological surgical procedures.",
        image: "/tht/p7.png",
      },
    ],
  },
];

// Swiper loop needs at least twice the visible slides, so short lists are
// repeated. Pagination still maps back to the original products.
const MIN_LOOP_SLIDES = 8;
const buildLoopSlides = (products: Product[]) => {
  const slides: Product[] = [];
  while (slides.length < MIN_LOOP_SLIDES) slides.push(...products);
  return slides;
};

const ProductCard = ({ product }: { product: Product }) => (
  <article className="tht-product-card">
    <div className="tht-product-media">
      <img src={product.image} alt={product.title} />
    </div>

    <div className="tht-product-info">
      <Link href="#products" aria-label={`View ${product.title}`} className="tht-product-arrow">
        <FiArrowUpRight />
      </Link>

      <Typography variant="h3" color="none" className="tht-product-brand">
        SWING-{product.brand}
        <sup>®</sup>
      </Typography>

      <Typography variant="h3" color="dark" className="tht-product-title">
        {product.title}
      </Typography>

      <Typography variant="p" color="muted" className="leading-relaxed">
        {product.description}
      </Typography>
    </div>
  </article>
);

const Products = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId>("digestive");
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const activeCategory = categories.find((c) => c.id === activeCategoryId) ?? categories[0];
  const productCount = activeCategory.products.length;
  const slides = buildLoopSlides(activeCategory.products);

  const handleCategoryChange = (id: CategoryId) => {
    setActiveCategoryId(id);
    setActiveIndex(0);
  };

  return (
    <section id="products" className="w-full bg-white overflow-hidden py-16 lg:py-20 min-[2500px]:py-32 min-[3800px]:py-44">
      <div className="custom-container flex flex-col gap-8 lg:gap-10 min-[2500px]:gap-16 min-[3800px]:gap-20">
        {/* Heading + Text */}
        <div
          className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7 items-center text-center w-full lg:max-w-[85%] xl:max-w-[75%] mx-auto"
          data-aos="fade-up"
        >
          <Typography variant="h1" color="dark">
            Reliable Abdominal Wall Reinforcement
          </Typography>

          <Typography variant="p" color="muted" className="leading-relaxed">
            Swing-Mesh® is a standard knitted polypropylene monofilament prosthesis designed for abdominal wall reinforcement in ventral and inguinal hernia treatments. Its porous, semi-rigid structure is developed to support tissue ingrowth while providing an optimal fit for open and laparoscopic procedures.
          </Typography>
        </div>

        {/* Category Tabs */}
        <div role="tablist" className="tht-tabs" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category) => {
            const isActive = category.id === activeCategoryId;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleCategoryChange(category.id)}
                className={`tht-tab ${isActive ? "is-active" : ""}`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Product Slider */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Swiper
            key={activeCategoryId}
            modules={[Autoplay]}
            loop
            speed={800}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % productCount)}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              1100: { slidesPerView: 2, spaceBetween: 28 },
              1536: { slidesPerView: 2, spaceBetween: 32 },
              2500: { slidesPerView: 2, spaceBetween: 52 },
              3800: { slidesPerView: 2, spaceBetween: 72 },
            }}
            className="tht-product-swiper"
          >
            {slides.map((product, idx) => (
              <SwiperSlide key={`${product.id}-${idx}`}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div className="tht-pagination">
            {activeCategory.products.map((product, idx) => (
              <button
                key={product.id}
                type="button"
                aria-label={`Go to ${product.title}`}
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                className={`tht-pagination-dot ${activeIndex === idx ? "is-active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
