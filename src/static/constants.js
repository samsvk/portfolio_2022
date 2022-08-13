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
      delay: d ? i * 0.01 : null,
    },
  }),
};

export const SOCIAL_DATA = [
  { name: "Github", url: "https://github.com/samsvk" },
  { name: "Twitter", url: "https://twitter.com/samsvk_" },
  { name: "Spotify" },
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
    brief: `Viperino is an online educational platform providing outstanding courses across various gaming titles. Providing users
    with unlimited guides through a one time payment model Viperino aims to provide high quality guides with a highly functional interactive web app. 
    My role in Viperino was to understand the groups vision for Viperino's visual indetity and bridge that gap creating a full-scale web app that reflects that identity using modern web technologies.
`,
    strategy: `I began researching competitors and highly consider their brand strategies. After numerous refrences to other educational sites and internal conversations it became apparent Viperino
    required a design which emphasised guide content with an easy to use navigation and filtering system.`,
    tech: ["Next", "Stripe", "Tailwind"],
  },
  {
    name: "Nextflix",
    scope: ["Active", "2 Months"],
    desc: "Fullstack app that large groups of movie fans to vote on their next flix.",
    brief:
      "Spending countless hours trying to find what's next in a world of digital entertainment we often find that we're spoiled by choice. Making the right decision can be a tedious task. The benefits of Nextflix become apparent when considering a large group of people trying to decide what to watch. Nextflix allows multiple users to vote on what they'd like to watch and present the appropriate selection to the group of users once everyone is ready.",
    strategy: `Considering other online voting platforms, I was able to understand the importance of being able to provide a lobby
quickly and subsequently serving appropriate results with as minimal steps as possible was going to be a fundamental to Nextflix's 
success. By creating a simple webflow chart, I was able to translate that directly into the application.`,
    tech: ["Typescript", "SASS", "Node", "Socket.io"],
  },
  {
    name: "Mograine",
    scope: ["Closed", "4 Months"],
    desc: "Front-end app that provides Warcraft players all PvP statistics.",
    brief:
      "Blizzard Entertainment's re-release of it's most popular franchies gave me the opportunity to take advantage of outdated technology. Mograine is a lightweight application built to provide World of Warcraft players the opportunity to complete complex calculations in a few steps that previously required google docs and tedious forumals.",
    strategy:
      "Taking into consideration Warcraft's RPG value and Blizzard Ent's unique design patterns I felt it was necessary to emulate that fantasy feeling.",
    tech: ["Typescript", "BEM"],
  },
  {
    name: "Pigfingers",
    scope: ["Active", "2 Weeks"],
    desc: "Fully fledged front-end typeracer with tons of custom settings.",
    brief:
      "As a typing enthusiast with record breaking scores I felt that the typist community deserved a modern take. It's no secret that a lot of typing applications are simply outdated and restrictive. I gained motivation to build Pigfingers a minimalistic typing application with tons of custom settings, modifiers, gametypes, custom keybinds, and a smooth caret.",
    strategy:
      "Typing has become a modern aesthetic - building a visually appealing site to match that was the baseline for Pigfingers. By using a mono font and vscode theming we were able to quickly achieve an eye-candy aesthetic that translated throughout the entire Pigfingers site.",
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
