import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_DATA, ITEM } from "../static/constants";
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
          <p>
            Hello I'm Sam <span> / </span>Creative Developer{" "}
            <span> / </span> Born in the UK <span> / </span>{" "}
            Raised in Ireland
            <span> / </span>
            Available for Freelance
            <span> / </span>
            <br />
            From tiny experiments to large scale consumer
            products; I've made it.
          </p>
          <a className="header__a">hello@samsvk.com</a>
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
                        custom={0}
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
                        custom={1}
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
                        custom={2}
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
                        custom={3}
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
                        custom={4}
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
