export const SITE = {
  website: "https://reviivyetechu.vercel.app/",
  author: "Reviiyee Techu",
  title: "Reviiyee Techu",
  description: "A minimal, accessible and SEO-friendly Astro blog theme.",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes

  // ←←←←←←←←←←←←←←←←←←←←←← NEW KEYS THAT FIX THE LAST 4 ERRORS ←←←←←←←←←←←←←←←←←←←←←←
  lang: "en",                    // fixes Layout.astro lang error
  dir: "ltr",                    // fixes Layout.astro dir error (use "rtl" only for Arabic/Hebrew)
  timezone: "UTC",               // fixes Datetime.astro error – change to your real timezone later
  desc: "A minimal, accessible and SEO-friendly Astro blog theme.",
  profile: "/avatar.png",
  postPerIndex: 10,
  showArchives: true,
  dynamicOgImage: true,

  editPost: {
    enabled: false,              // change to true when you want the button
    url: "https://github.com/bytecascade11/reviivyetechu/edit/main/src/content/blog",
    text: "Edit this page",      // ← this fixes EditPost.astro error
  },
  // ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
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
