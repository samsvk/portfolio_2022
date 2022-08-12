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
    desc: `Complete full-stack build that allows Viperino to sell custom gaming guides.`,
    scope: ["Active", "1 Month"],
    brief: `Viperino is an online educational platform providing outstanding courses across various gaming titles. In 2021, Viperino began development with a heavy focus in Valorant. Providing users
    with unlimited guides through a one time payment model. My role in Viperino was to understand
    the groups vision for Viperino's visual indetity and bridge that gap creating a full-scale web app that reflects that identity using modern web technologies.
`,
    strategy: `I began researching competitors and highly consider their brand strategies. After numerous refrences to other educational sites and internal conversations it became apparent Viperino
    required a design which emphasised guide content, improved filtering & navigation compared to competitors and most importantly a reliable payment collection method that remained faithful to Viperino's brand identity.`,
    tech: ["Next", "Stripe", "Tailwind"],
  },
  {
    name: "Nextflix",
    scope: ["Active", "2 Months"],
    desc: "Fullstack app that large groups of movie fans to vote on their next flix.",
    brief:
      "As a movie fanatic, I found myself spending countless hours trying to find what's next. In a world of digital entertainment, we're spoiled by choice and often we spend more time trying to pick what we want to watch than actually watching. The benefits of Netflix become aparent when considering a large group of people trying to decide on what to watch. Netflix allows multiple users to vote on what they'd like to watch and present the appropriate selection to the group of users once everyone is ready.",
    strategy: `Taking into account other online voting platforms, it became apparent that being able to serve a lobby and results with as minimal user info as possible was going to be a fundamental to Netflix's success. By creating a simple webflow we were able to translate that directly into the app where a large group of people could get results in 3 steps. `,
    tech: ["Typescript", "SASS", "Node", "Socket.io"],
  },
  {
    name: "Mograine",
    scope: ["Closed", "4 Months"],
    desc: "Front-end app that provides Warcraft players all PvP statistics.",
    brief:
      "After 15 years, Blizzard Entertainment re-released their original Warcraft title. With that said, it became apparently the technology used back then was widely regarded outdated. Mograine is a minimalistic application built to combat that allowing Warcraft users to complete complex calculations in a few steps that previously required google docs, long tedious caluclations and algorithms that weren't released publicly.",
    strategy:
      "Taking into account the RPG values of Warcraft, and Blizzards unique design patterns - the goal was to produce a UI with an art style that Blizzard would ship. When playing Classic WoW, I began to see a recurring theme of the userbase not having the required additional information to make the correct calculations which lead to me building Mograine a now globally used application within the World of Warcraft scene.",
    tech: ["Typescript", "BEM"],
  },
  {
    name: "Pigfingers",
    scope: ["Active", "2 Weeks"],
    desc: "Fully fledged front-end typeracer with tons of custom settings.",
    brief:
      "As a typing enthusiast with record breaking scores of over 250WPM+ I had the urge to build a personal typeracer that I had full fledge control over. Pigfingers includes tons of settings, modifiers, gametypes, custom keybinds, and a smooth caret for competitive typists. The typing scene was left grounded when the fan favorite typing services went down with no explaination and that lead me on the journey for building Pigfingers.",
    strategy:
      "Typing has become a modern aesthetic, building a visually appealing site to match that was the baseline for Pigfingers. By using a mono font, and vscode theming we were able to quickly achieve an eye-candy aesthetic that translated throughout the entire Pigfingers site.",
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
