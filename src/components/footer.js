import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ITEM } from "../static/constants";
import Socials from "./socials";
import NowPlaying from "./nowplaying";

const Footer = () => {
  const [go, setGo] = useState(false);

  useEffect(() => {
    let x = setTimeout(() => {
      setGo(true);
    }, 1600);
    return () => clearTimeout(x);
  }, []);

  return (
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
                    passionate creative. Self-taught in modern
                    web technologies,
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
                    Samuel spent the past years building industry
                    experience in design
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
                    and development strategy. All that empowered
                    by his passion and
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
                    products to it&apos;s full potential.
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
  );
};

export default Footer;
