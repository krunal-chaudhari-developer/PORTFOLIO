import React from "react";
import inlifa from "../assets/portfolio/inlifa.png";
import hoobank from "../assets/portfolio/Hoobank website.png";
import newsmonkey from "../assets/portfolio/newsmonkey.png";
import todo from "../assets/portfolio/i-task todo.png";

const Portfolio = () => {
  const cardItem = [
    {
      id: 1,
      logo: todo,
      name: "i-Task Todo",
      demo: "https://i-tasktodolist.netlify.app/",
      code: "https://github.com/krunal-chaudhari-developer/TO_DO_LIST",
    },
    {
      id: 2,
      logo: inlifa,
      name: "Online Video Downloader",
      demo: "https://inlifa.netlify.app/",
      code: "https://github.com/krunal-chaudhari-developer/Video_Downloader_Frontend",
    },
    {
      id: 3,
      logo: newsmonkey,
      name: "News Website",
      demo: "https://newsinreact.netlify.app/",
      code: "https://github.com/krunal-chaudhari-developer/NEWSAPP_FRONTEND",
    },
    {
      id: 4,
      logo: hoobank,
      name: "Bank website Design",
      demo: "https://hoobanknetlify.netlify.app/",
      code: "https://github.com/krunal-chaudhari-developer/MODERN_BANK_APP",
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-3 my-5">
            {cardItem.map((item, index) => (
              <div
                key={index}
                className="md:w-[300px] bg-white shadow-lg border rounded-2xl p-1 cursor-pointer hover:scale-110 duration-300"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-96 p-1 rounded-t-xl"
                />
                <div className="font-bold text-xl my-2 px-2">{item.name}</div>
                <div className="px-6 py-4 justify-around space-x-2 md:space-x-4">
                  <button
                    onClick={() => window.open(item.demo)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => window.open(item.code)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                  >
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
