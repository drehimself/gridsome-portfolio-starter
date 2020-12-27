// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteOwner: 'Andre Madarang',
  siteAuthor: 'Andre Madarang',
  siteTwitter: '@drehimself',
  authorTwitter: '@drehimself',
  siteName: 'Gridsome Portfolio Starter',
  siteDescription: 'A simple portfolio theme for Gridsome powered by Tailwind CSS v1',
  siteKeywords: 'Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS',
  siteUrl: 'https://gridsome-portfolio-starter.netlify.com',
  // take a screen-shot of the homepage and make it available online
  // go to https://gridsome-portfolio-starter.netlify.com/landing_image
  // right click on the image and select: Copy Image Address and put the contents in siteImage
  siteImage: 'https://gridsome-portfolio-starter.netlify.com/assets/static/landing_image.png',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation', // Required
        baseDir: './docs', // Where .md files are located
        pathPrefix: '/docs', // Add route prefix. Optional
        template: './src/templates/Documentation.vue', // Optional
        plugins: [
          [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Gridsome Portfolio Starter Blog',
          feed_url: 'https://gridsome-portfolio-starter.netlify.com/rss.xml',
          site_url: 'https://gridsome-portfolio-starter.netlify.com/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: 'https://gridsome-portfolio-starter.netlify.com' + node.path,
          author: 'Andre Madarang',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
  templates: {
    Tag: '/tag/:id'
  },
  transformers: {
    remark: {
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
}
