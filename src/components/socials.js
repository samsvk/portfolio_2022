import React from "react";
import { SOCIAL_DATA, ITEM } from "../static/constants";
import { motion, AnimatePresence } from "framer-motion";

const Socials = ({ go }) => {
  return (
    <ul className="socials">
      <AnimatePresence exitBeforeEnter>
        {go &&
          SOCIAL_DATA.map((s, i) => (
            <span className="pc" key={i}>
              <motion.li
                variants={ITEM}
                initial="hidden"
                animate="visible"
                custom={{ i, a: 20, d: true }}
                key={i}
              >
                {s.name}
              </motion.li>
            </span>
          ))}
      </AnimatePresence>
    </ul>
  );
};

export default Socials;
