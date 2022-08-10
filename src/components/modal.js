import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECT_DATA } from "../static/constants";

const MODAL = {
  hidden: {
    x: "100%",
    transition: {
      ease: [0.23, 1, 0.32, 1],
      duration: 0.6,
    },
  },
  show: {
    x: 0,
    transition: {
      ease: [0.23, 1, 0.32, 1],
      duration: 0.6,
    },
  },
  invisible: {
    x: "100%",
    transition: {
      ease: [0.23, 1, 0.32, 1],
      duration: 0.6,
    },
  },
};

export const Modal = ({ show, setShow }) => {
  const p = PROJECT_DATA.find(
    (item) => item.name.toLowerCase() === show.toLowerCase()
  );

  return (
    <AnimatePresence exitBeforeEnter>
      {p && (
        <>
          <motion.div
            variants={MODAL}
            initial="hidden"
            animate="show"
            exit={{
              x: "200%",
              transition: {
                ease: [0.23, 1, 0.32, 1],
                duration: 0.6,
              },
            }}
            className="max-w-[65vw] w-full bg-white/90  left-0 fixed h-screen z-[10000]"
          />

          <motion.div
            variants={MODAL}
            initial="hidden"
            animate="show"
            exit="invisible"
            className="will-change-transform max-w-[45vw] w-full bg-stone-100 right-0 fixed h-screen z-[100000] border-l border-main-default"
          >
            <section
              className="p-10"
              onClick={() => setShow("")}
            >
              123123
            </section>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
