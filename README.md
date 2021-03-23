# Gridsome Portfolio Starter

A simple portfolio starter theme for Gridsome

![screenshot](https://user-images.githubusercontent.com/4316355/55691365-a2403380-596b-11e9-93be-05b846ec7760.jpg)

## Demo URL

[https://gridsome-portfolio-starter.netlify.com](https://gridsome-portfolio-starter.netlify.com)

## Features

- Clean and minimal design
- [Tailwind CSS v1](https://tailwindcss.com) (with PurgeCSS). Using [this gridsome plugin](https://gridsome.org/plugins/gridsome-plugin-tailwindcss).
- Scroll to sections using [vue-scrollto](https://github.com/rigor789/vue-scrollto)
- Blog with markdown content for posts
- Documentation type that shows how to use Vue components in Markdown (click Docs)
- Theme Switcher with Dark Mode
- Search posts with [Fuse.js](https://fusejs.io) and [vue-fuse](https://github.com/shayneo/vue-fuse)
- Tags for posts
- Basic pagination
- Syntax highlighting with [Shiki](https://shiki.matsu.io) (using [this gridsome plugin](https://gridsome.org/plugins/gridsome-plugin-remark-shiki))
- 404 Page
- RSS Feed
- Sitemap in XML

## Installation

1. Install Gridsome CLI tool if you don't have it: `npm install --global @gridsome/cli`
1. Clone the repo: `git clone https://github.com/drehimself/gridsome-portfolio-starter.git`
1. `cd gridsome-portfolio-starter`
1. `npm install` (This can be a long download because of Cypress. If you don't care about testing with Cypress, remove it from `package.json`)
1. `gridsome develop` to start a local dev server at `http://localhost:8080`

## Testing

I have some basic end-to-end tests using [Cypress](https://cypress.io). You can find them in `/cypress/integration/tests.js`.

To run tests, first make sure your dev server is running with `gridsome develop`. I'm assuming you're using the default port of 8080. If not, change the `baseUrl` key in the `cypress.json` file.

After your dev server is running, you can run `npm run test` or `./node_modules/.bin/cypress open` to start Cypress. The Cypress electron app will run. Click the `tests.js` file and the tests will run in an automated browser.

## Notes

 - When Gridsome moves to Vue 3, I'll update this repo as well. I'll also update to Tailwind v2, along with other Tailwind v2 goodies like dark mode and the JIT.
 - Based on my [personal portfolio website](https://andremadarang.com). I wanted to create an open source version with more features.
 - Check out a [screencast I did](https://www.youtube.com/watch?v=uHo6o1TNQeE) where I go through the process of building my website.
 - Illustrations from [unDraw](https://undraw.co)
 - Search is based on [Fuse.js](https://fusejs.io) and [vue-fuse](https://github.com/shayneo/vue-fuse). It only searches the title and summary of posts for now. Some tweaking may be necessary to get it to search to your liking. Check out the fuse documentation for search settings. [This PR](https://github.com/drehimself/gridsome-portfolio-starter/pull/104) added the ability to search both "Post" and "Documentation" types.
 - Check out these other Gridsome Starters where I got some ideas from:
    - [Gridsome Starter Blog](https://github.com/gridsome/gridsome-starter-blog)
    - [Gridsome Starter Bleda](https://github.com/cossssmin/gridsome-starter-bleda)
    - [Jigsaw Starter Blog](https://jigsaw.tighten.co/docs/starter-templates/) - I got a lot of design inspiration from this starter theme.

## Other versions

- Nuxt version: [https://github.com/drehimself/nuxt-portfolio-starter](https://github.com/drehimself/nuxt-portfolio-starter)
- Saber version: [https://github.com/drehimself/saber-portfolio-starter](https://github.com/drehimself/saber-portfolio-starter)
