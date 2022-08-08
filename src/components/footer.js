import React from "react";
import { SOCIAL_DATA, WORK_DATA } from "../static/constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 3.6,
          duration: 1,
          ease: "easeInOut",
        },
      }}
      className="flex gap-y-8 mt-20 max-w-[100%]"
    >
      <div className="flex flex-col flex-[2] py-8 font-[400]">
        123
      </div>
      <div className="flex-[1.5] flex flex-col w-full">
        <div className="flex w-full flex-row gap-x-20 py-3 font-[400]">
          <div className="flex-1">
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
              creative environment - as such I'm is open to
              full-time employment offers in the UK or US.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-row gap-x-20 py-3 font-[400]">
          <div className="flex-1">
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
              Email
            </h2>
            <p className=" duration-150 max-w-max hover:cursor-pointer hover:opacity-25 tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
              hello@samsvk.com
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
              Previously
            </h2>
            <ul className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
              {WORK_DATA.map(({ name }, i) => (
                <li
                  className="relative duration-150 max-w-max hover:cursor-pointer hover:opacity-25"
                  key={i}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex w-full flex-row gap-x-20 py-3 font-[400]">
          <div className="flex-1">
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
              Others
            </h2>
            <ul className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
              {SOCIAL_DATA.map(({ name }, i) => (
                <li
                  className="relative duration-150 max-w-max hover:cursor-pointer hover:opacity-25"
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
