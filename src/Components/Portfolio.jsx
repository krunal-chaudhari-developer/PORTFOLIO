import React from "react";
import java from "../assets/java.png";
import python from "../assets/python.webp";
import mongoDB from "../assets/mongodb.jpg";
import express from "../assets/express.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/node.png";

const Portfolio = () => {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: java,
      name: "Java",
    },
    {
      id: 3,
      logo: python,
      name: "Python",
    },
    {
      id: 4,
      logo: express,
      name: "Express",
    },
    {
      id: 5,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 6,
      logo: nodejs,
      name: "NodeJS",
    },
  ];
  return (
    <>
      <div
        name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
      >
        <div className="">
          <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
          <span className="underline font-semibold">Featured Projects</span>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-5">
            {cardItem.map((item, index) => (
              <div
                key={index}
                className="md:w-[300px] md:h-[300px] border-[2px] bg-white rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                />
                <div className="">
                  <div className="font-bold text-xl mb-2 px-2">{item.name}</div>
                  <p className="px-2 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="px-6 py-4 justify-around space-x-2 md:space-x-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    Demo
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
