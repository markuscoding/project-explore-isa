import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Founders = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="flex flex-col mx-auto w-full h-screen py-32 md:py-32  ">
        <div
          className="px-20 text-center max-w-[1000px] md:max-w-xl lg:max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          <h1 className="md:text-6xl text-4xl uppercase font-bold mb-16 text-[#696969]">
            Meet Our Team
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
          <div className="mb-12 md:mb-0" data-aos="fade-up">
            <div className="flex justify-center mb-6">
              <img
                src="./images/founder-3.jpg"
                alt="Christine Ejercito"
                className="rounded-full shadow-lg w-40"
              />
            </div>
            <div className="md:w-[90%] mx-auto">
              <h5 className="text-xl font-semibold mb-4">Christine Ejercito</h5>
              <h6 className="font-semibold text-blue-600 mb-4">Founder</h6>
              <p className="px-8 mb-2 text-sm">
                She got licensed as Educational Agent by ICEF. Christine has
                over 10 years of combined experience in operations and an expert
                in assisting organizations with administrative procedures.
                Whether it's overseeing and coordinating office administrative
                procedures, administering policies and financial reporting,
                Christine has the expertise needed for any task. She is also
                assists organizations with managing key clients by providing
                analysis and reporting as well as maintaining accounts
                receivables and account payables. She also has an extensive
                experience in customer service from her previous professions
                such as Front Office manager in a known hotel, AP and AR
                specialist, Finance Analyst and Customer representative. These
                were just a few of the experiences she has that can definitely
                bring to the table in order for their business to succeed.
              </p>
            </div>
          </div>
          <div className="mb-12 md:mb-0" data-aos="fade-up">
            <div className="flex justify-center mb-6">
              <img
                src="./images/founder-2.jpg"
                alt="Loreviv Palmiro"
                className="rounded-full shadow-lg w-40"
              />
            </div>
            <div className="md:w-[90%] mx-auto">
              <h5 className="text-xl font-semibold mb-4">Loreviv Palmiro</h5>
              <h6 className="font-semibold text-blue-600 mb-4">Founder</h6>
              <p className="px-8 mb-2 text-sm">
                Loreviv or known as "Ate Darling" is a skilled, experienced
                accountant with 20+ years of experience in the field of
                accounting, sales, marketing, operation and banking. She has
                strong understanding of all aspects of accounting and financial
                management and excellent at managing multiple assignments while
                meeting tight schedules. She is very friendly, accommodating and
                fun to be with. Her reputation as a self-directed professional
                is matched by integrity and honesty. She has been in the sales
                and marketing field of work, managing people to be more
                efficient. She also worked as operations officer for one of
                Toronto's top financial institutions downtown before moving onto
                her current position; she knows what it takes!
              </p>
            </div>
          </div>
          <div className="mb-0" data-aos="fade-up">
            <div className="flex justify-center mb-6">
              <img
                src="./images/founder-1.jpg"
                alt="Eileen Acosta"
                className="rounded-full shadow-lg w-40"
              />
            </div>
            <div className="md:w-[90%] mx-auto">
              <h5 className="text-xl font-semibold mb-4">Eileen Acosta</h5>
              <h6 className="font-semibold text-blue-600 mb-4">Founder</h6>
              <p className="px-8 mb-2 text-sm">
                Eileen is a graduate of Communication Arts in Saint Louis
                University, Baguio City, Philippines. She has over 8 years of
                extensive administrative experience in the corporate industry
                but is driven to accomplish more outside her 8 to 5 gig. A super
                mom of 3, Eileen is a go-getter with a pinch of artistic
                imagination. She creates a vision and sets goals to achieve her
                dreams. With confidence and faith in tow, she has embarked on an
                amazing journey as a student in Canada with her family. This
                blessing serves as her motivation to help create more
                opportunities and offer more options for aspiring international
                students. Using her platform on YouTube that she shares with her
                life partner, Sarkie Sabas, she was able to touch thousands of
                lives and inspire fellow Filipinos to start their Canadian dream
                and hopes to continue that through ISA.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8  mx-auto" data-aos="fade-up">
          <img
            className="h-40"
            src="https://exploreisa.com/wp-content/uploads/2022/01/Licensed-Education-Agent-768x321.png"
            alt="Licensed-Education-Agent"
          />
        </div>
      </div>
    </>
  );
};

export default Founders;
