<script>
import LoginForm from '../components/LoginForm.vue';
export default {
  components: { LoginForm },
};
</script>

<template>
  <v-card min-width="320px" max-width="400px">
    <v-card-title class="text-center py-4">
      <v-avatar color="surface-variant" size="120"></v-avatar>
    </v-card-title>
    <v-card-text>
      <LoginForm />
    </v-card-text>
  </v-card>
</template>
