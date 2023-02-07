import React from "react";

const Motivation = () => {
  return (
    <div
      className="flex flex-col w-full h-screen py-[20rem] md:py-32"
      data-aos="fade-up"
    >
      <div className="max-w-[1440px] mx-auto mt-14 px-12 flex flex-col items-center justify-center h-full">
        <div className="max-w-[1000px]">
          <div className="flex flex-col justify-center text-center">
            <h1 className="md:text-6xl sm:text-3xl text-4xl font-bold py-12 px-6 text-[#696969] uppercase">
              Motivation
            </h1>
            <p className="md:text-xl text-m leading-10 md:leading-10">
              The motivation behind building a company is what makes it great.
              We believe that there are many inspirations for why people start
              companies, but the one thing they all have in common is that
              they’re driven by passion to create something better than the
              status quo. This will explore some of our team’s motivations and
              how we found out what inspires them here at ISA. What could be
              more rewarding than helping others achieve their dreams? For many
              of us, working in a career that we love means helping others.
              Whether it’s through providing legal advice, teaching students, or
              simply being there for a friend, we find great satisfaction in
              making a difference in other people’s lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motivation;
