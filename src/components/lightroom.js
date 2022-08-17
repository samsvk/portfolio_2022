import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Lightroom = (props) => {
  if (typeof props.img !== "string") return null;
  return (
    <div className="fixed top-0 min-w-full min-h-full max-h-screen bg-[#edeceb] z-[100]">
      <div className="max-w-[1280px] items-center  mx-auto mt-10 flex flex-col">
        <div className="mt-1 relative rounded-lg pt-[55%] w-[100%] bg-black/5 overflow-hidden">
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
          className="mt-10"
          onClick={() => props.setImg(null)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Lightroom;
