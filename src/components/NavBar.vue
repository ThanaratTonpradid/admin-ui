<script>
import { storeToRefs } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
  setup() {
    const appStore = useAppStore();
    const { navIsOpen } = storeToRefs(appStore);
    return { isOpen: navIsOpen };
  },
};
</script>

<template>
  <v-navigation-drawer v-model="isOpen" temporary>
    <v-list lines="one">
      <v-list-item title="Login" :to="{ name: 'login' }"></v-list-item>
      <v-list-item title="Profile" :to="{ name: 'profile' }"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
