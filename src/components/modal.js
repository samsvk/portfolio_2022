import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECT_DATA } from "../static/constants";
import { Swipe } from "./swiper";
import { VscChromeClose } from "react-icons/vsc";

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
            initial="hidden"
            animate={{
              x: 0,
              transition: {
                ease: [0.23, 1, 0.32, 1],
                duration: 0.3,
              },
            }}
            exit={{
              x: "200%",
              opacity: 0,
              transition: {
                ease: [0.23, 1, 0.32, 1],
                duration: 0.3,
              },
            }}
            className="max-w-[100vw] w-full bg-main-secondary/20 left-0 fixed h-screen z-[10000]"
          />

          <motion.div
            variants={MODAL}
            initial="hidden"
            animate="show"
            exit="invisible"
            className="max-w-[65vw] w-full bg-stone-100 right-0 fixed h-screen z-[100000] "
          >
            <section>
              <header className="px-12 pt-12 pb-7 relative text-[26px] md:text-[44px] lg:text-[50px] text-main-default tracking-tighter leading-[0.9] align-text-top font-light">
                <div
                  onClick={() => setShow("")}
                  className="hover:cursor-pointer absolute right-12 h-[33px] w-[33px] bg-white rounded-full drop-shadow-md flex items-center justify-center text-[16px] text-main-secondary "
                >
                  <VscChromeClose />
                </div>
                <h1>{p.name}</h1>
              </header>
              <section className="py-12">
                <div className="flex w-full flex-col md:flex-row pt-5 gap-3 md:gap-0 md:py-3 font-[400] px-12">
                  <div className="flex-[0.6] md:flex-1">
                    <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
                      Tech Stack
                    </h2>
                    <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
                      {p.tech.map((t, i) => (
                        <span className="mr-1" key={i}>
                          {t === p.tech[p.tech.length - 1]
                            ? `${t}.`
                            : `${t},`}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="w-[65%]">
                    <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
                      Brief
                    </h2>
                    <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal 1 max-w-[100%]">
                      {p.brief}
                    </p>
                  </div>
                </div>

                <div className="flex w-full flex-col md:flex-row pt-12 gap-3 md:gap-0 md:py-3 font-[400] px-12">
                  <div className="flex-[0.4] md:flex-1">
                    <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
                      Status
                    </h2>
                    <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
                      {p.scope[0]}
                    </p>
                    <h2 className="mt-3 text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
                      Site
                    </h2>
                    <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal relative underline duration-500 max-w-max hover:cursor-pointer hover:opacity-25">
                      localhost.com
                    </p>
                  </div>
                  <div className="w-[65%]">
                    <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
                      Strategy
                    </h2>
                    <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal 1 max-w-[100%]">
                      {p.strategy}
                    </p>
                  </div>
                </div>
              </section>
              {<Swipe views={[1, 2, 3, 4, 5]} />}
            </section>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
