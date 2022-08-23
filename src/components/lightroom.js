import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import { CV_PROJECTS } from "../static/constants";
const Lightroom = (props) => {
  // if (typeof props.img !== "string") return null;
  return (
    <AnimatePresence>
      {CV_PROJECTS.find((item) => item.url === props.img) &&
        "/projects/viperino/main.jpg" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed top-0 min-w-full min-h-full max-h-screen bg-[#111111] z-[100]"
          >
            <div className="max-w-[1280px] items-center  mx-auto mt-10 flex flex-col">
              <div className="mt-1 relative rounded-lg pt-[55%] w-[100%] bg-black/5 overflow-hidden drop-shadow-sm">
                <Image
                  src={props.img}
                  objectFit="cover"
                  layout="fill"
                  height="100%"
                  width="100%"
                  quality={"100"}
                />
              </div>
              <button
                className="text-[12px] mt-10 font-[500] tracking-tight text-new-grey2 hover:text-new-grey1 duration-150 leading-normal align-text-top text-start pr-5 pl-3 py-2
            w-max  hover:cursor-pointer uppercase rounded-full border border-new-border flex items-center"
                onClick={() => props.setImg(null)}
              >
                <IoMdArrowForward
                  size={14}
                  className="mr-[4px] rotate-[-180deg]"
                />
                Close
              </button>
            </div>
          </motion.div>
        )}
    </AnimatePresence>
  );
};

export default Lightroom;
