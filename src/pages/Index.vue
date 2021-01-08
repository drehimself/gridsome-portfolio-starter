<template>
  <Layout>
    <div
      class="hero container mx-auto flex flex-col sm:flex-row justify-between py-6"
    >
      <div class="text-3xl md:text-4xl font-bold w-full text-center">
        <div class="leading-tight">Unofficial Beckhoff and TwinCAT Blog</div>
        <div class="text-green-700 leading-tight">
          Discoveries, musings and insights
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      <p class="text-lg sm:text-xl sm:px-4">
        This is my personal blog for all things related to Beckhoff, TwinCAT,
        industrial automation, IoT, data aggregation, data Visualization,
        Grafana, Timescale, PostgreSQL, and any other related technologies.
      </p>

      <div class="overflow-x-hidden mt-2">
        <div
          class="projects container mx-auto text-xl border-t border-gray-500 border-b pt-8 mb-8 relative"
        >
          <h1 id="projects" class="font-bold mb-6 text-2xl">
            Most recent blog posts
          </h1>

          <div
            class="absolute right-0"
            style="top: 50px; transform: translate(100%) rotate(180deg)"
          >
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle" />
            </svg>
          </div>

          <div
            v-for="post in $page.posts.edges"
            :key="post.id"
            class="post border-gray-400 border-b mb-12"
          >
            <h2 class="text-3xl font-bold">
              <g-link :to="post.node.path" class="text-copy-primary">{{
                post.node.title
              }}</g-link>
            </h2>
            <div class="text-copy-secondary mb-4">
              <span>{{ post.node.date }}</span>
              <span> &middot; </span>
              <span>{{ post.node.timeToRead }} min read</span>
            </div>

            <div class="text-lg mb-4">
              {{ post.node.summary }}
            </div>
          </div>
        </div>
      </div>

      <div class="overflow-x-hidden border-gray-200 border-b">
        <div class="get-to-know-me container mx-auto text-xl pb-8 relative">
          <h1 id="about" class="font-bold mb-6 text-2xl">Get to know me</h1>

          <div
            class="absolute left-0"
            style="top: 50px; transform: translateX(-100%)"
          >
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle" />
            </svg>
          </div>

          <div
            class="flex flex-col sm:flex-row justify-between items-center mb-8"
          >
            <div>
              <g-image
                src="../assets/avatar.png"
                alt="avatar"
                height="192"
                width="192"
                class="w-48 h-48 rounded-full mb-8 lg:mb-0"
              />
            </div>
            <div class="flex-1 text-lg sm:text-xl ml-6 text-justify">
              <p>
                I work in automotive parts manufacturing as a Controls Engineer.
                I design, build, program, and debug manufacturing machines using
                many different Beckhoff technologies. I work with many different
                industrial processes, such as laser cutting, vision systems,
                industrial robots and many more. I am the main designer and
                maintener of our company's internal fully featured PLC library.
                I like to bring the best practices from the software world into
                the industrial PLC world.
              </p>
              <p class="mt-6">
                My work also has me diving into time series data. Be it process
                control, condition monitoring, OEE analysis and even individual
                device monitoring down to the smallest pneumatic cylinder. A lot
                of my work uses the open source trifecta of data analytics.
                <a
                  href="https://www.postgresql.org/"
                  target="_blank"
                  rel="noopener"
                  >PostgreSQL</a
                >,
                <a
                  href="https://www.timescale.com/"
                  target="_blank"
                  rel="noopener"
                  >Timescale</a
                >, and
                <a href="https://grafana.com/" target="_blank" rel="noopener"
                  >Grafana</a
                >.
              </p>
              <p class="mt-6">
                Drop me a message with any Beckhoff, TwinCAT 3, EtherCAT, I/O or
                Motion questions. It might turn into my next blog post!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="overflow-x-hidden mb-10">
        <div class="contact-me bg-background-secondary pt-6 mb-10 border-b">
          <div class="container mx-auto text-2xl pb-1 relative">
            <h2 id="contact" class="font-bold mb-6">Contact me</h2>

            <div
              class="absolute right-0 top-0"
              style="transform: translate(100%) rotate(180deg)"
            >
              <svg width="170px" height="170px">
                <use xlink:href="#dots-triangle" />
              </svg>
            </div>

            <div class="text-lg sm:text-lg mb-6">
              <form
                role="form"
                method="POST"
                class="mb-3"
                @submit.prevent="sendEmail"
              >
                <div class="flex flex-wrap mb-1 -mx-4">
                  <div class="w-full md:w-1/2 mb-1 md:mb-0 px-4">
                    <label class="block mb-2 text-copy-primary" for="name">
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Jon Snow"
                      class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                      required
                    />
                  </div>

                  <div class="w-full px-4 md:w-1/2">
                    <label class="block text-copy-primary mb-2" for="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="_replyto"
                      placeholder="email@example.com"
                      class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                      required
                    />
                  </div>
                </div>

                <div class="w-full mb-6">
                  <label class="block text-copy-primary mb-2" for="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    name="message"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4"
                    placeholder="Enter your message here."
                    required
                  ></textarea>
                </div>

                <div class="flex justify-center w-full">
                  <input
                    type="submit"
                    :value="submit"
                    class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Newsletter />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost(sortBy: "date", order: DESC, limit: 3) {
    totalCount
    edges {
      node {
        id
        title
        date(format: "MMMM D, Y")
        summary
        timeToRead
        path
      }
    }
  }
}
</page-query>

<script>
import Newsletter from "../components/Newsletter";
import axios from "axios";

export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    Newsletter,
  },
  data() {
    return {
      submit: "submit",
    };
  },
  methods: {
    sendEmail(evt) {
      this.submit = "sending...";
      const form = new FormData(evt.target);
      axios
        .post(process.env.GRIDSOME_FORMSPREE, form)
        .then((response) => {
          evt.target.reset();
          this.submit = "submit";
        })
        .catch((error) => {
          this.submit = "submit";
        });
    },
  },
};
</script>
