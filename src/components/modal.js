import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECT_DATA } from "../static/constants";
import { Swipe } from "./swiper";
import { VscChromeClose } from "react-icons/vsc";
import { useRouter } from "next/router";

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

export const container = {
  hidden: {
    opacity: 1,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: i * 0.18,
    },
  }),
};

export const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      duration: 0.5,
    },
  },
};

export const Modal = () => {
  useEffect(() => {
    window.addEventListener("keydown", handleClose);
    return () =>
      window.removeEventListener("keydown", handleClose);
  }, []);

  const router = useRouter();
  if (!router.isReady) return null;

  const p = PROJECT_DATA.find(
    (item) =>
      item.name.replace(/\s/g, "").toLowerCase() ===
      router?.query?.project
  );

  function handleClose(e) {
    if (e.keyCode === 27) {
      router.push("/");
    }
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {p && (
        <>
          <motion.div
            onClick={() => router.push("/")}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="max-w-[100vw] w-full bg-[rgba(0,0,0,0.5)] left-0 fixed h-full z-[10000]"
          />

          <motion.div
            variants={MODAL}
            initial="hidden"
            animate="show"
            exit="invisible"
            className="max-w-[990px]
            w-full h-full  mx-auto right-0 left-0 mt-auto bottom-0 fixed z-[100000]
            flex no-scrollbar items-center overflow-y-scroll"
          >
            <section className="relative w-full mt-auto overflow-y-scroll border border-r max-h-max bg-new-bg rounded-tl-xl rounded-tr-xl border-new-border no-scrollbar">
              <motion.div
                variants={container}
                initial="hidden"
                animate={"visible"}
              >
                <button
                  onClick={() => router.push("/")}
                  className="z-[1000000] absolute p-1.5 rounded-full text-new-grey3 right-3.5 top-3 bg-new-offset border border-new-border hover:cursor-pointer hover:text-new-grey1 duration-200"
                >
                  <VscChromeClose className="text-inherit" />
                </button>
                <div className="flex flex-col gap-10 p-6 md:p-12 md:flex-row ">
                  <motion.div
                    variants={child}
                    className="flex flex-col flex-1 max-h-max"
                  >
                    <div className="relative h-max">
                      <h1 className="flex-1 text-[42px] text-new-grey1 tracking-tighter leading-[0.9] align-text-top font-[500]">
                        {p.name}
                      </h1>
                      <p className="duration-500 tracking-tight text-[14px] mt-2 align-text-top text-start list-none text-new-grey2 leading-normal max-w-[300px]">
                        {p.desc}
                      </p>
                    </div>

                    <div className="items-end self-start mt-10 justify-self-end md:mt-auto">
                      <h2 className="text-[14px] font-[400] tracking-tight text-new-grey3 leading-normal align-text-top text-start mb-1">
                        Tech Stack
                      </h2>
                      <ul className="tracking-tight text-[14px] align-text-top text-start list-nonetext-new-grey2 leading-normal  text-new-grey2 flex gap-1">
                        {p.tech.map((t, i) => (
                          <li
                            className="relative max-w-max"
                            key={i}
                          >
                            {t === p.tech[p.tech.length - 1]
                              ? `${t}`
                              : `${t},`}
                          </li>
                        ))}
                      </ul>
                      <h2 className="mt-5 text-[14px] font-[400] tracking-tight text-new-grey3 leading-normal align-text-top text-start mb-1">
                        Status
                      </h2>
                      <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-new-grey2 leading-normal 1">
                        {p.scope[0]} - {p.scope[1]}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={child}
                    className="flex-[1.5]"
                  >
                    <h2 className="text-[14px] font-[400] tracking-tight text-new-grey3 leading-normal align-text-top text-start mb-1">
                      Brief
                    </h2>
                    <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-new-grey2 leading-normal 1 w-[100%]">
                      {p.brief}
                    </p>
                    <h2 className="mt-10 text-[14px] font-[400] tracking-tight text-new-grey3 leading-normal align-text-top text-start mb-1">
                      Strategy
                    </h2>
                    <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-new-grey2 leading-normal 1 w-[100%]">
                      {p.strategy}
                    </p>
                  </motion.div>
                </div>
                <motion.div variants={child} className="pb-10">
                  {<Swipe views={p.imgs} />}
                </motion.div>
              </motion.div>
            </section>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
