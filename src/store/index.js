import { createStore } from 'vuex';

export default createStore({
  state: {
    isDark: true,
    cart: [],
  },
  actions: {
    async addCart({ commit }, payload) {
      this.state.cart.push(payload);
    },
    async delCart({ commit }, payload) {
      this.state.cart.map((v, i) => {
        if (v.id == payload) {
          this.state.cart.splice(i, 1);
        }
      });
    },
  },
});
