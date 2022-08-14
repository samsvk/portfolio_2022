import React from "react";
import { motion } from "framer-motion";
import { child } from "../components/modal";
import { container } from "../components/footer";
import { WORK_DATA } from "../static/constants";
import { TbArrowNarrowRight } from "react-icons/tb";
const Resume = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={"visible"}
      className="max-w-[500px] w-full mx-auto py-12 flex flex-col gap-10"
    >
      <motion.div variants={child}>
        <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
          About
        </h2>
        <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
          Samuel (23) is a freelance front-end engineer with a
          strong focus on creating meaningful visual identities
          and timeless scaleable solutions working remotely from
          Edinburgh.
        </p>
      </motion.div>
      <motion.div variants={child}>
        <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start mb-1">
          Work Experience / Freelance
        </h2>
        <p className="tracking-tight text-[14px] align-text-top text-start  font-normal list-none text-main-default leading-normal">
          As a passionate creative individual the past few years
          I have spent building industry experience design and
          development strategy. All that empowered by my passion
          and ambition drives me to grow brands and products to
          it's full potential. With that said, I am now looking
          to continue my growth in a cultivating and creative
          environment - as such I'm is open to full-time
          employment offers in the UK or US.
        </p>
      </motion.div>
      <motion.ul
        variants={child}
        className="tracking-tight text-[14px] align-text-top text-start list-none text-main-default leading-normal"
      >
        {WORK_DATA.map(({ name, url, time, type }, i) => (
          <li
            className="relative flex font-normal max-w-max text-main-default"
            key={i}
          >
            <span className="flex items-center gap-1 font-normal text-main-default/70 min-w-[120px]">
              {time.from} <TbArrowNarrowRight /> {time.to}
            </span>
            <a
              href={`${url}`}
              target="_blank"
              rel="noreferrer"
              className="underline duration-500 hover:cursor-pointer hover:opacity-25 "
            >
              {name}
            </a>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Resume;
