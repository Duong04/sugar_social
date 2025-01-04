<template>
  <li><a :href="url" class="!py-2 !rounded -md">{{ name }}</a></li>
</template>


<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  }
});
</script>

<style>
</style>