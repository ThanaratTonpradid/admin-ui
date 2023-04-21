<script>
import { useAppStore } from '../stores/app';

export default {
  setup() {
    const appStore = useAppStore();
    return { appStore };
  },
  methods: {
    toggleNavbar() {
      this.appStore.toggleNavAction();
    },
  },
};
</script>

<template>
  <v-app-bar prominent>
    <v-app-bar-nav-icon @click="toggleNavbar"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>
