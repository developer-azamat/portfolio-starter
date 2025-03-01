import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/image-1.jpg";
import Img2 from "../assets/image-2.jpg";
import Img3 from "../assets/poland.png";
import { Link } from "react-router-dom";
// import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section my-40" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-10"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight mb-9 text-accent">
                My latest <br /> work
              </h2>
              <p className="max-w-sm mb-36">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                adipisci maxime itaque eveniet placeat magni laboriosam soluta
                rem nulla vel.
              </p>
              <Link className="btn py-4 btn-sm" to='*'>View All Projects</Link>
            </div>
            {/* image */}
            <a href="https://codialuz.vercel.app/" className="group block relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <img
                src={Img1}
                alt=""
                className="group-hover:scale-125 h-[400px] object-cover transition-all duration-500"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">Codial IT School</span>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-8"
          >
            {/* text */}

            {/* image */}
            <a href="https://furniture-shop-site-injs.netlify.app/" className="group block relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <img
                src={Img2}
                alt=""
                className="group-hover:scale-125 h-[400px] object-cover transition-all duration-500"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">Furniture shop</span>
              </div>
            </a>
            {/* image */}
            <a href="https://poland24.netlify.app/index.html" className="group block relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <img
                src={Img3}
                alt=""
                className="group-hover:scale-125 h-[400px] object-cover transition-all duration-500"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">Poland 24</span>
              </div>
            </a>
          </motion.div>
          {/* <div className="flex-1"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Work;
