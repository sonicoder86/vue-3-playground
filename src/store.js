import { createStore } from 'vuex';

export default createStore({
  state: {
    year: '1970'
  },
  actions: {
    onSetYear: ({ commit }, year) => {
      commit('setYear', year);
    }
  },
  mutations: {
    setYear: (state, year) => {
      state.year = year;
    }
  }
});
