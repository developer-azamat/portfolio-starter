import React, { useState } from "react";
import { BiHome, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  function handleMove() {
    setOpen(true);
  }
  function handleLeave() {
    setOpen(false);
  }
  return (
    <nav
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`fixed transition-all duration-300 ease-linear w-full overflow-hidden z-50 h-auto ${
        isOpen ? "lg:bottom-8 bottom-2" : "lg:-bottom-14 -bottom-10"
      }`}
    >
      <div className="">
        <div
          className="w-full flex text-2xl text-white/50 items-center justify-between rounded-full max-w-[460px]  bg-black/20 h-[96px] mx-auto px-5  backdrop-blur-2xl"
          m
        >
          <NavLink
            to="/"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BiHome />
          </NavLink>
          <NavLink
            to="/about"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BiUser />
          </NavLink>
          <NavLink
            to="services"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BsClipboardData />
          </NavLink>
          <NavLink
            to="work"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BsBriefcase />
          </NavLink>
          <NavLink
            to="contact"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BsChatSquareText />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
