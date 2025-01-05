import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
const ContactUs = () => {
  return (
    <section className="container mx-auto py-16" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Contact Us
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="text-neutral-400"
      >
        {CONTACT.map((detail) => (
          <p
            key={detail.key}
            className="my-20 border-b-2 border-dotted border-neutral-700 pb-12 text-center text-2xl tracking-tighter
          lg:text-3xl"
          >
            {detail.value}
          </p>
        ))}
      </motion.div>
    </section>
  );
};

export default ContactUs;
