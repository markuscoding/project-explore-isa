import React from "react";

const PartnerSchool = () => {
  return (
    <div className="flex flex-col w-full h-screen py-32 ">
      <div
        className="px-20 text-center max-w-[1440px] md:max-w-xl lg:max-w-3xl mx-auto"
        data-aos="fade-up"
      >
        <h1 className="md:text-6xl text-4xl uppercase font-bold mb-8 text-[#696969]">
          Our Partners School
        </h1>
      </div>
      <div
        className="w-[80%] text-xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-4 text-center  py-8"
        data-aos="fade-up"
      >
        <div className="hover:scale-110 duration-500">
          <a target="blank" href="https://www.lambtoncollege.ca/">
            <img
              className="w-30  mx-auto"
              src="https://exploreisa.com/wp-content/uploads/2021/11/lam-150x150.jpeg"
              alt="LAMBTON COLLEGE"
            />
          </a>
          <p className="my-4">Lambton College</p>
        </div>
        <div className=" hover:scale-110 duration-500">
          <a target="blank" href="https://loyalistcollege.com/">
            <img
              className="w-30 mx-auto"
              src="https://exploreisa.com/wp-content/uploads/2021/11/loyalist-150x150.jpeg"
              alt="LOYALIST COLLEGE"
            />
          </a>
          <p className="my-4">LOYALIST COLLEGE</p>
        </div>
        <div className=" hover:scale-110 duration-500">
          <a target="blank" href="https://www.niagaracollege.ca/">
            <img
              className="w-30 mx-auto"
              src="https://exploreisa.com/wp-content/uploads/2021/11/KrYXRyPSQ0CD48KLLVSn_niagara-150x150.jpeg"
              alt="NIAGARA COLLEGE"
            />
          </a>
          <p className="my-4">NIAGARA COLLEGE</p>
        </div>
        <div className=" hover:scale-110 duration-500">
          <a target="blank" href="https://www.northerncollege.ca/">
            <img
              className="w-[150px] mx-auto"
              src="https://exploreisa.com/wp-content/uploads/2021/12/nort.png"
              alt="NORTHERN COLLEGE"
            />
          </a>
          <p className="my-4">NORTHERN COLLEGE</p>
        </div>
        <div className=" hover:scale-110 duration-500">
          <a target="blank" href="https://www.mohawkcollege.ca/">
            <img
              className="w-30 mx-auto"
              src="https://exploreisa.com/wp-content/uploads/2021/12/mohawk-150x150.png"
              alt="NMOHAWK COLLEGE"
            />
          </a>
          <p className="my-4">NMOHAWK COLLEGE</p>
        </div>
        <div className=" hover:scale-110 duration-500">
          <a target="blank" href="https://www.uvic.ca/">
            <img
              className="w-30 mx-auto"
              src="https://exploreisa.com/wp-content/uploads/2021/12/uvic-social-media-default-150x150.gif"
              alt="UNIVERSITY OF VICTORIA"
            />
          </a>
          <p className="my-4">UNIVERSITY OF VICTORIA</p>
        </div>
        <div className=" hover:scale-110 duration-500">
          <a target="blank" href="https://www.ucanwest.ca/">
            <img
              className="w-30 mx-auto"
              src="https://exploreisa.com/wp-content/uploads/2021/12/ucan1-150x150.png"
              alt="UNIVERSITY CANADA WEST"
            />
          </a>
          <p className="my-4">UNIVERSITY CANADA WEST</p>
        </div>
        <div className="hover:scale-110 duration-500">
          <a target="blank" href="https://www.vcc.ca/">
            <img
              className="w-30 mx-auto"
              src="https://exploreisa.com/wp-content/uploads/2021/12/vcc-logo-1-150x150.png"
              alt="VCC"
            />
          </a>
          <p className="my-4">VCC</p>
        </div>

        <div className=" hover:scale-110 duration-500">
          <a target="blank" href="https://www.niagaracollege.ca/">
            <img
              className="w-30 mx-auto"
              src="https://exploreisa.com/wp-content/uploads/2021/11/KrYXRyPSQ0CD48KLLVSn_niagara-150x150.jpeg"
              alt="NIAGARA COLLEGE TORONTO"
            />
          </a>
          <p className="my-4">NIAGARA COLLEGE TORONTO</p>
        </div>
        <div className=" hover:scale-110 duration-500">
          <a target="blank" href="https://www.nlc.bc.ca/">
            <img
              className="w-30 mx-auto"
              src="https://exploreisa.com/wp-content/uploads/2021/12/160-1609055_northern-lights-college-logo-colorfulness-hd-png-download-150x150.png"
              alt="NORTHERN LIGHTS COLLEGE"
            />
          </a>
          <p className="my-4">NORTHERN LIGHTS COLLEGE</p>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto py-10">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="w-20% inline-block px-24 py-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default PartnerSchool;
