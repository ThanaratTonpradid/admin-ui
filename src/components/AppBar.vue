<script>
import { useAppStore } from '../stores/app';
import ProfileMenuContainer from '../modules/profile/containers/ProfileMenuContainer.vue';

export default {
  components: {
    ProfileMenuContainer,
  },
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
    <ProfileMenuContainer />
  </v-app-bar>
</template>
