export default {
  state: {
    // Global
    global: {
      started: false,
      com: null,
      tabs: [
          { id : "HomeTab", title: "Compagnie", disabled: false },
          { id : "DeclarerTab", title: "A déclarer", disabled: true },
          { id : "DeduireTab", title: "A déduire", disabled: true },
          { id : "ResultatTab", title: "Résultat", disabled: true }
      ],
      activeTab: "HomeTab",
    },
    // Declarer
    declarer: {
      cNI: 0,
      fH: 0,
      iS: 0,
      iR: {
        columns : {
          c241: [0,0,0,0,0,0,0,0,0,0,0,0],
          c340: [0,0,0,0,0,0,0,0,0,0,0,0]
        },
        total: {
          c241: 0,
          c340: 0,
        },
      },
      iT: {
        columns : {
          c250: [0,0,0,0,0,0,0,0,0,0,0,0],
          c270: [0,0,0,0,0,0,0,0,0,0,0,0],
          c290: [0,0,0,0,0,0,0,0,0,0,0,0],
          c292: [0,0,0,0,0,0,0,0,0,0,0,0],
          c293: [0,0,0,0,0,0,0,0,0,0,0,0],
          c294: [0,0,0,0,0,0,0,0,0,0,0,0],
          c299: [0,0,0,0,0,0,0,0,0,0,0,0],
        },
        total: {
          c250: 0,
          c270: 0,
          c290: 0,
          c292: 0,
          c293: 0,
          c294: 0,
          c299: 0,
        }
      }
    },
    // Deduire
    deduire: {
      cS: 0,
      iJ: [],
      fTA: "null",
      fTAp: "null",
      fTAd: {
        columns: {
          cfTAd: [0,0,0,0,0,0,0,0,0,0,0,0]
        },
        total: {
          cfTAd: 0
        }
      },
      fTM: "null",
      fTMp: "null",
      fTMd: {
        columns: {
          cfTMd: [0,0,0,0,0,0,0,0,0,0,0,0]
        },
        total: {
          cfTMd: 0
        }
      },
      fTC : {
        columns: {
          cfTC: [0,0,0,0,0,0,0,0,0,0,0,0]
        },
        total: {
          cfTC: 0
        }
      },
      fB: 0,
      fCMB: 0,
      fTI: 0,
      fBa: 0,
      fDR: 0,
      fL: 0,
      fF: 0,
    }
  },
  getters: {
    tableFieldTotal(state) {
      return (base, field) => {
        let value = state[base][field];
        if (typeof value === "number" ) {
          return value;
        } else {
          // sum all the totals
          return Object.values(value['total']).reduce((acc, item) => acc + item, 0);
        }
      }
    }
  },
  actions: {
    startForm ( {commit} ) {
      commit('setActiveTab', 'DeclarerTab')
      commit('toggleStarted')
    },
    resetForm () {
      // TODO
    }
  },
  mutations: {
    updateField(state, payload) {
      let {base, field, value} = payload;
      if (typeof value === "number") {
        value = Number(value);
      }

      state[base][field] = value;
    },
    updateTableField(state, payload) {
      let {base, field, column, index, value} = payload;
      state[base][field].columns[column][index] = Number(value);

      // update column total
      state[base][field].total[column] = state[base][field].columns[column].reduce((a,b) => { return a + b}, 0);

    },
    resetTableField(state, payload) {
      let {base, field, column} = payload;
      state[base][field][column].fill(0);
    },
    setActiveTab(state, id) {
      state.global.activeTab = id
    },
    toggleStarted(state) {
      state.global.started = !state.started;
      state.global.tabs.map(tab => tab.disabled = false);
    }
  }
}