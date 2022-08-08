import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ITEM } from "../static/constants";
import { useState } from "react";

const Intro = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (active < 3) {
        setActive((a) => a + 1);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [active]);

  const T = {
    hidden: {
      y: "100%",
      //  background: "orange"
    },
    show: ({ duration, delay }) => ({
      y: "0%",
      // background: "green",
      transition: {
        delay,
        ease: "easeInOut",
        duration,
      },
    }),
    invisible: ({ duration, delay }) => ({
      // background: "red",
      y: "-100%",
      transition: {
        delay,
        ease: "easeInOut",
        duration,
      },
    }),
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: "100%",
        transition: {
          ease: [0.83, 0, 0.17, 1],
          duration: 1,
          delay: 3.5,
          // delay: 1000,
        },
      }}
      className="flex items-center justify-center max-w-full max-h-full min-h-screen min-w-screen fixed bg-stone-200 min-w-full z-50 text-[16px]"
    >
      <div className="flex items-center justify-center">
        <div className="text-main-default text-[64px] font-[300] tracking-tight flex items-center justify-center">
          <span className="relative inline-block overflow-hidden text-start leading-[0.9] align-text-top">
            <div className="relative flex flex-col items-start justify-start whitespace-nowrap w-max text-end">
              <span className="opacity-[0]">0</span>
              <AnimatePresence exitBeforeEnter>
                {active === 0 && (
                  <>
                    <motion.span
                      variants={T}
                      initial={"hidden"}
                      animate={"show"}
                      exit={"invisible"}
                      custom={{ duration: 0.3, delay: 0 }}
                      className="absolute top-0 left-0 w-full opacity-0 will-change-transform"
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
                      custom={{ duration: 0.4, delay: 0.15 }}
                      className="absolute top-0 left-0 w-full opacity-0 will-change-transform"
                    >
                      3
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
                      custom={{ duration: 0.4, delay: 0.1 }}
                      className="absolute top-0 left-0 w-full opacity-0 will-change-transform"
                    >
                      6
                    </motion.span>
                  </>
                )}
              </AnimatePresence>
              <AnimatePresence exitBeforeEnter>
                {active === 3 && (
                  <>
                    <motion.span
                      variants={T}
                      initial={"hidden"}
                      animate={"show"}
                      exit={{ opacity: 0 }}
                      custom={{ duration: 0.4, delay: 0.1 }}
                      className="absolute top-0 left-0 w-full will-change-transform"
                    >
                      1
                    </motion.span>
                  </>
                )}
              </AnimatePresence>
            </div>
          </span>
          <span className="relative inline-block overflow-hidden text-start  leading-[0.9] align-text-top">
            <div className="relative flex flex-col items-end justify-end whitespace-nowrap w-max">
              <span className="opacity-[0]">0</span>
              <AnimatePresence exitBeforeEnter>
                {active === 0 && (
                  <>
                    <motion.span
                      variants={T}
                      initial={"hidden"}
                      animate={"show"}
                      exit={"invisible"}
                      custom={{ duration: 0.4, delay: 0.1 }}
                      className="absolute top-0 left-0 w-full opacity-0 will-change-transform"
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
                      custom={{ duration: 0.4, delay: 0.15 }}
                      className="absolute top-0 left-0 w-full will-change-transform"
                    >
                      3
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
                      custom={{ duration: 0.4, delay: 0.15 }}
                      className="absolute top-0 left-0 w-full will-change-transform"
                    >
                      6
                    </motion.span>
                  </>
                )}
              </AnimatePresence>
              <AnimatePresence exitBeforeEnter>
                {active === 3 && (
                  <>
                    <motion.span
                      variants={T}
                      initial={"hidden"}
                      animate={"show"}
                      exit={{ opacity: 0 }}
                      custom={{ duration: 0.4, delay: 0.15 }}
                      className="absolute top-0 left-0 w-full will-change-transform"
                    >
                      0
                    </motion.span>
                  </>
                )}
              </AnimatePresence>
            </div>
          </span>
          <span className="relative inline-block overflow-hidden text-start leading-[0.9] align-text-top">
            <div className="relative flex flex-col items-start justify-start whitespace-nowrap w-max">
              <span className="opacity-[0]">0</span>
              <AnimatePresence exitBeforeEnter>
                {active === 0 && (
                  <>
                    <motion.span
                      variants={T}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,

                        transition: {
                          delay: 0.3,
                          duration: 1,
                          ease: "easeInOut",
                        },
                      }}
                      exit={"invisible"}
                      custom={{ duration: 0.3, delay: 0.1 }}
                      className="absolute top-0 left-0 w-full will-change-transform"
                    >
                      1
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
                      custom={{ duration: 0.5, delay: 0.2 }}
                      className="absolute top-0 left-0 w-full will-change-transform"
                    >
                      3
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
                      custom={{ duration: 0.5, delay: 0.2 }}
                      className="absolute top-0 left-0 w-full will-change-transform"
                    >
                      6
                    </motion.span>
                  </>
                )}
              </AnimatePresence>
              <AnimatePresence exitBeforeEnter>
                {active === 3 && (
                  <>
                    <motion.span
                      variants={T}
                      initial={"hidden"}
                      animate={"show"}
                      exit={{ opacity: 0 }}
                      custom={{ duration: 0.5, delay: 0.2 }}
                      className="absolute top-0 left-0 w-full will-change-transform"
                    >
                      0
                    </motion.span>
                  </>
                )}
              </AnimatePresence>
            </div>
          </span>
        </div>
        <div>
          <h2 className="uppercase font-[600] text-[24px] tracking-tight  text-main-default align-text-top text-start leading-[1.2] flex items-start justify-start">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 1,
                    ease: "easeInOut",
                  },
                }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center"
              >
                <span className="text-[64px] align-text-top text-start font-[300] pr-2">
                  %
                </span>
                <div className="flex flex-col ml-4">
                  <span className="inline-flex max-w-full align-text-top text-start will-change-transform">
                    Sam Campbell
                  </span>
                  <span className="inline-flex max-w-full align-text-top text-start will-change-transform">
                    PORTFOLIO ©2022
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
