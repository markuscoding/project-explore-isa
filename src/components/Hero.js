import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="max-w-[1440px] mx-auto mt-14 px-12 flex flex-col items-center justify-center h-full">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2">
          <div>
            <img
              attribute="Vecteezy.com"
              data-aos="slide-right"
              className="h-80 w-80 object-cover mx-auto md:w-[1000px] md:-[1000px]"
              src="./images/HeroMain.png"
              alt="/"
            />
          </div>
          <div className="flex flex-col justify-center text-center">
            <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-2 px-6 text-[#696969] uppercase">
              Education Knowledge
            </h1>
            <p>
              Donec eget lorem ac tortor laoreet laoreet. Donec pulvinar, metus
              et ornare porta, tellus quam tempor magna, quis placerat sem nisi
              vitae nisi. Donec in tincidunt eros. Aliquam in enim at arcu
              vestibulum fringilla. Praesent mi quam, porta in ipsum pulvinar,
              ornare egestas felis. Sed tincidunt gravida nulla, eget auctor ex
              rutrum vel. Vestibulum auctor diam ut eros vestibulum posuere.
              Duis volutpat felis eget massa condimentum rhoncus.
            </p>
            <div className="md:w-[60%] flex mx-auto py-6 gap-6 justify-center">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="w-20% inline-block px-8 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Click me
              </button>
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="w-20% inline-block px-8 py-2.5 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
