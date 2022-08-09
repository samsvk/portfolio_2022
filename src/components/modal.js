import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECT_DATA } from "../static/constants";

export const Modal = ({ show, setShow }) => {
  const p = PROJECT_DATA.find(
    (item) => item.name.toLowerCase() === show.toLowerCase()
  );

  return (
    <AnimatePresence exitBeforeEnter>
      {p && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="max-w-[45vw] w-full bg-orange-500 right-0 fixed h-screen z-[100000]"
        >
          modal
          <div onClick={() => setShow("")}>X</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
