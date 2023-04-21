<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <v-app full-height>
    <NavBar />
    <RouterView />
  </v-app>
</template>
