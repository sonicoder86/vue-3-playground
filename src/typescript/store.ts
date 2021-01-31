import { createStore, ActionContext } from 'vuex';

export interface State {
  year: string;
}

export default createStore<State>({
  state: {
    year: '1970'
  },
  actions: {
    onSetYear: (context: ActionContext, year: string) => {
      context.commit('setYear', year);
    }
  },
  mutations: {
    setYear(state: State, year: string) {
      state.year = year;
    }
  }
});
