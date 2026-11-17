"use client";

import React from "react";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

export default function StoreCta() {
  return (
    <section id="shop" className="w-full bg-[var(--muted-bg)] py-12 sm:py-14 xl:py-[2.6vw]">
      <div className="custom-container flex flex-col lg:flex-row lg:items-center justify-between gap-8" data-aos="fade-up">
        <div className="lg:max-w-[66%]">
          <Eyebrow dotClassName="bg-[var(--heading)]" className="mb-3 xl:mb-4">
            Explore Our Store
          </Eyebrow>
          <h2 className="section-title font-head font-medium text-[var(--heading)] mb-4 xl:mb-5">
            Your Trusted Destination for Professional Medical Instruments and Equipment.
          </h2>
          <p className="section-text font-body text-[var(--body)]">
            <strong className="font-semibold text-[var(--heading)]">Over 10,000 Products &amp; Matching Accessories</strong>{" "}
            Discover everything you need in one place. Explore our extensive product range, find the perfect match, and
            enjoy a quick, seamless ordering experience with just a click.
          </p>
        </div>
        <Button href="#products" className="self-start lg:self-center lg:min-w-[12em] bg-white">
          Browse Collection
        </Button>
      </div>
    </section>
  );
}
