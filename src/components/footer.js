import React from "react";
import { SOCIAL_DATA, WORK_DATA } from "../static/constants";
import { motion } from "framer-motion";
import NowPlaying from "./nowplaying";
import { child } from "./modal";
import Link from "next/link";

export const container = {
  hidden: {
    opacity: 1,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.6,
    },
  }),
};

const Footer = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={"visible"}
      className="flex flex-col w-full md:flex-row"
    >
      <div className="flex flex-col flex-1 md:flex-row">
        <motion.aside
          className="w-[100%] flex flex-col gap-8 md:gap-12"
          variants={child}
        >
          <div data="1">
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
              Who
            </h2>
            <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
              Samuel Campbell
            </p>
          </div>
          <div data="2">
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
              Email
            </h2>
            <p className=" duration-500 max-w-max hover:cursor-pointer hover:opacity-25 tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
              Hello@samsvk.com
            </p>
          </div>
          <div data="3">
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
              Socials
            </h2>
            <ul className="tracking-tight text-[14px] align-text-top text-start list-none text-main-default leading-normal">
              {SOCIAL_DATA.map(({ name, url }, i) => (
                <li
                  className="relative underline duration-500 max-w-max hover:cursor-pointer hover:opacity-25 text-main-default"
                  key={i}
                >
                  <a
                    href={`${url}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
        <motion.aside
          variants={child}
          className="flex flex-col w-full gap-8 my-8 md:gap-12 md:my-0"
        >
          <div data="1">
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
              Currently
            </h2>
            <p
              className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal 1 max-w-[90%] md:max-w-[80%] 
            lg:max-w-[65%]"
            >
              Looking to continue my growth in a cultivating and
              creative environment - as such I&apos;m is open to
              full-time employment offers in the UK or US.{" "}
              <Link href="resume">See my CV/Resume</Link>
            </p>
          </div>
          <div data="2">
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
              Previously
            </h2>
            <ul className="tracking-tight text-[14px] align-text-top text-start list-nonetext-main-default leading-normal  text-main-default">
              {WORK_DATA.slice(1, 4).map(({ name }, i) => (
                <li className="relative max-w-max" key={i}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>

      <motion.aside
        variants={child}
        className="flex flex-col w-full gap-12 flex-[0.5] lg:flex-1 "
      >
        <div data="1">
          <NowPlaying />
        </div>
      </motion.aside>
    </motion.div>
  );
};
export default Footer;
