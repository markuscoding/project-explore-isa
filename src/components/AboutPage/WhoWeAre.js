import React from "react";

const WhoWeAre = () => {
  return (
    <div
      className="flex flex-col w-full h-screen py-[35rem] md:py-32"
      data-aos="fade-up"
    >
      <div className="max-w-[1440px] mx-auto mt-14 px-12 flex flex-col items-center justify-center h-full">
        <div className="max-w-[1000px]">
          <div className="flex flex-col justify-center text-center">
            <h1 className="md:text-6xl sm:text-3xl text-4xl  font-bold py-12 px-6 text-[#696969] uppercase">
              Who We Are?
            </h1>
            <p className="md:text-xl text-m  leading-10 md:leading-10">
              International Student Ally is a Canadian education consultancy
              that was founded early 2021. It assists Filipino students in
              Canada with their letter of acceptance in their chosen school. We
              believe that education should be accessible for all and strive to
              make the process of studying abroad as easy as possible for our
              students. By providing honest advice on different programs,
              professional guidance during the application process, we hope to
              help each student find an ideal program to suit their needs. We
              are not just committed to helping you achieve your academic goals;
              we also care about the future you will build after graduation! Our
              goal is always to provide high-quality service. We believe
              education is the key to a better life. Education is always better
              shared than kept between. ISA’s vision is that every Filipino
              international student has the opportunity and resources needed for
              successful integration into their host institution, community, and
              country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
