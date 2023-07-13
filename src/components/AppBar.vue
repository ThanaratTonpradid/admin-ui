<script>
import { useAppStore } from '../stores/app';
import { useAuthStore } from '../stores/auth';

export default {
  setup() {
    const appStore = useAppStore();
    const authStore = useAuthStore();
    return { appStore, authStore };
  },
  methods: {
    toggleNavbar() {
      this.appStore.toggleNavAction();
    },
    async logout() {
      await this.authStore.logoutAction();
    }
  },
};
</script>

<template>
  <v-app-bar prominent>
    <v-app-bar-nav-icon @click="toggleNavbar"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" prepend-icon="mdi-account">username</v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>lang</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="logout">
          <v-list-item-title class="text-center text-uppercase">logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
