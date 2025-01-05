import React from "react";
import { DISHES } from "../constants";
import DishCard from "../components/DishCard.jsx";
import { motion } from "framer-motion";

const Dishes = () => {
  return (
    <section className="container mx-auto py-16" id="dishes">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl"
      >
        Our Dishes
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="grid grid-cols-1 gap-8 md:grid-cols-5"
      >
        {DISHES.map((project, index) => (
          <DishCard key={index} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Dishes;
