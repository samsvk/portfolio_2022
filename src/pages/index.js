import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const item = {
  hidden: (i) => ({
    y: 20,
    x: 0,
    // opacity: 0,
  }),
  visible: (i) => ({
    // opacity: 1,
    y: 0,
    x: 0,
    transition: {
      ease: [0.16, 0.42, 0.5, 1.06],
      duration: 0.6,
      delay: i * 0.16,
    },
  }),
};

export default function Home() {
  const [go, setGo] = useState(false);
  return (
    <div className="ind">
      <p onClick={() => setGo(true)}>
        This is an example of fluid type that maintains vertical
        rhythm. I'll try and find the time to write it up in
        detail soon.
      </p>
      <footer className="footer">
        <div className="paragraph">
          <AnimatePresence>
            {go && (
              <>
                <span className="pc">
                  <motion.span
                    variants={item}
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
                    variants={item}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    className="p"
                  >
                    passionate creative. Self-teaching in modern
                    web technologies,{" "}
                  </motion.span>
                </span>
                <span className="pc">
                  <motion.span
                    variants={item}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    className="p"
                  >
                    Samuel spent the past years building industry
                    experience in design,{" "}
                  </motion.span>
                </span>
                <span className="pc">
                  <motion.span
                    variants={item}
                    initial="hidden"
                    animate="visible"
                    custom={3}
                    className="p"
                  >
                    development and strategy. All that empowered
                    by his passion and
                  </motion.span>
                </span>
                <span className="pc">
                  <motion.span
                    variants={item}
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
      </footer>
    </div>
  );
}
