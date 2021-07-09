// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'
import config from '../gridsome.config'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)

  // Standart Meta-Tags
  head.meta.push(
    { name: 'image', conent: config.siteImage },
    { name: 'title', content: config.siteName },
    { name: 'author', content: config.siteAuthor },
    { name: 'keywords', content: config.keywords },
    { name: 'description', content: config.siteDescription }
  )

  // Open Graph Data
  // https://garywoodfine.com/gridsome-configure-basic-on-page-seo/
  head.link.push(
    { name: 'copyright', content: copyRightNotice },
    { property: "og:site_name", content: config.siteName },
    { key: "og:type", property: "og:type", content: 'article' },
    { key: "og:image", property: "og:image", content: config.siteImage },
    { key: "og:description", property: "og:description", content: config.siteDescription }
  )

  // Twitter Tags
  // https://www.danvega.dev/blog/2019/04/09/adding-twitter-cards-to-gridsome/
  // twitter-card: https://cards-dev.twitter.com/validator
  head.meta.push(
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: config.siteName },
    { name: "twitter:site", content: config.siteTwitter },
    { name: "twitter:image", content: config.siteImage },
    { name: "twitter:creator", content: config.authorTwitter },
    { name: "twitter:description", content: config.siteDescription }
  )

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
  })
}
