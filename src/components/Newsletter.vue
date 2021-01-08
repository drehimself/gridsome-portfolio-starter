<template>
  <div
    class="text-center mb-2 container mx-auto py-4 relative bg-background-secondary border-b border-t"
  >
    <div class="w-full mb-5">
      <h2 class="font-bold text-2xl sm:text-3xl">
        Want the latest blog posts?
      </h2>
      <div class="text-sm">I will send an email once or twice a month.</div>
      <div class="text-sm">Sign up for my newsletter and stay updated!</div>
    </div>
    <form method="POST" :action="action">
      <div class="w-full mb-5 px-5">
        <input
          type="email"
          name="EMAIL"
          placeholder="email@example.com"
          class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
          required
        />
      </div>

      <div class="flex justify-center w-full">
        <input
          type="submit"
          value="sign up"
          class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
        />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      action: process.env.GRIDSOME_MAILCHIMP,
    };
  },
};
</script>
