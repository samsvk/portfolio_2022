import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const [go, setGo] = useState(false);

  useEffect(() => {
    let x = setTimeout(() => {
      setGo(true);
    }, 2000);
    return () => clearTimeout(x);
  }, []);

  return (
    <>
      <motion.div
        className="box"
        initial={{ y: 0 }}
        onTransitionEnd={{ display: "none" }}
        animate={{
          y: "-100%",
          transition: {
            duration: 0.25,
            delay: 0.5,
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="box b"
        initial={{ x: 0 }}
        onTransitionEnd={{ display: "none" }}
        animate={{
          x: "100%",
          transition: {
            duration: 0.25,
            delay: 1,
            ease: "easeInOut",
          },
        }}
      />
    </>
  );
};

export default Intro;
