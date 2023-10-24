<script setup>
const items = [
  {
    key: "posts",
    label: "Posts",
    content: "This is the content shown for Tab1",
  },
  {
    key: "replies",
    label: "Replies",
    content: "And, this is the content for Tab2",
  },
];
const posts = [
  {
    content:
      "Our latest course gets you up-and-running with the modern @vitest_dev 🧪",
  },
  {
    content: "New Nuxt UI content coming 🔜 🤓",
  },
];
const replies = [
  {
    content:
      "The Nuxt 3 DevTools are packed full of features. Are you using them to their fullest potential?",
  },
  {
    content: "Are you using the Nuxt 3 DevTools to their full potential?",
  },
];
</script>

<template>
  <div class="grid justify-center">
    <div class="border-x border-gray-600">
      <NuxtImg src="/vue-cover.jpeg" />

      <div class="flex mx-4">
        <UAvatar
          class="-mt-16 justify-content"
          src="/logo.jpeg"
          alt="Avatar"
          size="xl"
        />
        <UButton
          :ui="{ rounded: 'rounded-full' }"
          color="gray"
          variant="outline"
          class="ml-auto h-min mt-3"
          >Edit Profile</UButton
        >
      </div>
      <!-- Profile bio section -->
      <div class="px-4">
        <h3 class="text-xl font-bold">Vue Mastery</h3>
        <span class="text-[#686E73] mb-3">@VueMastery</span>
        <p class="mb-6">The ultimate learning platform for Vue.js developers</p>
        <span
          >Learn from the experts,<br />Elevate your code, <br />Master your
          craft</span
        >
        <h5 class="mt-6 mb-3 text-[#2C9AF0]">vuemastery.com/courses</h5>
        <a class="flex my-3 items-center">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-5 w-5 mr-1 fill-current text-[#71777B]"
          >
            <g>
              <path
                d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"
              ></path>
            </g>
          </svg>
          <h5 class="text-[#2C9AF0] text-base">vuemastery.com/courses</h5>
        </a>
      </div>
      <UTabs :items="items">
        <template #default="{ item, selected }">
          <div
            v-if="selected"
            class="flex items-center align-center gap-2 relative border-b-4 border-[#2C9AF0]"
          >
            <span class="m-2 align-center"> {{ item.label }}</span>
          </div>
        </template>
        <template #item="{ item }">
          <Tweets v-if="item.key === 'posts'" :type="'posts'" :items="posts" />

          <Tweets v-else-if="item.key === 'replies'" :items="replies" />
        </template>
      </UTabs>
    </div>
  </div>
</template>