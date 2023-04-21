import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    appName: 'mini',
    navIsOpen: false,
  }),
  actions: {
    toggleNavAction() {
      this.navIsOpen = !this.navIsOpen;
    },
  },
});
