export const ITEM = {
  hidden: ({ i, a }) => ({
    y: a,
    x: 0,
  }),
  visible: ({ i, a, d }) => ({
    y: 0,
    x: 0,
    transition: {
      ease: [0.075, 0.82, 0.165, 1],
      // ease: "easeInOut",
      duration: 1.1,
      delay: d ? i * 0.08 : null,
    },
  }),
};

export const SOCIAL_DATA = [
  { name: "Github" },
  { name: "Spotify" },
  { name: "Twitter" },
];
export const WORK_DATA = [
  { name: "Twitch" },
  { name: "Method" },
  { name: "SoaR" },
];

export function getWindow() {
  return typeof window !== "undefined" ? window : null;
}

export default async function fetcher(input, init) {
  const res = await fetch(input, init);
  return res.json();
}
