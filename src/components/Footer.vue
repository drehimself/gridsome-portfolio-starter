<template>
  <footer id="footer" class="bg-blue-900">
    <div class="footer container mx-auto py-4">
      <div>
        <p class>
          Made with
          <span class="icon-wrap icon-wrap--inline text-blue-200">
            <svg
              aria-hidden="true"
              focussable="false"
              alt="love heart"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-heart"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>
          </span>
          <span class="sr-only">love</span> by Grace &copy;2020
        </p>
        <a href target="_blank" class="text-sm font-sans">gracesnowdesign@gmail.com</a>
      </div>
      <ul class="footer__links text-sm">
        <!-- <li id="email">
          <a
            href="mailto:gracesnowdesign@gmail.com"
            class="footer__link"
            aria-label="Email Grace"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              focussable="false"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="footer__icon"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </li>-->

        <li id="github">
          <a
            href="https://github.com/grace-snow/"
            class="footer__link"
            aria-label="Go to Github"
            target="_blank"
          >
            <!-- <g-image src="../../static/icons/github.svg" class="w-4 icon" alt="Github logo" /> -->
            <svg
              aria-hidden="true"
              focussable="false"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="footer__icon"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              />
            </svg>
          </a>
        </li>
        <li id="twitter">
          <a
            href="https://twitter.com/grace-snow/"
            class="footer__link"
            aria-label="Go to Twitter"
            target="_blank"
          >
            <!-- <g-image src="../../static/icons/github.svg" class="w-4 icon" alt="Github logo" /> -->
            <svg
              aria-hidden="true"
              focussable="false"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="footer__icon"
            >
              <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              />
            </svg>
          </a>
        </li>
        <li id="linkedin">
          <a
            href="https://www.linkedin.com/in/gracesnow/"
            class="footer__link"
            aria-label="Go to LinkedIn"
          >
            <svg
              aria-hidden="true"
              focussable="false"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="footer__icon"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
  @apply font-display;
  letter-spacing: 0.02em;
  @apply text-blue-100;
}

.footer__links {
  display: flex;
  margin: 0 -0.25em;
  /* @apply text-white; */
}

.footer__links > * {
  flex: 1 1 1em;
  margin: 0.25em;
}

.footer__link {
  font-weight: 600;
  font-size: 1em;
  height: 2em;
  width: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer__link svg {
  height: 1.5em;
  width: 1.5em;
}

</style>