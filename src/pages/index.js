import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ITEM } from "../static/constants";
import SmoothScroll from "../components/hocs/SmoothScroll";
import { BiArrowBack } from "react-icons/bi";
import Intro from "../components/intro";
import Footer from "../components/footer";

export default function Home() {
  const [go, setGo] = useState(false);

  useEffect(() => {
    let x = setTimeout(() => {
      setGo(true);
    }, 1000);
    return () => {
      clearTimeout(x);
    };
  }, []);

  return (
    <SmoothScroll>
      <Intro />
      <div className="wrap">
        <div className="ind">
          <header className="header">
            <AnimatePresence>
              {go && (
                <>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 1, a: 82 }}
                      className="h"
                    >
                      Hello{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 2, a: 82 }}
                      className="h"
                    >
                      I'm{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 3, a: 82 }}
                      className="h"
                    >
                      Sam
                    </motion.span>{" "}
                  </span>
                  <span className="line">{"\u00A0"}</span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 4, a: 82 }}
                      className="h"
                    >
                      23.
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 5, a: 82 }}
                      className="h"
                    >
                      02.
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 6, a: 82 }}
                      className="h"
                    >
                      1999
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 6, a: 82 }}
                      className="h"
                    >
                      (23)
                    </motion.span>{" "}
                  </span>
                  <span className="line">{"\u00A0"}</span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 7, a: 82 }}
                      className="h"
                    >
                      Creative{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 8, a: 82 }}
                      className="h"
                    >
                      Developer{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 9, a: 82 }}
                      className="h"
                    >
                      in{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 10, a: 82 }}
                      className="h"
                    >
                      the{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 11, a: 82 }}
                      className="h"
                    >
                      UK
                    </motion.span>{" "}
                  </span>
                  <span className="line">{"\u00A0"}</span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 12, a: 82 }}
                      className="h"
                    >
                      Available{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 13, a: 82 }}
                      className="h"
                    >
                      for{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 14, a: 82 }}
                      className="h"
                    >
                      Freelance{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 14, a: 82 }}
                      className="h"
                    >
                      {"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 15, a: 82 }}
                      className="h"
                    >
                      (@Oct 2022)
                    </motion.span>{" "}
                  </span>
                  <span className="line">{"\u00A0"}</span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 16, a: 82 }}
                      className="h"
                    >
                      From{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 17, a: 82 }}
                      className="h"
                    >
                      tiny{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 18, a: 82 }}
                      className="h"
                    >
                      experiments{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 19, a: 82 }}
                      className="h"
                    >
                      to{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 19, a: 82 }}
                      className="h"
                    >
                      large{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 20, a: 82 }}
                      className="h"
                    >
                      scale{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 21, a: 82 }}
                      className="h"
                    >
                      consumer{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 22, a: 82 }}
                      className="h"
                    >
                      products;{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 23, a: 82 }}
                      className="h"
                    >
                      I've{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 24, a: 82 }}
                      className="h"
                    >
                      made{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 25, a: 82 }}
                      className="h"
                    >
                      it.{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                </>
              )}
            </AnimatePresence>
          </header>
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}
