export const ITEM = {
  hidden: ({ i, a }) => ({
    y: a,

    x: 0,
  }),
  visible: ({ i, a, d }) => ({
    y: 0,
    x: 0,

    transition: {
      ease: "easeInOut",
      duration: 0.7,
      delay: d ? i * 0.03 : null,
    },
  }),
};

export const SOCIAL_DATA = [
  { name: "Email" },
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
