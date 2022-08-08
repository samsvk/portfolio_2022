import React from "react";
import { SOCIAL_DATA } from "../static/constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 5, duration: 1, ease: "easeInOut" },
      }}
      className="absolute bottom-[3rem] flex gap-8 mt-20"
    >
      <div className="flex flex-col flex-1 py-2 border-t-2 border-main-secondary/20">
        <h2 className="text-[14px] font-[600] tracking-tight py-2">
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
      </div>
      <div className="flex flex-col flex-1 py-2 border-t-2 border-main-secondary/20">
        <h2 className="text-[14px] font-[600] tracking-tight py-2">
          Status
        </h2>
        <p className="list-none text-main-secondary text-[14px] font-[600] tracking-tight">
          I&apos;m Chillin&apos; 😎
        </p>
        <h2 className="text-[14px] font-[600] tracking-tight  py-2">
          Availability
        </h2>
        <p className="list-none text-main-secondary text-[14px] font-[600] tracking-tight">
          Available for Freelance Projects in October&apos;22
        </p>
        <h2 className="text-[14px] font-[600] tracking-tight py-2">
          Role
        </h2>
        <p className="list-none text-main-secondary text-[14px] font-[600] tracking-tight">
          Design, Development and SEO
        </p>
      </div>
      <div className="flex flex-col flex-1 py-2 border-t-2 border-main-secondary/20">
        <h2 className="text-[14px] font-[600] tracking-tight py-2">
          About
        </h2>
        <p className="list-none text-main-secondary text-[14px] font-[600] tracking-tight">
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
      </div>
    </motion.footer>
  );
};

export default Footer;
