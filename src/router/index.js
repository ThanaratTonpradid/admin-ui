import { createRouter, createWebHistory } from 'vue-router';
import { profileRoute } from './profile.route';
import { loginRoute } from './auth.route';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'login' },
    },
    {
      path: '/pub',
      component: () => import('../layouts/PublicLayout.vue'),
      children: [loginRoute],
    },
    {
      path: '/pri',
      component: () => import('../layouts/PrivateLayout.vue'),
      children: [profileRoute],
    },
  ],
});

export default router;
