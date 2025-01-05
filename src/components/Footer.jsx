import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import motion from "framer-motion";

const Footer = () => {
  return (
    <footer className="mb-8 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.14 }}
        className="flex items-center justify-center gap-8"
      >
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </motion.div>
      <p className="mt-8 text-center tracking-tighter text-neutral-500">
        &copy;NevinBali. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
