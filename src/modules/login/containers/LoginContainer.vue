<script>
import LoginForm from '../components/LoginForm.vue';
export default {
  components: { LoginForm },
};
</script>

<template>
  <v-card min-width="320px" max-width="400px">
    <v-card-title> login </v-card-title>
    <v-card-text>
      <LoginForm />
    </v-card-text>
  </v-card>
</template>
