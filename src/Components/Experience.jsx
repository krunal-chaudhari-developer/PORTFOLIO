import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.jpg";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/node.png";
import mongodb from "../assets/mongodb.jpg";
import express from "../assets/express.png";
import redux from "../assets/redux.jpg";

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
      logo: tailwind,
      name: "Tailwind",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: bootstrap,
      name: "BootStrap",
    },
    {
      id: 6,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 7,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 8,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 9,
      logo: express,
      name: "Express",
    },
    {
      id: 10,
      logo: redux,
      name: "Redux",
    },
  ];
  return (
    <>
      <div
        name="Experience"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
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
