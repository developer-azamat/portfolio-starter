import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const servises = [
  {
    name: "UI/UX design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum corrupti vero numquam laboriosam recusandae ",
    link: "Learn more",
  },
  {
    name: "Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum corrupti vero numquam laboriosam recusandae ",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum corrupti vero numquam laboriosam recusandae ",
    link: "Learn more",
  },
  {
    name: "Product Branding",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum corrupti vero numquam laboriosam recusandae ",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section my-10 min-h-screen" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I do.</h2>
            <h3 className="h3 mb-16 max-w-[455px]">
              I'm a Freelance Front-end Developer with over 5 years of
              experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              {servises.map((service, index) => {
                const { name, desc, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">{desc}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex items-center justify-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
