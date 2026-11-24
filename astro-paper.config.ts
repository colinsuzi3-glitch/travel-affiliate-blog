import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://travel-affiliate-blog.pages.dev/",
    title: "Travelling well",
    description: "Real stories from travel paired with proven and tested travel gear, packing systems, and compact beauty and health products to help you travel well",
    author: "Colin Paixao",
    profile: "https://travel-affiliate-blog.pages.dev/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/Edmonton",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
      text: "Edit page",
      url: "https://github.com",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
  
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
