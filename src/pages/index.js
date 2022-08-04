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
  const text = `Lama Lama is a creative digital agency. We
  deliver digital changes for companies with
  a conscience and brands with a heart. We
  embrace a fluid approach, and use our
  expertise to create longevity and value for
  our clients. Together with them we hope to
  make the world a little better.`;

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
                      Lama Lama is a creative digital agency.
                    </motion.span>
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 2, a: 62 }}
                      className="h"
                    >
                      We deliver digital changes for companies
                      with a conscience and brands with a heart.
                    </motion.span>
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 3, a: 62 }}
                      className="h"
                    >
                      We embrace a fluid approach, and use our
                      expertise to create longevity and value for
                      our clients.
                    </motion.span>
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 4, a: 62 }}
                      className="h"
                    >
                      Together with them we hope to make the 1
                      world a little better.
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
