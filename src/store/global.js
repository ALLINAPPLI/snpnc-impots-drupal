export default {
  state: {
    started: false,
    compagnie: null,
    tabs: [
        {
            id : "HomeTab",
            title: "Compagnie",
            disabled: false
        },
        {
            id : "DeclarerTab",
            title: "A déclarer",
            disabled: true
        },
        {
            id : "DeduireTab",
            title: "A déduire",
            disabled: true
        },
        {
            id : "ResultatTab",
            title: "Résultat",
            disabled: true
        }
    ],
    activeTab: "HomeTab",
  },
  getters: {},
  actions: {
    startForm ( {commit} ) {
      commit('setActiveTab', 'DeclarerTab')
      commit('toggleStarted')
    }
  },
  mutations: {
    updateBasicField(state, payload) {
      for (let key in payload) {
        state[key] = payload[key];
      }
    },
    updateTableField(state, payload) {
      let { field, column, index, value} = payload;
      state[field][column][index] = value;
    },

    updateCompagnie (state, value) {
      state.compagnie = value
    },
    setActiveTab(state, id) {
      state.activeTab = id
    },
    toggleStarted(state) {
      state.started = !state.started;
      state.tabs.map(tab => tab.disabled = false);
    }
  }
}