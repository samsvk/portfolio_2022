import React from "react";
import { SOCIAL_DATA, ITEM } from "../static/constants";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <ul className="socials">
      {SOCIAL_DATA.map((s, i) => (
        <span className="pc" key={i}>
          <li
            variants={ITEM}
            initial="hidden"
            animate="visible"
            custom={{ i, a: 20, d: true }}
            key={i}
          >
            {s.name}
          </li>
        </span>
      ))}
    </ul>
  );
};

export default Socials;
