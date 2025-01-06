<template>
  <li :class="{'!hidden': isHidden}" :id="isHidden ? 'show__more' : ''">
    <a :href="url">
      <img :src="image" alt="messages" class="w-5" />
      <span> {{ name }} </span>
    </a>
  </li>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  isHidden: {
    type: Boolean,
    required: false,
  }
});
</script>

<style>
</style>