import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import oracle from "../assets/oracle.png";
import spring from "../assets/spring.png";
import springboot from "../assets/springBoot.jpg";

const Experience = () => {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 6,
      logo: spring,
      name: "Spring",
    },
    {
      id: 7,
      logo: springboot,
      name: "Spring Boot",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div className="">
          <h1 className="text-3xl font-bold mb-5">Experience</h1>
          <span className="underline ">
            I've more than 1 year of Experience in below Technologies
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-7 my-3">
            {cardItem.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center border-[2px] bg-white rounded-2xl md:rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-[150px] rounded-full p-3"
                />
                <div className="">
                  <div className="p-3">{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
