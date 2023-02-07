import React from "react";

const ServicesSection = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="max-w-[1440px] mx-auto mt-14 px-12 flex flex-col items-center justify-center h-full">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2">
          <div>
            <img
              attribute="Vecteezy.com"
              data-aos="slide-right"
              className="h-80 w-80 object-cover mx-auto md:w-[1000px] md:-[1000px]"
              src="./images/ServicesHero.png"
              alt="/"
            />
          </div>
          <div className="flex flex-col justify-center text-center">
            <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-2 px-6 text-[#696969] uppercase">
              Free LOA Assistance
            </h1>
            <p>
              We believe that every student, regardless of race, ethnicity,
              national origin, religion or socioeconomic status deserves a
              high-quality education. We empower students and their families to
              take charge of the college search process by providing free access
              to reliable college information and personalized guidance from
              expert mentors. Our goal is for all students to have an equal
              opportunity at success. We are here to help you get started on
              your journey so you can learn more about our services!
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
