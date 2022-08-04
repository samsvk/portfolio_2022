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
        animate={{
          y: "-100%",
          transition: {
            duration: 0.25,
            delay: 50,
            ease: "easeInOut",
          },
        }}
      >
        <div className="box__child">
          <motion.div
            className="box__child--item"
            initial={{ bottom: 0 }}
            animate={{ bottom: "0%" }}
          >
            <span className="box__child--item--text">0</span>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Intro;
