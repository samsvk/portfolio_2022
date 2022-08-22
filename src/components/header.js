import React from "react";
import { motion } from "framer-motion";
import { PROJECT_DATA } from "../static/constants";
import { GoPrimitiveDot } from "react-icons/go";
import Link from "next/link";

export const container = {
  hidden: {
    opacity: 1,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.8,
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
const Header = ({ setShow }) => {
  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate={"visible"}
      className="
      mt-10
      justify-end
      flex-col
      flex h-full flex-1 text-[26px] 
      md:text-[44px] lg:text-[50px] text-main-default tracking-tighter leading-[0.9] align-text-top lg:max-w-[85%] max-w-[100%] font-[300]"
    >
      <motion.div
        variants={child}
        data="2"
        className="inline-flex flex-col mt-2 mb-5 ml-1 md:flex-row lg:mt-0"
      >
        <h2 className="mr-3 text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
          Recent Projects:
        </h2>
        <ul className="tracking-tight text-[14px] align-text-top text-start list-none text-main-default leading-normal flex gap-1.5">
          {PROJECT_DATA.slice(0, 4).map((p, i) => (
            <span
              content={`${p.tech.map((t) => t).join(", ")}`}
              className={`hover:after:opacity-100 after:duration-200 after:opacity-0 relative inline-block group text-start 
              after:bg-stone-50 after:rounded-lg after:py-1 after:z-40 after:px-2.5 after:absolute after:h-max after:w-max 
              after:top-[-2rem] after:left-[55%] after:translate-x-[-55%] after:content-[attr(content)] after:drop-shadow-sm
              underline after:tracking-tight after:text-[14px] after:font-[400] after:align-text-top after:text-start after:list-none after:text-main-default after:leading-normal`}
              key={i}
            >
              <li
                onClick={() => setShow(p.name)}
                className="hover:cursor-pointer relative duration-500 font-[400] max-w-max hover:opacity-25 text-main-default flex items-center"
                key={i}
              >
                {p.name}

                <span className="mt-[4px]">
                  <GoPrimitiveDot className="ml-1.5 text-center align-middle scale-50" />
                </span>
              </li>
            </span>
          ))}

          <span
            content={`For more projects see my CV`}
            className={`hover:after:opacity-100 after:duration-200 after:opacity-0 relative inline-block group text-start 
              after:bg-stone-50 after:rounded-lg after:py-1 after:z-40 after:px-2.5 after:absolute after:h-max after:w-max 
              after:top-[-2rem] after:left-[55%] after:translate-x-[-55%] after:content-[attr(content)] after:drop-shadow-sm
               after:tracking-tight after:text-[14px] after:font-[400] after:align-text-top after:text-start after:list-none after:text-main-default after:leading-normal`}
          >
            <Link href="readcv">
              <li className="hover:cursor-pointer underline relative duration-500 font-[400] max-w-max hover:opacity-25 text-main-default flex items-center">
                Curriculum Vitae
              </li>
            </Link>
          </span>
        </ul>
      </motion.div>
      <motion.div
        variants={child}
        data="2"
        className="self-start leading-tight justify-self-start lg:self-end lg:justify-self-end"
      >
        Samuel (23) is a freelance digital design and developer
        with a strong focus on creating meaningful visual
        identities and timeless scaleable solutions working
        remotely from Edinburgh.
      </motion.div>
    </motion.header>
  );
};

export default Header;
