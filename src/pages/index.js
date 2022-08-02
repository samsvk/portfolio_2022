import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SOCIAL_DATA,
  ITEM,
  ITEM_TITLE,
} from "../static/constants";
import SmoothScroll from "../components/hocs/SmoothScroll";
import Socials from "../components/socials";
import NowPlaying from "../components/nowplaying";

export default function Home() {
  const [go, setGo] = useState(false);

  useEffect(() => {
    let x = setTimeout(() => {
      setGo(true);
    }, 2000);
    return () => clearTimeout(x);
  }, []);

  return (
    <SmoothScroll>
      <div className="ind">
        <header className="header">
          <div>
            <AnimatePresence>
              {go && (
                <>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 1, a: 72 }}
                      className="h"
                    >
                      Hello I'm Sam{" "}
                      <span className="slash"> / </span>
                      Creative Developer
                      <span className="slash"> / </span>
                      Born
                    </motion.span>
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 2, a: 72 }}
                      className="h"
                    >
                      in the UK{" "}
                      <span className="slash"> / </span> Raised
                      in Ireland
                      <span className="slash"> / </span>
                      Available for
                    </motion.span>
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 3, a: 72 }}
                      className="h"
                    >
                      Freelance @ August 2022
                      <span className="slash"> / </span>
                      From tiny
                    </motion.span>
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 4, a: 72 }}
                      className="h"
                    >
                      experiments to large scale consumer
                    </motion.span>
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 4, a: 72 }}
                      className="h"
                    >
                      products; I've made it.
                    </motion.span>
                  </span>
                </>
              )}
            </AnimatePresence>
          </div>
        </header>

        <footer className="footer">
          <div className="grid">
            <div className="paragraph">
              <AnimatePresence>
                {go && (
                  <>
                    <span className="pc">
                      <motion.span
                        variants={ITEM}
                        initial="hidden"
                        animate="visible"
                        custom={{ i: 1, a: 20 }}
                        className="p"
                      >
                        Samuel graduated in Digital Design and
                        Development and is now a{" "}
                      </motion.span>
                    </span>
                    <span className="pc">
                      <motion.span
                        variants={ITEM}
                        initial="hidden"
                        animate="visible"
                        custom={{ i: 2, a: 20 }}
                        className="p"
                      >
                        passionate creative. Self-taught in
                        modern web technologies,
                      </motion.span>
                    </span>
                    <span className="pc">
                      <motion.span
                        variants={ITEM}
                        initial="hidden"
                        animate="visible"
                        custom={{ i: 3, a: 20 }}
                        className="p"
                      >
                        Samuel spent the past years building
                        industry experience in design
                      </motion.span>
                    </span>
                    <span className="pc">
                      <motion.span
                        variants={ITEM}
                        initial="hidden"
                        animate="visible"
                        custom={{ i: 4, a: 20 }}
                        className="p"
                      >
                        and development strategy. All that
                        empowered by his passion and
                      </motion.span>
                    </span>
                    <span className="pc">
                      <motion.span
                        variants={ITEM}
                        initial="hidden"
                        animate="visible"
                        custom={{ i: 5, a: 20 }}
                        className="p"
                      >
                        ambition drives him to grow brands and
                        products to it's full potential.
                      </motion.span>
                    </span>
                  </>
                )}
              </AnimatePresence>
            </div>

            <Socials go={go} />
            <div className="music">
              <NowPlaying go={go} />
            </div>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
