import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECT_DATA } from "../static/constants";
import { Swipe } from "./swiper";
import { VscChromeClose } from "react-icons/vsc";

const MODAL = {
  hidden: {
    y: "100%",
    transition: {
      ease: [0.23, 1, 0.32, 1],
      duration: 0.6,
    },
  },
  show: {
    y: 0,
    transition: {
      ease: [0.23, 1, 0.32, 1],
      duration: 0.6,
    },
  },
  invisible: {
    y: "100%",
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

  function handleClose(e) {
    if (e.keyCode === 27) {
      setShow("");
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleClose);
    return () =>
      window.removeEventListener("keydown", handleClose);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      {p && (
        <>
          <motion.div
            onClick={() => setShow("")}
            variants={MODAL}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                ease: [0.23, 1, 0.32, 1],
                duration: 0.1,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                ease: [0.23, 1, 0.32, 1],
                duration: 0.1,
              },
            }}
            className="max-w-[100vw] w-full bg-main-secondary/40 left-0 fixed h-full z-[10000]"
          />

          <motion.div
            variants={MODAL}
            initial="hidden"
            animate="show"
            exit="invisible"
            className="max-w-[100vw] lg:max-w-[55vw] 
            w-full h-full  mx-auto right-0 left-0 mt-auto bottom-0 fixed z-[100000]
            flex no-scrollbar items-center"
          >
            <section className="w-full mt-auto border border-r max-h-max bg-stone-100 rounded-tl-xl rounded-tr-xl border-main-default/60">
              <div className="flex flex-col gap-10 p-12 md:flex-row ">
                <div className="flex flex-col flex-1 max-h-max">
                  <div className="relative h-max">
                    <h1 className="flex-1 text-[42px] text-main-default tracking-tighter leading-[0.9] align-text-top font-[500]">
                      {p.name}
                    </h1>
                    <p className="duration-500 tracking-tight text-[14px] mt-2 align-text-top text-start list-none text-main-default leading-normal max-w-[300px]">
                      {p.desc}
                    </p>
                  </div>

                  <div className="items-end self-start mt-10 justify-self-end md:mt-auto">
                    <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
                      Tech Stack
                    </h2>
                    <ul className="tracking-tight text-[14px] align-text-top text-start list-nonetext-main-default leading-normal  text-main-default flex gap-1">
                      {p.tech.map((t, i) => (
                        <li
                          className="relative max-w-max"
                          key={i}
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <h2 className="mt-5 text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
                      Status
                    </h2>
                    <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal 1">
                      {p.scope[0]} - {p.scope[1]}
                    </p>
                  </div>
                </div>

                <div className="flex-[1.5]">
                  <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
                    Brief
                  </h2>
                  <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal 1 w-[100%]">
                    {p.brief}
                  </p>
                  <h2 className="mt-10 text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
                    Strategy
                  </h2>
                  <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal 1 w-[100%]">
                    {p.strategy}
                  </p>
                </div>
              </div>
              <div className="pb-10">
                {<Swipe views={[1, 2, 3, 4, 5]} />}
              </div>
            </section>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
