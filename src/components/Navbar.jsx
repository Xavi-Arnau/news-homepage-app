import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full fixed top-0 bg-white">
      <div className="md:w-3/4 h-24 mx-auto flex justify-between items-center">
        <div className="p-4 md:p-0">
          <img src={logo} alt="logo" />
        </div>

        <ul className="hidden md:flex gap-6 text-darkGrayish">
          <li className="px-6">
            <a href="#" className="hover:text-softRed">
              Home
            </a>
          </li>
          <li className="px-6">
            <a href="#" className="hover:text-softRed">
              New
            </a>
          </li>
          <li className="px-6">
            <a href="#" className="hover:text-softRed">
              Popular
            </a>
          </li>
          <li className="px-6">
            <a href="#" className="hover:text-softRed">
              Trending
            </a>
          </li>
          <li className="px-6">
            <a href="#" className="hover:text-softRed">
              Categories
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden mr-6 z-20">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div
          className={
            nav
              ? "w-2/3 bg-white z-10 fixed h-full top-[0px] right-[0px] ease-in-out duration-500"
              : "fixed right-[-100%]"
          }
        >
          <div className="p-10">
            <ul className="text-3xl mt-20">
              <li className="p-5">
                <a href="#" className="hover:text-softRed">
                  Home
                </a>
              </li>
              <li className="p-5">
                <a href="#" className="hover:text-softRed">
                  New
                </a>
              </li>
              <li className="p-5">
                <a href="#" className="hover:text-softRed">
                  Popular
                </a>
              </li>
              <li className="p-5">
                <a href="#" className="hover:text-softRed">
                  Trending
                </a>
              </li>
              <li className="p-5">
                <a href="#" className="hover:text-softRed">
                  Categories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
