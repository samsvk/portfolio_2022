import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_DATA, ITEM } from "../static/constants";
import Socials from "../components/socials";

export default function Home() {
  const [go, setGo] = useState(false);

  useEffect(() => {
    let x = setTimeout(() => {
      setGo(true);
    }, 2000);
    return () => clearTimeout(x);
  }, []);
  return (
    <div className="ind">
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
                      passionate creative. Self-teaching in
                      modern web technologies,{" "}
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
                      industry experience in design,{" "}
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
                      development and strategy. All that
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
          <div className="socialsTwo">123123</div>
        </div>
      </footer>
    </div>
  );
}
