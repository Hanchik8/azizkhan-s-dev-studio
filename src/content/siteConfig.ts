export const siteConfig = {
  name: "Azizkhan Nurlanov",
  title: "Full-Stack Developer",
  tagline: "React & Spring Boot Enthusiast",
  description:
    "Full-Stack Developer and 2nd year Computer Engineering student at IAAU. Building modern web applications with React, TypeScript, and Spring Boot.",
  url: "https://azizkhan.dev",
  email: "Azizkhan1232281@gmail.com",
  location: "Bishkek, Kyrgyzstan",
  social: {
    github: "https://github.com/Hanchik8",
    linkedin: "https://www.linkedin.com/in/azizkhan-nurlanov-382135345/",
    telegram: "https://t.me/Hanchik_8",
  },
  status: "2nd Year Student • Open to Internships",
  education: {
    university: "International Ataturk-Alatoo University",
    degree: "Computer Engineering",
    years: "2024 - 2028",
    currentYear: 2,
  },
} as const;

export type SiteConfig = typeof siteConfig;
