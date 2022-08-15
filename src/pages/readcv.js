import React from "react";
import { motion } from "framer-motion";
import { child } from "../components/modal";
import { container } from "../components/footer";
import { AWARD_DATA, WORK_DATA } from "../static/constants";
import { IoMdArrowForward } from "react-icons/io";
import { SOCIAL_DATA } from "../static/constants";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineHome } from "react-icons/ai";
import Image from "next/image";

const Resume = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={"visible"}
      className="max-w-[500px] w-full mx-auto py-12 flex flex-col gap-10 font-normal"
    >
      <motion.div
        variants={child}
        className="flex items-end gap-5 mb-5"
      >
        <div className="relative">
          <div className="rounded-full relative h-[92px] w-[92px] overflow-hidden border border-main-secondary/20 drop-shadow-md">
            <Image
              src="/me.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <h1 className="flex-1 text-[22px] text-main-default text-start tracking-tighter leading-[0.9] align-text-top font-[400]">
            Samuel Campbell
          </h1>
          <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
            Developer based in Edinburgh, Scotland.
          </p>
          <ul className="tracking-tight text-[14px] align-text-top text-start list-none text-main-secondary leading-normal flex gap-1.5 mt-1.5">
            {SOCIAL_DATA.slice(0, 2).map(({ name, url }, i) => (
              <li
                className="hover:cursor-pointer relative duration-500 font-[400] max-w-max hover:opacity-25 text-main-secondary flex items-center"
                key={i}
              >
                <>
                  <a
                    href={`${url}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {name}
                  </a>

                  <span className="mt-[2px]">
                    <GoPrimitiveDot className="ml-1.5 text-center align-middle scale-50" />
                  </span>
                </>
              </li>
            ))}
            <li className="hover:cursor-pointer relative duration-500 font-[400] max-w-max hover:opacity-25 text-main-secondary flex items-center">
              Hello@Samsvk.com
            </li>
          </ul>{" "}
        </div>
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
          it&apos;s full potential. With that said, I am now
          looking to continue my growth in a cultivating and
          creative environment - as such I&apos;m is open to
          full-time employment offers.
        </p>
      </motion.div>
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
          it&apos;s full potential. With that said, I am now
          looking to continue my growth in a cultivating and
          creative environment - as such I&apos;m is open to
          full-time employment offers.
        </p>
      </motion.div>
      <motion.ul
        variants={child}
        className="tracking-tight text-[14px] align-text-top text-start list-none text-main-default leading-normal flex-col flex gap-8"
      >
        {WORK_DATA.map(({ name, url, time, type }, i) => (
          <li
            className="relative flex font-normal max-w-max text-main-default"
            key={i}
          >
            <span className="flex justify-evenly items-start gap-1 font-normal text-main-secondary min-w-[90px] max-h-[23px]">
              <span className="flex-1">{time.from}</span>
              <span className="block bg-main-secondary w-[11px] h-[0.05rem] mx-1 self-center" />
              <span className="flex-1 text-right justify-self-end ">
                {time.to}
              </span>
            </span>
            <div className="flex flex-col pl-10">
              <a
                href={`${url}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center duration-500 hover:cursor-pointer hover:opacity-25"
              >
                {name}{" "}
                <IoMdArrowForward className="ml-[4px] rotate-[-45deg]" />
              </a>
              <span className="font-normal text-main-secondary">
                {type}
              </span>
            </div>
          </li>
        ))}
      </motion.ul>
      <motion.div variants={child}>
        <h2 className="mb-5 text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start">
          Awards
        </h2>
        <ul className="tracking-tight text-[14px] align-text-top text-start list-none text-main-default leading-normal flex-col flex gap-8">
          {AWARD_DATA.map(({ title, when, url, from }, i) => (
            <li
              className="relative flex font-normal max-w-max text-main-default"
              key={i}
            >
              <span className="flex justify-evenly items-start gap-1 font-normal text-main-secondary min-w-[90px] max-h-[23px]">
                <span className="flex-1">{when}</span>
              </span>
              <div className="flex flex-col pl-10">
                <a
                  href={`${url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center duration-500 hover:cursor-pointer hover:opacity-25"
                >
                  {title}{" "}
                  <IoMdArrowForward className="ml-[4px] rotate-[-45deg]" />
                </a>
                <span className="font-normal text-main-secondary">
                  {from}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
