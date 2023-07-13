<script>
import { useAuthStore } from '../../../stores/auth';
export default {
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  methods: {
    async logout() {
      await this.authStore.logoutAction();
    }
  },
};
</script>
<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props"> Activator slot </v-btn>
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
</template>
