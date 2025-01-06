<template>
    <div id="wrapper">
        <Header />
        <Sidebar />
        <RouterView />
    </div>
</template>

<script setup>
import { Header, Sidebar } from "@components/layouts";
import { RouterLink, RouterView } from 'vue-router';
</script>