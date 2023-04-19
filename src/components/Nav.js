import React from "react";
import { BiHome, BiHomeAlt, BiUser } from "react-icons/bi";
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquare,
  BsSquare,
  BsChatSquareText,
} from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 h-auto">
      <div className="">
        <div
          className="w-full flex text-2xl text-white/50 items-center justify-between rounded-full max-w-[460px]  bg-black/20 h-[96px] mx-auto px-5  backdrop-blur-2xl"
          m
        >
          <Link
            activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
            to="home"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BiHome />
          </Link>
          <Link
            activeClass="active"
              smooth={true}
              spy={true}
            to="about"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BiUser />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}           
            to="services"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}           
            to="work"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}           
            to="contact"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
