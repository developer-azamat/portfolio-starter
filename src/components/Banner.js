import React from "react";
import Image from "../assets/avatar.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll"

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Resume from '../resume/Resume Azamatjon Azimov.pdf'

const Banner = () => {
  return (
    <section className="section min-h-[85vh] lg:max-h-[78vh]" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] leading-[0.8] font-bold lg:text-[90px]"
            >
              Azamatjon <span>Azimov</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Student",
                  2000,
                  "Designer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              officia itaque aliquam reprehenderit
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact" className="btn btn-lg flex justify-center items-center">Contact me</Link>
              <a  href={Resume} className="text-gradient btn-link">
                My Resume
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a className="cursor-pointer" href="https://www.linkedin.com/in/azamatjon-azimov-306662254/">
                <FaLinkedin />
              </a>
              <a className="cursor-pointer" href="https://github.com/developer-azamat">
                <FaGithub />
              </a>
              <a className="cursor-pointer" href="https://www.instagram.com/azimov.pg1/">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} className="rounded-full object-cover" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
