import React from "react";
import { motion } from "framer-motion";
import { child } from "../components/modal";
import { container } from "../components/footer";
import {
  AWARD_DATA,
  CV_PROJECTS,
  WORK_DATA,
} from "../static/constants";
import { IoMdArrowForward } from "react-icons/io";
import { SOCIAL_DATA } from "../static/constants";
import { GoPrimitiveDot } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { RiExternalLinkLine } from "react-icons/ri";
import Lightroom from "../components/lightroom";
import { useState } from "react";

const Resume = () => {
  const [img, setImg] = useState(null);

  console.log(img);

  return (
    <>
      <Lightroom img={img} setImg={setImg} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.5,
            ease: "easeInOut",
            duration: 1,
          },
        }}
        className="text-[12px] left-3  top-3 absolute tracking-tight text-new-grey3 leading-normal align-text-top text-start
        w-max  hover:cursor-pointer underline duration-500 max-w-max hover:text-new-grey1  flex items-center font-normal "
      >
        <Link href="/">
          <span className="flex items-center">
            <IoMdArrowForward
              size={14}
              className="mr-[4px] rotate-[-180deg]"
            />
            Go Back
          </span>
        </Link>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate={"visible"}
        className="max-w-[550px] px-5 w-full mx-auto my-[4rem] flex flex-col gap-10 font-normal"
      >
        <motion.div
          variants={child}
          className="flex items-end gap-5 mb-5"
        >
          <div className="relative">
            <div className="rounded-full relative h-[92px] w-[92px] overflow-hidden border border-new-border drop-shadow-md">
              <Image
                src="/me.jpg"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 bottom-0"
              />
            </div>
          </div>
          <div className="flex flex-col gap-0.5">
            <h1 className="flex-1 text-[22px] text-new-grey1 text-start tracking-tighter leading-[0.9] align-text-top font-[400]">
              Samuel Campbell
            </h1>
            <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-new-grey2 leading-normal">
              Developer based in Edinburgh, Scotland.
            </p>
            <ul className="tracking-tight text-[14px] align-text-top text-start list-none text-new-grey3 leading-normal flex gap-1.5 mt-1.5">
              {SOCIAL_DATA.slice(0, 2).map(
                ({ name, url }, i) => (
                  <li
                    className="hover:cursor-pointer relative duration-500 font-[400] max-w-max hover:text-new-grey1 text-new-grey3 flex items-center"
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
                )
              )}
              <li className="hover:cursor-pointer relative duration-500 font-[400] max-w-max hover:text-new-grey1 text-new-grey3 flex items-center">
                <a href="mailto:samsvk00@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div variants={child}>
          <h2 className="text-[14px] font-[400] tracking-tight text-new-grey3 leading-normal align-text-top text-start mb-1">
            About
          </h2>
          <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-new-grey2 leading-normal">
            Samuel (23) is a freelance digital design and
            developer with a strong focus on creating meaningful
            visual identities and timeless scaleable solutions
            working remotely from Edinburgh.
          </p>
        </motion.div>
        <motion.div variants={child}>
          <h2 className="text-[14px] font-[400] tracking-tight text-new-grey3 leading-normal align-text-top text-start mb-1">
            Work Experience / Freelance
          </h2>
          <p className="tracking-tight text-[14px] align-text-top text-start  font-normal list-none text-new-grey2 leading-normal">
            As a passionate creative individual the past few
            years I spent building industry experience in design
            and development strategy. All that empowered by my
            passion and ambition drives me to grow brands and
            products to their full potential. With that said, I
            am now looking to continue my growth in a cultivating
            and creative environment - as such I&apos;m open to
            full-time employment offers.
          </p>
        </motion.div>
        <motion.ul
          variants={child}
          className="tracking-tight text-[14px] align-text-top text-start list-none text-new-grey2 leading-normal flex-col flex gap-8"
        >
          {WORK_DATA.map(({ name, url, time, type }, i) => (
            <li
              className="relative flex font-normal max-w-max text-new-grey2"
              key={i}
            >
              <span className="flex justify-evenly items-start gap-1 font-normal text-new-grey3 min-w-[90px] max-h-[23px]">
                <span className="flex-1">{time.from}</span>
                <span className="block bg-new-grey3 w-[11px] h-[0.05rem] mx-1 self-center" />
                <span className="flex-1 text-right justify-self-end ">
                  {time.to}
                </span>
              </span>
              <div className="flex flex-col pl-10">
                <a
                  href={`${url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center duration-500 hover:cursor-pointer hover:text-new-grey1"
                >
                  {name}{" "}
                  <IoMdArrowForward className="ml-[4px] rotate-[-45deg]" />
                </a>
                <span className="font-normal text-new-grey3">
                  {type}
                </span>
              </div>
            </li>
          ))}
        </motion.ul>
        <motion.ul
          variants={child}
          className="tracking-tight text-[14px] align-text-top text-start list-none text-new-grey2 leading-normal flex-col flex gap-8"
        >
          <p className="tracking-tight text-[14px] align-text-top text-start  font-normal list-none text-new-grey2 leading-normal">
            Below lists some recent projects such as creative
            front-end applications to full-stack industrial
            solutions. These projects provide a high-level
            overview of my progression as a developer, as each
            codebase shows different technologies and
            functionalities that are often used in today&apos;s
            web applications.
          </p>
          {CV_PROJECTS.map(({ name, url, time, tech }, i) => (
            <li
              className="relative flex font-normal max-w-max text-new-grey2"
              key={i}
            >
              <span className="flex justify-evenly items-start gap-1 font-normal text-new-grey3 min-w-[90px] max-h-[23px]">
                <span className="flex-1">{time.from}</span>
              </span>
              <div className="flex flex-col pl-10">
                <a
                  href={`https://github.com/samsvk`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center duration-500 hover:cursor-pointer hover:text-new-grey1"
                >
                  {name}
                  <RiExternalLinkLine className="ml-[4px]" />
                </a>
                <span className="font-normal text-new-grey3">
                  {tech.map((t) => t).join(", ")}
                </span>

                <div
                  className="mt-2 relative rounded-lg h-[63px] w-[106px] bg-new-offset border border-new-border drop-shadow-sm overflow-hidden hover:cursor-pointer grayscale"
                  onClick={() => setImg(`${url}`)}
                >
                  <Image
                    src={url}
                    objectFit="cover"
                    layout="fill"
                    height="100%"
                    quality={100}
                    width="100%"
                  />
                </div>
              </div>
            </li>
          ))}
        </motion.ul>
        <motion.div variants={child}>
          <h2 className="mb-5 text-[14px] font-[400] tracking-tight text-new-grey3 leading-normal align-text-top text-start">
            Awards
          </h2>
          <ul className="tracking-tight text-[14px] align-text-top text-start list-none text-new-grey2 leading-normal flex-col flex gap-8">
            {AWARD_DATA.map(({ title, when, url, from }, i) => (
              <li
                className="relative flex font-normal max-w-max text-new-grey2"
                key={i}
              >
                <span className="flex justify-evenly items-start gap-1 font-normal text-new-grey3 min-w-[90px] max-h-[23px]">
                  <span className="flex-1">{when}</span>
                </span>
                <div className="flex flex-col pl-10">
                  {title}
                  <span className="font-normal text-new-grey3">
                    {from}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Resume;
