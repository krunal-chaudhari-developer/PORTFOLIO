import React from "react";
import {
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaSquareFacebook,
} from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from "../assets/photo.avif";
import { BiDownload } from "react-icons/bi";

const Home = () => {
  const handleDownload = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1JIIhubw7EkpEwE02X9YVyRuAljSnI287/view?usp=drive_link"; // Replace with your PDF file URL
    const link = document.createElement("a");
    link.href = window.open(pdfUrl);
    link.download = "resume.pdf"; // Replace with your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
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
              My name is Krunal Chaudhari. I'm a Web Developer/MERN stack
              Developer. I also work on Live Projects. I used the technologies
              named HTML, CSS, JavaScript, ReactJS, Bootstrap, TailwindCSS and
              NodeJS. I make some projects during summer internship, I mentioned
              that projects in my Portfolio.
            </p>
            <br />
            <div className="">
              <h1 className="font-semibold">My CV:-</h1>
              <button
                onClick={handleDownload}
                className="flex bg bg-slate-200 px-3 py-1 mb-5 border shadow-sm shadow-black rounded-xl"
              >
                <BiDownload className="my-1 mx-1" /> Click to View
              </button>
            </div>

            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <FaSquareFacebook
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/share/hWbmjj98u2CpYgW5/?mibextid=qi2Omg"
                        )
                      }
                      className="text-2xl cursor-pointer hover:scale-110 duration-200"
                    />
                  </li>
                  <li>
                    <FaLinkedin
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/krunal-chaudhari-384a63209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        )
                      }
                      className="text-2xl cursor-pointer hover:scale-110 duration-200"
                    />
                  </li>
                  <li>
                    <IoLogoInstagram
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/krunal.chaudhari3?igsh=cTJnZmIydTIwMTFq"
                        )
                      }
                      className="text-2xl cursor-pointer hover:scale-110 duration-200"
                    />
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
