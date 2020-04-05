export default {
  state: {
    // Global
    global: {
      started: false,
      com: "null",
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
        tableTotal: 0
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
        },
        tableTotal: 0
      },
      total: 0
    },
    // Deduire
    deduire: {
      cS: 0,
      iJ: {
        items : [],
        tableTotal: 0
      },
      fTA: 0,
      fTAp: "null",
      fTAd: {
        columns: {
          cfTAd : [0,0,0,0,0,0,0,0,0,0,0,0],
          cfTAt : [0,0,0,0,0,0,0,0,0,0,0,0]
        },
        total: {
          cfTAd: 0,
          cfTAt: 0
        },
        tableTotal: 0
      },
      fTM: 0,
      fTMp: "null",
      fTMd: {
        columns: {
          cfTMd: [0,0,0,0,0,0,0,0,0,0,0,0]
        },
        total: {
          cfTMd: 0
        },
        tableTotal: 0
      },
      fTC : {
        columns: {
          cfTC: [0,0,0,0,0,0,0,0,0,0,0,0]
        },
        total: {
          cfTC: 0
        },
        tableTotal: 0
      },
      fB: 0,
      fCMB: 0,
      fTI: 0,
      fBa: 0,
      fDR: 0,
      fL: 0,
      fF: 0,
    },
    total: 0
  },
  getters: {
    getTotal: (state) => (base) => {
      let total = 0;
      if (base === 'declarer') {
        total += Number(state[base].cNI);
        total += Number(state[base].fH);
        total += Number(state[base].iS);
        total += Number(state[base].iR.tableTotal);
        total += Number(state[base].iT.tableTotal);
      } else {
        total += Number(state[base].cS);
        total += Number(state[base].iJ.tableTotal);
        total += Number(state[base].fTA);
        total += Number(state[base].fTM);
        total += Number(state[base].fTC.tableTotal);
        total += Number(state[base].fB);
        total += Number(state[base].fCMB);
        total += Number(state[base].fTI);
        total += Number(state[base].fBa);
        total += Number(state[base].fDR);
        total += Number(state[base].fL);
        total += Number(state[base].fF);
      }

      return total;
    }
  },
  mutations: {
    updateTotal(state, base) {
      let total = 0;
      if (base === 'declarer') {
        total += Number(state[base].cNI);
        total += Number(state[base].fH);
        total += Number(state[base].iS);
        total += Number(state[base].iR.tableTotal);
        total += Number(state[base].iT.tableTotal);
      } else {
        total += state[base].cS;
        total += state[base].iJ.tableTotal;
      }

      state[base].total = total;
    },
    updateField(state, payload) {
      let {base, field, value} = payload;
      state[base][field] = value;
    },
    updateDataField(state, payload) {
      let {base, field, value} = payload;
      state[base][field] = Number(value);
    },
    updateDataTableField(state, payload) {
      let { base, field, value } = payload;
      let column = value['column'];
      let index = value['index'];
      value = value['value'];
      if (typeof state[base][field].columns[column][index] === "number") {
        state[base][field].columns[column][index] = Number(value);
      } else {
        state[base][field].columns[column][index] = value;
      }
      // is there a total column ?
      if (state[base][field].total[column] !== undefined) {
        // update column total
        state[base][field].total[column] = state[base][field].columns[column].reduce(
          (a,b) => { return a + b}, 0
        );
        // update table total
        state[base][field].tableTotal = Object.values(state[base][field].total).reduce(
          (acc, item) => acc + item, 0
        );
      }
    },
    updateIdemnitesJournalieres(state, payload) {
      let {base, field, value} = payload;
      state[base][field].items = value;

      state[base][field].tableTotal = state[base][field].items.reduce(
        (acc, item) => acc + item.value, 0
      );
    }
  },
}