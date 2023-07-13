<script setup>
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  })

const { handleSubmit } = useForm({
  validationSchema: schema,
});
const username = useField('username');
const password = useField('password');

const emit = defineEmits(['submit']);
const submit = handleSubmit((values) => {
  emit('submit', values);
});
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
