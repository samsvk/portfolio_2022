import { AnimatePresence, motion } from "framer-motion";
import fetcher from "../static/constants";
import useSWR from "swr";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: i * 0,
    },
  }),
};

const child = {
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

const group = {
  hidden: {
    opacity: 0,
    display: "none",
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      duration: 0.24,
    },
  },
  visible: {
    y: 0,
    display: "block",
    opacity: 1,
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
    <motion.div
      variants={group}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      className="absolute flex flex-col w-full overflow-hidden rounded-lg bg-stone-100 top-[5rem] no-wrap whitespace-nowrap min-w-max"
    >
      <motion.div
        className="flex flex-col overflow-hidden"
        variants={container}
        initial="hidden"
        animate={show ? "visible" : "hidden"}
      >
        <motion.h2
          variants={child}
          custom={{ i: 1 }}
          className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-right mb-1"
        >
          Most played this month:
        </motion.h2>
        <ul className="tracking-tight text-[14px] align-text-top text-right list-nonetext-main-default leading-normal  text-main-default ">
          {data.data.tracks.map((track, i) => (
            <motion.li key={i} custom={i} variants={child}>
              <a
                href={`${track.songUrl}`}
                target="_blank"
                rel="noreferrer"
              >
                {track.title} - {track.artist}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
