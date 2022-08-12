import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ITEM, PROJECT_DATA } from "../static/constants";
import { GoPrimitiveDot } from "react-icons/go";
const Header = ({ setShow }) => {
  // const [go, setGo] = useState(false);
  // useEffect(() => {
  //   let x = setTimeout(() => {
  //     setGo(true);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(x);
  //   };
  // }, []);
  return (
    <header className="flex flex-col flex-start lg:justify-end h-full flex-1 text-[26px] md:text-[44px] lg:text-[50px] text-main-default tracking-tighter leading-[0.9] align-text-top lg:max-w-[85%] max-w-[100%] font-[300]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 1,
            ease: "easeInOut",
          },
        }}
        className="inline-flex mt-2 mb-5 ml-1 lg:mt-0"
      >
        <h2 className="mr-3 text-[14px] font-[400] tracking-tight text-main-secondary  leading-normal align-text-top text-start mb-1">
          Selected Works:
        </h2>
        <ul className="tracking-tight text-[14px] align-text-top text-start list-none text-main-default leading-normal flex gap-1.5">
          {PROJECT_DATA.map((p, i) => (
            <span
              content={`${p.tech.map((t) => t).join(", ")}`}
              className={`hover:after:opacity-100 after:duration-200 after:opacity-0 relative inline-block group text-start 
              after:bg-stone-100 after:rounded-lg 
              after:py-1 after:z-40 after:px-2.5 after:absolute 
              after:h-max after:w-max 
              after:top-[-2rem]
              after:left-[55%]
            after:translate-x-[-55%]
              after:content-[attr(content)]
              after:drop-shadow-md
              underline
              after:tracking-tight after:text-[14px] after:font-[400] after:align-text-top after:text-start after:list-none after:text-main-default after:leading-normal`}
              key={i}
            >
              <li
                onClick={() => setShow(p.name)}
                className="hover:cursor-pointer relative duration-500 font-[400] max-w-max hover:opacity-25 text-main-default flex items-center"
                key={i}
              >
                {PROJECT_DATA[PROJECT_DATA.length - 1].name ===
                p.name ? (
                  <>{p.name}</>
                ) : (
                  <>
                    {p.name}
                    {
                      <GoPrimitiveDot className="ml-1.5 text-center align-middle scale-50" />
                    }
                  </>
                )}
              </li>
            </span>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 1,
            ease: "easeInOut",
          },
        }}
        className="self-start leading-tight justify-self-start lg:self-end lg:justify-self-end"
      >
        Samuel (23) is a freelance front-end engineer with a
        strong focus on creating meaningful visual identities and
        timeless scaleable solutions working remotely in
        Edinburgh.
      </motion.div>
      {/* <div className="self-start justify-self-start lg:self-end lg:justify-self-end">
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 4, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start"
          >
            Samuel{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 5, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            (23){"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 6, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            is{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 7, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            a{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 8, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            freelance{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 9, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            front-end{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 10, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            engineer{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 11, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            with{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 12, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            a{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 13, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            strong{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 14, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            focus{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 15, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            on{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 16, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            creating{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 17, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            meaningful{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 18, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            visual{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 19, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            identities{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 20, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            and{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 21, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            timeless{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 22, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            scaleable{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 23, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            solutions{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 24, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            working{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 25, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            remotely{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 26, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            in{"\u00A0"}
          </motion.span>{" "}
        </span>
        <span className="relative inline-block overflow-hidden text-start">
          <motion.span
            variants={ITEM}
            initial="hidden"
            animate={go && "visible"}
            custom={{ i: 27, a: "150%", d: true }}
            className="inline-flex max-w-full align-text-top text-start "
          >
            Edinburgh.{"\u00A0"}
          </motion.span>{" "}
        </span>
      </div> */}
    </header>
  );
};

export default Header;
