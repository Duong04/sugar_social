<template>
  <div
    id="site__sidebar"
    class="fixed top-0 left-0 z-[99] pt-[--m-top] overflow-hidden transition-transform xl:duration-500 max-xl:w-full max-xl:-translate-x-full"
  >
    <!-- sidebar inner -->
    <div
      class="p-2 max-xl:bg-white shadow-sm 2xl:w-72 sm:w-64 w-[80%] h-[calc(100vh-64px)] relative z-30 max-lg:border-r dark:max-xl:!bg-slate-700 dark:border-slate-700"
    >
      <div class="pr-4" data-simplebar>
        <nav id="side">
          <ul>
          <MenuItem 
            v-for="(menuItem, index) in menuList" 
            v-bind="menuItem"
            :key="index"
           />
            
          </ul>

          <button
            type="button"
            class="flex items-center gap-4 py-2 px-4 w-full font-medium text-sm text-black dark:text-white"
            uk-toggle="target: #show__more; cls: !hidden uk-animation-fade"
          >
            <svg
              class="bg-gray-200 rounded-full w-6 h-6 dark:bg-slate-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span id="show__more"> See More </span>
            <span class="!hidden" id="show__more"> See Less </span>
          </button>
        </nav>

        <div
          class="font-medium text-sm text-black border-t pt-3 mt-2 dark:text-white dark:border-slate-800"
        >
          <div class="px-3 pb-2 text-sm font-medium">
            <div class="text-black dark:text-white">Shortcut</div>
          </div>
          <Shortcut v-for="(shortItem, index) in shortCuts" :key="index" v-bind="shortItem" />
        </div>

        <nav
          id="side"
          class="font-medium text-sm text-black border-t pt-3 mt-2 dark:text-white dark:border-slate-800"
        >
          <div class="px-3 pb-2 text-sm font-medium">
            <div class="text-black dark:text-white">Pages</div>
          </div>

          <ul class="mt-2 -space-y-2" uk-nav="multiple: true">
            <PageItem v-for="(pageItem, index) in pages" :key="index" v-bind="pageItem" />
          </ul>
        </nav>

        <div
          class="text-xs font-medium flex flex-wrap gap-2 gap-y-0.5 p-2 mt-2"
        >
          <a href="#" class="hover:underline">About</a>
          <a href="#" class="hover:underline">Blog </a>
          <a href="#" class="hover:underline">Careers</a>
          <a href="#" class="hover:underline">Support</a>
          <a href="#" class="hover:underline">Contact Us </a>
          <a href="#" class="hover:underline">Developer</a>
        </div>
      </div>
    </div>

    <!-- sidebar overly -->
    <div
      id="site__sidebar__overly"
      class="absolute top-0 left-0 z-20 w-screen h-screen xl:hidden backdrop-blur-sm"
      uk-toggle="target: #site__sidebar ; cls :!-translate-x-0"
    ></div>
  </div>
</template>

<script setup>
import { MenuItem, Shortcut, PageItem } from "@components/Sidebar";

const menuList = [
  {
    "name": "Feed",
    "image": "/assets/images/icons/home.png",
    "url": "",
    "isHidden": false
  },
  {
    "name": "messages",
    "image": "/assets/images/icons/message.png",
    "url": "",
    "isHidden": false
  },
  {
    "name": "video",
    "image": "/assets/images/icons/video.png",
    "url": "",
    "isHidden": false
  },
  {
    "name": "event",
    "image": "/assets/images/icons/event.png",
    "url": "",
    "isHidden": false
  },
  {
    "name": "Pages",
    "image": "/assets/images/icons/page.png",
    "url": "",
    "isHidden": false
  },
  {
    "name": "Groups",
    "image": "/assets/images/icons/group.png",
    "url": "",
    "isHidden": false
  },
  {
    "name": "market",
    "image": "/assets/images/icons/market.png",
    "url": "",
    "isHidden": false
  },
  {
    "name": "blog",
    "image": "/assets/images/icons/blog.png",
    "url": "",
    "isHidden": false
  },
  {
    "name": "games",
    "image": "/assets/images/icons/game.png",
    "url": "",
    "isHidden": true
  },
  {
    "name": "Fundraiser",
    "image": "/assets/images/icons/fund.png",
    "url": "",
    "isHidden": true
  },
  {
    "name": "blog II",
    "image": "/assets/images/icons/blog-2.png",
    "url": "",
    "isHidden": true
  },
  {
    "name": "Event II",
    "image": "/assets/images/icons/event-2.png",
    "url": "",
    "isHidden": true
  },
  {
    "name": "Groups II",
    "image": "/assets/images/icons/group-2.png",
    "url": "",
    "isHidden": true
  }
];

const shortCuts = [
  {
    "name": "Marin Gray",
    "image": "/assets/images/avatars/avatar-2.jpg",
    "url": "",
  },
  {
    "name": "Alexa Stella",
    "image": "/assets/images/avatars/avatar-7.jpg",
    "url": "",
  },
  {
    "name": "Sarah Ali",
    "image": "/assets/images/avatars/avatar-3.jpg",
    "url": "",
  }
];

const pages = [
  {
    "name": "Upgrade",
    "path": "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z",
    "url": "",
    "isSub": false,
    "subs": []
  },
  {
    "name": "Authentication",
    "path": "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9",
    "url": "",
    "isSub": false,
    "subs": []
  },
  {
    "name": "Development",
    "path": "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z",
    "url": "",
    "isSub": true,
    "subs": [
      {
        name: "Elements",
        url: ""
      },
      {
        name: "Components",
        url: ""
      },
      {
        name: "Icons",
        url: ""
      }
    ]
  },
];
</script>

<style>
</style>