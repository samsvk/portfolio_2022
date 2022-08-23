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
  {
    name: "Freelance",
    time: { from: "2016", to: "Now" },
    url: "https://samsvk.com/",
    type: "Remote, Edinburgh",
  },
  {
    name: "Method",
    time: { from: "2018", to: "2019" },
    url: "https://method.gg/",
    type: "Remote + Scotland, UK",
  },
  {
    name: "SoaR",
    time: { from: "2017", to: "2018" },
    url: "https://soar.gg/",
    type: "Remote + Atlanta, Georgia",
  },
  {
    name: "Twitch",
    time: { from: "2016", to: "2018" },
    url: "https://twitch.tv/",
    type: "Remote, Edinburgh",
  },
];

export const CV_PROJECTS = [
  {
    name: "Viperino",
    time: { from: "2022" },
    tech: ["Next", "Stripe", "Tailwind"],
    url: "/projects/viperino/main.jpg",
  },
  {
    name: "Fontaine",
    time: { from: "2022" },
    tech: ["React", "SASS", "BEM"],
    url: "/projects/fontaine/main.jpg",
  },
  {
    name: "Nextflix",
    time: { from: "2022" },
    tech: ["Typescript", "SASS", "Node", "Socket.io"],
    url: "/projects/nextflix/main.jpg",
  },
  {
    name: "vivixstar",
    time: { from: "2022" },
    tech: ["Next", "Tailwind"],
    url: "/projects/vi/main.jpg",
  },
  {
    name: "Mograine",
    time: { from: "2021" },
    tech: ["Typescript", "BEM"],
    url: "/projects/mograine/main.jpg",
  },
  {
    name: "Pigfingers",
    time: { from: "2022" },
    tech: ["React", "SASS"],
    url: "/projects/pigfingers/main.jpg",
  },
];

export const AWARD_DATA = [
  {
    title: "Svk",
    when: 2021,
    url: "#",
    from: "25 of the best personal porfolios: Akram",
  },
  {
    title: "Mograine",
    when: 2021,
    url: "#",
    from: "Creative Community Design Winner: Blizzard",
  },
  {
    title: "Viperino",
    when: 2022,
    url: "#",
    from: "Creative Typography & Whitespace: Codegrid",
  },
  {
    title: "Viperino",
    when: 2022,
    url: "#",
    from: "Honorable Mention: Awwwards",
  },
];

export const PROJECT_DATA = [
  {
    name: "Viperino",
    desc: `Complete full-stack build that allows Viperino to sell custom gaming guides.`,
    scope: ["Active", "1 Month"],
    brief: `Viperino is an online educational platform providing outstanding courses across various gaming titles. Providing users
    with unlimited guides through a one time payment model Viperino aims to provide high quality guides with a highly functional interactive web app. 
    My role in Viperino was to understand the groups vision for Viperino's visual indetity and bridge that gap creating a full-scale web app that reflects that identity using modern web technologies.`,
    imgs: [
      "/projects/viperino/1.jpg",
      "/projects/viperino/2.jpg",
    ],
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
    imgs: [
      "/projects/nextflix/1.jpg",
      "/projects/nextflix/2.jpg",
    ],
  },
  {
    name: "Fontaine Studios",
    desc: `Front-end design for Fontaine Studio for displaying their latest products.`,
    scope: ["Active", "2 Weeks"],
    brief: `Fontaine is is a global brand focusing on great designed Playing Cards. Through cardistry and digital art, Fontaine has become the 'Supreme'
    of Cardistry.  As a card fan I felt that Fontaine would greatly benefit from simplistic one-page studio landing page that displayed their latest releases
    and restocked decks. `,
    imgs: ["/projects/fontaine/1.jpg"],
    strategy: `Fontaine thrives through simplicity I used that approach throughout this entire design trying to create a hands off experience. Using minimal elements, and automatic transitions allowed me to create a flow that not only the user can control but the website can dictate the users experience. `,
    tech: ["React", "SASS", "BEM"],
  },
  {
    name: "Svk",
    scope: ["Active", "On-Going"],
    desc: "Fullstack app that large groups of movie fans to vote on their next flix.",
    brief:
      "Svk is my personal slice of the internet. I wanted to use Svk to translate my personality via code - driven by simplistic and bold aesthetics with a focus on typography and whitespace I knew I could achieve that goal. I wanted to add a bit of everyday Sam, so I felt adding my current playing Spotify song as well as my top 10 most played would help achieve that.",
    strategy: `There wasn't much strategy in my portfolio, I honestly... just winged it. In past iterations of my portfolio I felt I tried too hard to make 
    an industry standard design and I wanted to achieve a different outcome with Svk.`,
    tech: ["Next", "Tailwind", "Node", "Framer Motion"],
    imgs: ["/projects/svk/1.jpg", "/projects/svk/2.jpg"],
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
    imgs: ["/projects/mograine/1.jpg"],
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
    imgs: [
      "/projects/pigfingers/3.jpg",
      "/projects/pigfingers/2.jpg",
    ],
  },
];

export function getWindow() {
  return typeof window !== "undefined" ? window : null;
}

export default async function fetcher(input, init) {
  const res = await fetch(input, init);
  return res.json();
}
