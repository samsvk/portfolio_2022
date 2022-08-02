export const ITEM = {
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

export const SOCIAL_DATA = [
  { name: "Twitter" },
  { name: "Github" },
  { name: "Spotify" },
  { name: "Twitch" },
  { name: "Instagram" },
];

export function getWindow() {
  return typeof window !== "undefined" ? window : null;
}
