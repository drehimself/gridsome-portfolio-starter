// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueScrollTo from "vue-scrollto";
import VueFuse from "vue-fuse";
import VueGtag from "vue-gtag";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  });

  Vue.use(VueFuse);

  Vue.use(
    VueGtag,
    {
      config: { id: process.env.GRIDSOME_UA },
    },
    router
  );

  head.meta.push({
    name: "keywords",
    content:
      "beckhoff,twincat,vision,plc,structured text,data,visualization,programming,iot",
  });

  head.meta.push({
    name: "description",
    content: "Blog about Beckhoff and TwinCAT related technologies",
  });

  head.meta.push({
    name: "author",
    content: "Kassym Dorsel",
  });

  head.script.push({
    src:
      "//s3-us-west-2.amazonaws.com/momently-static/loader/72ysQgAuARo_momently.js",
  });
}
