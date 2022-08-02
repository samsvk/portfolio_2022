export const ITEM = {
  hidden: ({ i, a }) => ({
    y: a,
    x: 0,
    // opacity: 0,
  }),
  visible: ({ i }) => ({
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
export const SOCIAL_DATA = [
  { name: "Email" },
  { name: "Twitch" },
  { name: "Github" },
  { name: "Spotify" },
  { name: "Twitter" },
];

export function getWindow() {
  return typeof window !== "undefined" ? window : null;
}

export default async function fetcher(input, init) {
  const res = await fetch(input, init);
  return res.json();
}
