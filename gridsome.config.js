// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

let siteurl = "https://ubtb.com/";

module.exports = {
  siteName: "Unofficial Beckhoff and TwinCAT Blog",
  siteDescription: "My personal blog about beckhoff and twincat discoveries",
  siteUrl: siteurl,
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Documentation", // Required
        baseDir: "./docs", // Where .md files are located
        pathPrefix: "/docs", // Add route prefix. Optional
        template: "./src/templates/Documentation.vue", // Optional
        plugins: [
          [
            "gridsome-plugin-remark-shiki",
            { theme: "Material-Theme-Palenight", skipInline: true },
          ],
        ],
      },
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
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "My personal blog about Beckhoff and TwinCAT musings",
          feed_url: siteurl + "rss.xml",
          site_url: siteurl,
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.summary,
          url: siteurl + node.path,
          author: "Kassym Dorsel",
          date: node.date,
        }),
        output: {
          dir: "./static",
          name: "rss.xml",
        },
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
