import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ITEM } from "../static/constants";
import { useState } from "react";

const Intro = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActive((a) => a + 1);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [active]);

  const T = {
    hidden: { y: "100%", color: "white" },
    show: {
      y: "0%",
      transition: {
        delay: 1,
        ease: "easeInOut",
        duration: 1,
      },
    },
    invisible: {
      y: "-100%",
      transition: {
        delay: 0.6,
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  return (
    <div className="flex items-center justify-center max-w-full max-h-full min-h-screen min-w-screen">
      <span className="relative inline-block overflow-hidden text-start text-[70px] text-main-default tracking-tighter leading-[0.9] align-text-top">
        <div className="relative flex flex-col whitespace-nowrap h-[150px] bg-main-default w-[120px]">
          <AnimatePresence exitBeforeEnter>
            {active === 0 && (
              <>
                <motion.span
                  variants={T}
                  initial={"hidden"}
                  animate={"show"}
                  exit={"invisible"}
                >
                  0
                </motion.span>
              </>
            )}
          </AnimatePresence>

          <AnimatePresence exitBeforeEnter>
            {active === 1 && (
              <>
                <motion.span
                  variants={T}
                  initial={"hidden"}
                  animate={"show"}
                  exit={"invisible"}
                >
                  1
                </motion.span>
              </>
            )}
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            {active === 2 && (
              <>
                <motion.span
                  variants={T}
                  initial={"hidden"}
                  animate={"show"}
                  exit={"invisible"}
                >
                  2
                </motion.span>
              </>
            )}
          </AnimatePresence>
        </div>
      </span>
    </div>
  );
};

export default Intro;
