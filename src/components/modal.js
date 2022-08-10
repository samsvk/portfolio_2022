import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECT_DATA } from "../static/constants";
import { Swipe } from "./swiper";

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
            className="max-w-[45vw] w-full bg-stone-100 right-0 fixed h-screen z-[100000] "
          >
            <section className="p-10">
              <header className="mb-[5rem] text-[26px] md:text-[44px] lg:text-[60px] text-main-default tracking-tighter leading-[0.9] align-text-top font-light">
                <h1>{p.name}</h1>
              </header>

              {<Swipe views={[1, 2, 3, 4, 5]} />}

              <div className="flex gap-x-10">
                <div className="w-[60%]">
                  <h2 className="text-[14px] font-normal tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
                    Overview
                  </h2>
                  <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
                    {p.overview}
                  </p>
                </div>
                <aside className="ml-auto justify-self-end">
                  <h2 className="text-[14px] font-normal tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
                    Technology
                  </h2>
                  <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
                    {p.tech.map((t, i) => (
                      <span className="mr-1">{t}</span>
                    ))}
                  </p>
                  <h2 className="mt-5 text-[14px] font-normal tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
                    Status
                  </h2>
                  <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
                    {p.scope[0]}
                  </p>
                </aside>
              </div>
            </section>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
