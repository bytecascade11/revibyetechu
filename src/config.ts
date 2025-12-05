// src/config.ts
// No import needed — your theme doesn't use types.ts

export const SITE = {
  website: "https://reviivyetechu.vercel.app/",
  author: "Reviiyee Techu",
  title: "Reviiyee Techu",
  description: "A minimal, accessible and SEO-friendly Astro blog theme.",
  desc: "A minimal, accessible and SEO-friendly Astro blog theme.",
  ogImage: "astropaper-og.jpg",
  profile: "/avatar.png",

  lightAndDarkMode: true,
  showBackButton: true,
  showArchives: true,

  true,

  postPerPage: 10,
  postPerIndex: 10,
  scheduledPostMargin: 15 * 60 * 1000,

  dynamicOgImage: true,

  lang: "en",
  dir: "ltr",
  timezone: "UTC",                    // change later if you want (e.g. "Asia/Bangkok")

  editPost: {
    enabled: false,
    url: "https://github.com/bytecascade11/reviivyetechu/edit/main/src/content/blog",
    text: "Suggest Changes",
  },
} as const;

// … rest of the file stays exactly the same (NAV_LINKS, SOCIAL_LINKS, etc.)
