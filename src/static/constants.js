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
    name: "Viperino",
    scope: ["Active", "1 Month"],
    overview: `Viperino `,
    tech: ["Next", "Stripe", "Tailwind"],
  },
  {
    name: "Hush",
    scope: ["Active", "2 Months"],
    overview:
      "As a movie fanatic, I found myself spending countless hours trying to find what's next. In a world of digital entertainment, we're spoiled by choice and often we spend more time trying to pick what we want to watch than actually watching. The benefits of Hush become aparent when considering a large group of people trying to decide on what to watch. Hush allows multiple users to vote on what they'd like to watch and present the appropriate selection to the group of users once everyone is ready.",
    tech: ["Typescript", "SASS", "Node"],
  },
  {
    name: "Mograine",
    scope: ["Closed", "4 Months"],
    overview:
      "Taking into account the RPG values of Warcraft, and Blizzards unique design patterns - the goal was to produce a UI with an art style that Blizzard would ship. When playing Classic WoW, I began to see a recurring theme of the userbase not having the required additional information to make the correct calculations which lead to me building Mograine a now globally used application within the World of Warcraft scene.",
    tech: ["Typescript", "BEM"],
  },
  {
    name: "Pigfingers",
    scope: ["Active", "2 Weeks"],
    overview:
      "As a typing enthusiast with record breaking scores of over 250WPM+ I had the urge to build a personal typeracer that I had full fledge control over. Pigfingers includes tons of settings, modifiers, gametypes, custom keybinds, and a smooth caret for competitive typists. The typing scene was left grounded when the fan favorite typing services went down with no explaination and that lead me on the journey for building Pigfingers.",
    tech: ["React", "SASS"],
  },
];

export function getWindow() {
  return typeof window !== "undefined" ? window : null;
}

export default async function fetcher(input, init) {
  const res = await fetch(input, init);
  return res.json();
}
