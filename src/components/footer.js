import React from "react";
import { SOCIAL_DATA, WORK_DATA } from "../static/constants";
import { motion } from "framer-motion";
import NowPlaying from "./nowplaying";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.5,
          duration: 1,
          ease: "easeInOut",
        },
      }}
      className="flex flex-1 flex-col-reverse lg:flex-row-reverse my-3 max-w-[100%]"
    >
      <div className="flex flex-col flex-1 font-[400] items-start lg:items-end mt-3 md:mt-0">
        <NowPlaying />
      </div>
      <div className="flex flex-col w-full md:flex-1">
        <div className="flex w-full flex-col md:flex-row pt-5 gap-3 md:gap-0 md:py-3 font-[400]">
          <div className="flex-[0.6] md:flex-1">
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
              Who
            </h2>
            <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
              Samuel Campbell
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
              Currently
            </h2>
            <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
              Looking to continue my growth in a cultivating and
              creative environment - as such I&apos;m is open to
              full-time employment offers in the UK or US.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col md:flex-row pt-5 gap-3 md:gap-0 md:py-3 font-[400]">
          <div className="flex-[0.6]  md:flex-1">
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
              Email
            </h2>
            <p className=" duration-500 max-w-max hover:cursor-pointer hover:opacity-25 tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
              Hello@samsvk.com
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
              Previously
            </h2>
            <ul className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
              {WORK_DATA.map(({ name }, i) => (
                <li className="relative max-w-max" key={i}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex w-full flex-col md:flex-row pt-5 gap-3 md:gap-0 md:py-3 font-[400]">
          <div className="flex-[0.6] md:flex-1">
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
              Socials
            </h2>
            <ul className="tracking-tight text-[14px] align-text-top text-start list-none text-main-default leading-normal">
              {SOCIAL_DATA.map(({ name }, i) => (
                <li
                  className="relative underline duration-500 max-w-max hover:cursor-pointer hover:opacity-25"
                  key={i}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
