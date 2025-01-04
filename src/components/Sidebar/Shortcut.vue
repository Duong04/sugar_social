<template>
  <a href="#">
    <div class="flex items-center gap-2 p-3 px-4 rounded-xl hover:bg-secondery">
      <img
        :src="image"
        alt=""
        class="w-6 rounded-full object-cover"
      />
      <div>{{ name }}</div>
    </div>
  </a>
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
  }
});
</script>


<style>
</style>