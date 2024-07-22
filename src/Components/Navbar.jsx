import React, { useState } from "react";
import pic from "../assets/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <div className="bg-white max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2">
          <img src={pic} alt="" className="h-12 w-12 rounded-full" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Kruna
            <span className="text-green-500 text-2xl">L</span>
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <div className="">
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="">
                <li className="hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to={item.text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {item.text}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <AiOutlineMenu size={24} /> : <IoCloseSharp size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}

      {!menu && (
        <div className="bg-white">
          <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
            {navItems.map((item, index) => (
              <div key={index} className="">
                <li className="hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={item.text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {item.text}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}

      <div></div>
    </div>
  );
};

export default Navbar;
