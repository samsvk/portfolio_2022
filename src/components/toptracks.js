import { AnimatePresence, motion } from "framer-motion";
import fetcher from "../static/constants";
import useSWR from "swr";

export const container = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: i * 0.18,
    },
  }),
};

export const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      duration: 0.5,
    },
  },
};

export default function Toptracks({ show, setShow }) {
  const { data } = useSWR("/api/top-tracks", fetcher);

  if (!data) {
    return null;
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute flex flex-col w-full overflow-hidden rounded-lg top-[3rem] no-wrap whitespace-nowrap min-w-max"
          variants={container}
          initial="hidden"
          exit="hidden"
          animate={"visible"}
        >
          <motion.h2
            variants={child}
            className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top md:text-right mb-1"
          >
            Most played this month:
          </motion.h2>
          <ul className="tracking-tight text-[14px] align-text-top md:text-right list-nonetext-main-default leading-normal  text-main-default ">
            {data.data.tracks.map((track, i) => (
              <motion.li key={i} variants={child}>
                <a
                  href={`${track.songUrl}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {track.title} - {track.artist}
                </a>
                <span>
                  <span className="px-1">/</span>(#{i + 1})
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
