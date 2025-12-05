export const SITE = {
  website: "https://reviivyetechu.vercel.app/",     // ← change this to your real URL later
  author: "Reviiyee Techu",
  title: "Reviiyee Techu",
  description: "A minimal, accessible and SEO-friendly Astro blog theme.",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showBackButton: true,

  // ——— ADDING ALL THE MISSING KEYS THAT FIX THE 17 ERRORS ———
  desc: "A minimal, accessible and SEO-friendly Astro blog theme.",
  profile: "/avatar.png",                    // put your photo in /public/avatar.png if you want
  postPerIndex: 10,                          // same as postPerPage or change it
  editPost: {
    enabled: false,                          // set true + add url below if you want "Edit on GitHub"
    url: "https://github.com/yourname/yourname.github.io/edit/main/src/content/blog",
  },
  dynamicOgImage: true,                      // keeps the nice auto OG images working
  showArchives: true,
  // ————————————————————————————————
} as const;

export const NAV_LINKS = [
  { text: "Home", href: "/" },
  { text: "Blog", href: "/blog" },
  { text: "About", href: "/about" },
  { text: "Tags", href: "/tags" },
];

export const SOCIAL_LINKS = {
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
