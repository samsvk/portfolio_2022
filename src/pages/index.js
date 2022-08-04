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
    }, 700);
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
                  <span className={`line `}>
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 1, a: 62 }}
                      className="h"
                    >
                      Crafting visual
                    </motion.span>
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 2, a: 62 }}
                      className="h"
                    >
                      personalities for
                    </motion.span>
                  </span>

                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 3, a: 62 }}
                      className="h"
                    >
                      digital-first brands
                    </motion.span>
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
