import React from "react";
import { SOCIAL_DATA } from "../static/constants";
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
      className="grid grid-cols-2 gap-8 mt-20 max-w-[1200px]"
    >
      <div className="flex flex-col flex-1 py-8 text-main-default border-t border-main-secondary font-[400] gap-4">
        <p className="tracking-tight text-[14px] leading-normal list-none">
          Samuel graduated in Digital Design and Development and
          is now a passionate creative. Self-taught in modern web
          technologies, Samuel spent the past years building
          industry experience in design and development strategy.
          All that empowered by his passion and ambition drives
          him to grow brands and products to it&apos;s full
          potential. Focusing on faster-web and user centered
          design, Samuel aims to provide clients with timeless
          and maintainable digital solutions.
        </p>
        <p className="tracking-tight text-[14px] leading-normal list-none">
          All that considered, Samuel would love to continue his
          growth in a cultivating and creative environment - as
          such he is open to full-time employment offers in the
          UK or US.
        </p>
        <p className="tracking-tight text-[14px] leading-normal list-none">
          With Sam's approach - from conception to creation;
          building accessible, timeless, scaleable solutions has
          lead to him gaining SOTD awards, honrable mentions, and
          features and often exceeding initial KPIs.
        </p>
      </div>
      <div className="flex flex-col max-w-[250px] py-8  border-t border-main-secondary font-[500]">
        <h2 className="text-[22px]  tracking-tight text-main-default">
          INTRO
        </h2>
      </div>
      {/* <div className="flex flex-col flex-1 py-2 border-t-2 border-main-secondary/20">
        <h2 className="text-[14px] font-[600] tracking-tight  py-1.5">
          Socials
        </h2>
        <ul className="list-none text-main-secondary text-[14px] font-[600] tracking-tight">
          {SOCIAL_DATA.map(({ name }, i) => (
            <li
              className="relative max-w-max after:duration-150 hover:after:w-full hover:cursor-pointer after:absolute after:w-0 after:left-0 after:bottom-0 after:h-[1px] after:bg-main-secondary/40"
              key={i}
            >
              {name}
            </li>
          ))}
        </ul>
      </div> */}
    </motion.footer>
  );
};

export default Footer;
