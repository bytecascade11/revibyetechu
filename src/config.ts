// src/config.ts
// AstroPaper v5.5.0 complete config – fixes all TypeScript errors

import { SITE as SITE_TYPE } from "./types";

export const SITE: SITE_TYPE = {
  // Core site info
  website: "https://reviivyetechu.vercel.app/", // ← Your Vercel URL (update when you have a custom domain)
  author: "Reviiyee Techu",
  title: "Reviiyee Techu",
  description: "A minimal, accessible and SEO-friendly Astro blog theme.",
  desc: "A minimal, accessible and SEO-friendly Astro blog theme.", // Alias for description (used in RSS/older components)
  
  // Media & visuals
  ogImage: "astropaper-og.jpg", // Fallback OG image in /public
  profile: "/avatar.png", // Author profile image path (put your photo in /public/avatar.png)

  // UI/UX toggles
  lightAndDarkMode: true, // Enables theme switcher
  showBackButton: true, // "Back to top" button on posts
  showArchives: true, // Enables /archives page

  // Blog pagination & scheduling
  postPerPage: 10, // Posts per page on blog/archives
  postPerIndex: 10, // Posts on homepage/index
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes buffer for scheduled posts

  // Advanced features
  dynamicOgImage: true, // Auto-generates OG images for posts
  editPost: {
    enabled: false, // Set to true to show "Edit" button on posts
    url: "https://github.com/bytecascade11/reviivyetechu/edit/main/src/content/blog", // Your GitHub edit URL
    text: "Suggest Changes", // Button text (fixes EditPost.astro error)
  },

  // Internationalization & accessibility (fixes Layout.astro errors)
  lang: "en", // HTML lang attribute (default: en)
  dir: "ltr", // Text direction (ltr for left-to-right languages like English; rtl for Arabic/Hebrew)
  
  // Timezone (fixes Datetime.astro error)
  timezone: "UTC", // Your timezone (IANA format, e.g., "America/New_York" – see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
} as const;

// Navigation menu (customize as needed)
export const NAV_LINKS = [
  { text: "Home", href: "/" },
  { text: "Blog", href: "/blog" },
  { text: "About", href: "/about" },
  { text: "Tags", href: "/tags" },
] as const;

// Social links (add your real profiles)
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/", // or x.com
  github: "https://github.com/bytecascade11",
  linkedin: "",
  youtube: "",
  instagram: "",
  mastodon: "",
} as const;

// Footer links (add/remove pages as needed)
export const FOOTER_LINKS = [
  { text: "About the Editor", href: "/about-the-editor" },
  { text: "Contact Us", href: "/contact-us" },
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Terms & Conditions", href: "/terms-conditions" },
  { text: "Disclaimer", href: "/disclaimer" },
] as const;

// Analytics (add your Umami ID if using analytics)
export const ANALYTICS = {
  umamiWebsiteId: "", // Leave empty if not using Umami
} as const;

// Blog settings
export const BLOG = {
  disabled: false, // Set to true to disable blog entirely
  postsPerPage: 10,
  blog: {
    disabled: false,
    pathname: "blog", // URL path for /blog
  },
  post: {
    disabled: false,
    pathname: "", // Post slugs like /blog/my-post
  },
  category: {
    disabled: false,
    pathname: "category",
    categories: {
      Tutorial: "tutorial",
      "Behind the Scenes": "behind-the-scenes",
    },
  },
  tag: {
    disabled: false,
    pathname: "tag",
  },
} as const;
