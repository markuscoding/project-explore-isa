import React from "react";
import Testimonialitem from "./Testimonialitem";
import data from "./testimonialdata";

const Testimonial = () => {
  return (
    <div className="flex flex-col w-full h-screen py-[150rem] md:py-[40rem] ">
      <div className="max-w-[1440px] mx-auto mt-14 px-12 flex flex-col items-center justify-center h-full">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="mx-auto max-w-xl text-center">
            <h2 class=" text-[#696969] text-4xl font-bold tracking-tight sm:text-5xl">
              Read trusted reviews from students
            </h2>

            <p class="text-gring-offset-warm-gray-500 mx-auto mt-4 max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur praesentium natus sapiente commodi. Aliquid sunt
              tempore iste repellendus explicabo dignissimos placeat, autem
              harum dolore reprehenderit quis! Quo totam dignissimos earum.
            </p>
          </div>

          <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
            <Testimonialitem
              images={data[0].image}
              name={data[0].name}
              title={data[0].title}
              message={data[0].message}
            />
            <Testimonialitem
              images={data[1].image}
              name={data[1].name}
              title={data[1].title}
              message={data[1].message}
            />
            <Testimonialitem
              images={data[2].image}
              name={data[2].name}
              title={data[2].title}
              message={data[2].message}
            />
            <Testimonialitem
              images={data[3].image}
              name={data[3].name}
              title={data[3].title}
              message={data[3].message}
            />
            <Testimonialitem
              images={data[4].image}
              name={data[4].name}
              title={data[4].title}
              message={data[4].message}
            />
            <Testimonialitem
              images={data[5].image}
              name={data[5].name}
              title={data[5].title}
              message={data[5].message}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
