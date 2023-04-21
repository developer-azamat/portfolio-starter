import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = ({ setSubmit }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 2000);
    e.target.reset();
    setMessage("")
    setName("")
  };

  return (
    <section className="lg:section py-16" id="contact">
      <div className="container mx-auto">
        <div className="flex  flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h1 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together
              </h1>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              onChange={(e) => {
                setName(e.target.value);
                console.log(name);
              }}
              required
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your name"
            />
            <input
              required
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your email"
            />
            <input
              onChange={(e) => {
                setMessage(e.target.value);
                console.log(message);
              }}
              type="text"
              required
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-6"
              placeholder="Your message"
            ></input>
            <div className="inline bg-white/20 text-cyan-400 font-semibold p-3 rounded-md">
              {name && <span>I am {name}</span>}
              {message && <span> and I want {message}</span>}
            </div>
            {/* <p>{name.length ? `I am ${name}` : "no name"}</p> */}
            <button className="btn btn-lg ">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
