export const ITEM = {
  hidden: ({ i, a }) => ({
    y: a,
    x: 0,
  }),
  visible: ({ i, a, d }) => ({
    y: 0,
    x: 0,
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      duration: 0.5,
      delay: d ? i * 0.015 : null,
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
export const PROJECT_DATA = [
  {
    name: "Hush",
    tech: ["React", "Node.js", "SASS"],
  },
  { name: "Viper", tech: ["React", "Node.js", "SASS"] },
  { name: "Mograine", tech: ["React", "Node.js", "SASS"] },
  { name: "Pigfingers", tech: ["React", "Node.js", "SASS"] },
];

export function getWindow() {
  return typeof window !== "undefined" ? window : null;
}

export default async function fetcher(input, init) {
  const res = await fetch(input, init);
  return res.json();
}
