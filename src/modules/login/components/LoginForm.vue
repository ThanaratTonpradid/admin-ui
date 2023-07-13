<script>
import { useField, useForm } from 'vee-validate';

export default {
  setup() {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        username(value) {
          if (value) return true;
          return 'Username is required.';
        },
        password(value) {
          if (value) return true;
          return 'password is required.';
        },
      },
    });
    const username = useField('username');
    const password = useField('password');

    const submit = handleSubmit((values) => {
      alert(JSON.stringify(values, null, 2));
    });

    return { username, password, submit, handleReset };
  },
};
</script>

<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="username.value.value"
      :error-messages="username.errorMessage.value"
      label="Username"
      density="compact"
      variant="outlined"
    ></v-text-field>

    <v-text-field
      v-model="password.value.value"
      :error-messages="password.errorMessage.value"
      label="Password"
      type="password"
      density="compact"
      variant="outlined"
    ></v-text-field>

    <v-btn class="me-4" color="primary" block type="submit"> Login </v-btn>
  </form>
</template>
