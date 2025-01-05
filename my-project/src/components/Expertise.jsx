import React from "react";
import { CUSINES } from "../constants";
import { motion } from "framer-motion";

const Expertise = () => {
  return (
    <section id="expertise">
      <motion.h2
        nitial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="my-8 text-center text-3xl tracking-tighter lg:text-4xl"
      >
        Our Expertise
      </motion.h2>
      <div className="container mx-auto px-4">
        {CUSINES.map((cusine, index) => (
          <div
            className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2"
            key={index}
          >
            <div className="flex-shrink-0 pr-8 text-2xl">{cusine.number}</div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 4, delay: 1.2 }}
              className="w-1/3 flex-shrink-0"
            >
              <img src={cusine.image} className="h-auto rounded-3xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 4, delay: 1.2 }}
              className="pl-8"
            >
              <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                {cusine.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter">
                {cusine.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
