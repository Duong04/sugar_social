<template>
  <li :class="{'uk-parent': isSub}">
    <a href="#" class="group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          :d="path"
        />
      </svg>
      <span> {{ name }} </span>
      <ion-icon
        v-if="isSub"
        name="chevron-down"
        class="text-base ml-auto duration-200 group-aria-expanded:rotate-180"
      ></ion-icon>
    </a>
    <ul v-if="isSub" class="pl-10 my-1 space-y-0 text-sm">
      <SubItem v-for="(item, index) in subs" :key="index" v-bind="item" />
    </ul>
  </li>
</template>


<script setup>
import { SubItem } from "@components/sidebars";

defineProps({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  isSub: {
    type: Boolean,
    required: false,
  },
  "subs": {
    type: Array,
    required: false,
  }
});
</script>


<style>
</style>