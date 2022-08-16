import "../styles/global.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          ease: [0.34, 0.53, 0.37, 1.02],
          duration: 0.5,
        }}
        variants={{
          initialState: {
            y: 0,
            opacity: 0,
          },
          animateState: {
            y: 0,
            opacity: 1,
          },
          exitState: {
            y: 50,
            opacity: 0,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
