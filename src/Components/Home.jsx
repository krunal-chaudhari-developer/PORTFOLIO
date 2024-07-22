import React from "react";
import {
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaSquareFacebook,
  FaTelegram,
} from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from "../assets/photo.avif";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1 className="">Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
              {/* <span className="text-red-700 font-bold">Developer</span> */}
            </div>
            <br />
            <p className="text-sm md:text-base text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              labore eius nemo commodi praesentium porro possimus, veniam
              suscipit autem doloribus, placeat delectus! Doloremque consequatur
              vel dolorum aspernatur culpa repellendus magnam.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <FaSquareFacebook className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaLinkedin className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <IoLogoYoutube className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaTelegram className="text-2xl cursor-pointer" />
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              alt=""
              className="rounded-full md:w-[450px] md:h-[450px]"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Home;
