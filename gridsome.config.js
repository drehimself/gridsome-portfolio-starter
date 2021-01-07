// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

let siteurl = "https://kassymdorsel.com";
let siteTitle = "Unofficial Beckhoff and TwinCAT Blog";
let siteDescription =
  "Personal blog about beckhoff, twincat, data anaysis, and industrial automation";

module.exports = {
  siteName: siteTitle,
  siteDescription: siteDescription,
  siteUrl: siteurl,
  titleTemplate: "%s",
  icon: "./src/assets/favicon.ico",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/plugin-critical",
      options: {
        paths: ["/"],
        width: 1300,
        height: 900,
      },
    },
    {
      use: "@microflash/gridsome-plugin-feed",
      options: {
        contentTypes: ["Post"],
        feedOptions: {
          title: siteTitle,
          description: siteDescription,
        },
        rss: {
          enabled: true,
          output: "/feed.xml",
        },
        atom: {
          enabled: true,
          output: "/feed.atom",
        },
        json: {
          enabled: true,
          output: "/feed.json",
        },
        maxItems: 25,
        nodeToFeedItem: (node) => ({
          title: node.title,
          description: node.summary,
          url: siteurl + node.path,
          author: "Kassym Dorsel",
          date: node.date,
        }),
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
      },
    },
  ],
  templates: {
    Tag: "/tag/:id",
  },
  transformers: {
    remark: {
      plugins: [
        [
          "gridsome-plugin-remark-shiki",
          { theme: "Material-Theme-Palenight", skipInline: true },
        ],
      ],
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
    },
  },
};
