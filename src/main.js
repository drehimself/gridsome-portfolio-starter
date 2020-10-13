// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueScrollTo from "vue-scrollto";
import VueFuse from "vue-fuse";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  });

  Vue.use(VueFuse);

  head.meta.push({
    name: "keywords",
    content: "beckhoff,twincat,vision,plc,structured text,data,visualization",
  });

  head.meta.push({
    name: "description",
    content: "Blog about Beckhoff related technologies",
  });

  head.meta.push({
    name: "author",
    content: "Kassym Dorsel",
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700",
  });
}
