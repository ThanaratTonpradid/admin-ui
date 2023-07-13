import { defineStore } from 'pinia';
import { loginService, logoutService } from '../services/auth';
import { ConfigName } from '../constants';
import router from '../router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLogin: false,
  }),
  actions: {
    async loginAction(payload) {
      try {
        const res = await loginService({ username: payload.username, password: payload.password });
        localStorage.setItem(ConfigName.ACCESS_TOKEN, res.token);
        this.isLogin = true;
        router.push({ name: 'profile' });
      } catch (error) {
        console.error(error);
      }
    },
    async logoutAction() {
      try {
        const res = await logoutService();
        console.log(res);
        localStorage.removeItem(ConfigName.ACCESS_TOKEN);
        this.isLogin = false;
        router.push({ name: 'login' });
      } catch (error) {
        console.error(error);
      }
    }
  },
});
