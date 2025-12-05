// src/config.ts
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
  postPerPage: 10,
  postPerIndex: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  dynamicOgImage: true,
  lang: "en",
  dir: "ltr",
  timezone: "UTC",
  editPost: {
    enabled: false,
    url: "https://github.com/bytecascade11/reviivyetechu/edit/main/src/content/blog",
    text: "Suggest Changes",
  },
} as const;

export const NAV_LINKS = [
  { text: "Home", href: "/" },
  { text: "Blog", href: "/blog" },
  { text: "About", href: "/about" },
  { text: "Tags", href: "/tags" },
];

export const SOCIAL_LINKS = {
  {
  github: "https://github.com/bytecascade11",
  twitter: "",
  youtube: "",
  instagram: "",
  linkedin: "",
  mastodon: "",
};

export const FOOTER_LINKS = [
  { text: "About the Editor", href: "/about-the-editor" },
  { text: "Contact Us", href: "/contact-us" },
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Terms & Conditions", href: "/terms-conditions" },
  { text: "Disclaimer", href: "/disclaimer" },
];

export const ANALYTICS = {
  umamiWebsiteId: "",
};

export const BLOG = {
  disabled: false,
  postsPerPage: 10,
  blog: {
    disabled: false,
    pathname: "blog",
  },
  post: {
    disabled: false,
    pathname: "blog",
  },
};
