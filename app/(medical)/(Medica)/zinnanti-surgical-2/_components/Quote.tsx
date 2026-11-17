"use client";

import React from "react";
import Typography from "./Typography";

const Quote = () => {
  return (
    <section className="w-full bg-[var(--color-quote-bg)] py-14 sm:py-16 xl:py-20 min-[2500px]:py-28 min-[3800px]:py-40 overflow-hidden">
      <div className="custom-container">
        <Typography
          variant="h2"
          color="none"
          className="text-[var(--color-quote)] text-center leading-snug max-w-5xl min-[2500px]:max-w-[85%] mx-auto"
          data-aos="fade-up"
        >
          &ldquo;Innovating for Safer Surgeries Through Advanced smoke Evacuation
          Technology, Clearer Visibility, and A Stronger Commitment to Better
          Patient Care.&rdquo;
        </Typography>
      </div>
    </section>
  );
};

export default Quote;
