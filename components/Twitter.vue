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
    <div class="border-x border-gray-600 h-screen">
      <NuxtImg class="justify-self" src="/vue-cover.jpeg" />

      <div class="flex pr-4">
        <UAvatar
          class="-mt-16 ml-4 text-6xl justify-content"
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
      <div class="px-4">
        <h3 class="text-xl font-bold">Vue Mastery</h3>
        <h6 class="text-[#686E73] mb-3">@VueMastery</h6>
        <h6 class="mb-6">
          The ultimate learning platform for Vue.js developers
        </h6>
        <span
          >Learn from the experts,<br />Elevate your code, <br />Master your
          craft</span
        >
        <h5 class="mt-6 mb-3">vuemastery.com/courses</h5>
        <div class="flex my-3 items-center">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-5 w-5 mr-1 rounded-full fill-current text-[#1E1F24]"
          >
            <g>
              <path
                d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"
              ></path>
            </g>
          </svg>
          <h5 class="border-[#2C9AF0]">vuemastery.com/courses</h5>
        </div>
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
          <UContainer v-if="item.key === 'posts'">
            <div
              :key="{ index }"
              v-for="(post, index) in posts"
              class="space-y-3"
            >
              <UCard
                :key="{ index }"
                class="py-2"
                :ui="{
                  body: {
                    padding: 'py-0',
                  },
                }"
              >
                <div class="flex w-full">
                  <UAvatar
                    class="ml-4 text-6xl justify-content"
                    src="/logo.jpeg"
                    alt="Avatar"
                    size="md"
                  />
                  <div class="ml-3 w-full">
                    <div class="flex items-baseline">
                      <h3 class="text-base font-bold">Vue Mastery</h3>
                      <h6 class="text-[#686E73] text-sm ml-2">@VueMastery</h6>
                    </div>

                    <h5>
                      {{ post.content }}
                    </h5>
                    <div class="flex w-full justify-between mt-3">
                      <div class="flex items-center">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          class="h-5 w-5 mr-1 rounded-full fill-current text-[#1E1F24]"
                        >
                          <g>
                            <path
                              d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                            ></path>
                          </g>
                        </svg>
                        <h3 class="ml-2 text-[#1E1F24]">2</h3>
                      </div>
                      <div class="flex items-center">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          class="h-5 w-5 mr-1 rounded-full fill-current text-[#1E1F24]"
                        >
                          <g>
                            <path
                              d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                            ></path>
                          </g>
                        </svg>
                        <h3 class="ml-2 text-[#1E1F24]">1</h3>
                      </div>
                      <div class="flex items-center">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          class="h-5 w-5 mr-1 rounded-full fill-current text-[#1E1F24]"
                        >
                          <g>
                            <path
                              d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                            ></path>
                          </g>
                        </svg>
                        <h3 class="ml-2 text-[#1E1F24]">1</h3>
                      </div>
                      <div class="flex items-center">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          class="h-5 w-5 mr-1 rounded-full fill-current text-[#1E1F24]"
                        >
                          <g>
                            <path
                              d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
                            ></path>
                          </g>
                        </svg>
                        <h3 class="ml-2 text-[#1E1F24]">100</h3>
                      </div>
                      <div class="flex items-center pr-3">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          class="h-5 w-5 mr-1 rounded-full fill-current text-[#1E1F24]"
                        >
                          <g>
                            <path
                              d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </UCard>
            </div>
          </UContainer>

          <UContainer v-else-if="item.key === 'replies'">
            <div
              :key="{ index }"
              v-for="(reply, index) in replies"
              class="space-y-3"
            >
              <UCard
                :key="{ index }"
                class="py-2"
                :ui="{
                  body: {
                    padding: 'py-0',
                  },
                }"
              >
                <div class="flex w-full">
                  <UAvatar
                    class="ml-4 text-6xl justify-content"
                    src="/logo.jpeg"
                    alt="Avatar"
                    size="md"
                  />
                  <div class="ml-3 w-full">
                    <div class="flex items-baseline">
                      <h3 class="text-base font-bold">Vue Mastery</h3>
                      <h6 class="text-[#686E73] text-sm ml-2">@VueMastery</h6>
                    </div>

                    <h5>
                      {{ reply.content }}
                    </h5>
                    <div class="flex w-full justify-between mt-3">
                      <div class="flex items-center">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          class="h-5 w-5 mr-1 rounded-full fill-current text-[#1E1F24]"
                        >
                          <g>
                            <path
                              d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                            ></path>
                          </g>
                        </svg>
                        <h3 class="ml-2 text-[#1E1F24]">2</h3>
                      </div>
                      <div class="flex items-center">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          class="h-5 w-5 mr-1 rounded-full fill-current text-[#1E1F24]"
                        >
                          <g>
                            <path
                              d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                            ></path>
                          </g>
                        </svg>
                        <h3 class="ml-2 text-[#1E1F24]">1</h3>
                      </div>
                      <div class="flex items-center">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          class="h-5 w-5 mr-1 rounded-full fill-current text-[#1E1F24]"
                        >
                          <g>
                            <path
                              d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                            ></path>
                          </g>
                        </svg>
                        <h3 class="ml-2 text-[#1E1F24]">1</h3>
                      </div>
                      <div class="flex items-center">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          class="h-5 w-5 mr-1 rounded-full fill-current text-[#1E1F24]"
                        >
                          <g>
                            <path
                              d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
                            ></path>
                          </g>
                        </svg>
                        <h3 class="ml-2 text-[#1E1F24]">100</h3>
                      </div>
                      <div class="flex items-center pr-3">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          class="h-5 w-5 mr-1 rounded-full fill-current text-[#1E1F24]"
                        >
                          <g>
                            <path
                              d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </UCard>
            </div>
          </UContainer>
        </template>
      </UTabs>
    </div>
  </div>
</template>