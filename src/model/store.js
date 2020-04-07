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
          cir: [0,0,0,0,0,0,0,0,0,0,0,0],
          cinr: [0,0,0,0,0,0,0,0,0,0,0,0]
        },
        total: {
          cir: 0,
          cinr: 0,
        },
        tableTotal: 0
      },
      iRa: {
        columns : {
          cinr: [0,0,0,0,0,0,0,0,0,0,0,0]
        },
        total: {
          cinr: 0,
        },
        tableTotal: 0
      },
      iT: {
        columns : {
          cit:  [0,0,0,0,0,0,0,0,0,0,0,0],
          cft:  [0,0,0,0,0,0,0,0,0,0,0,0],
          crcn: [0,0,0,0,0,0,0,0,0,0,0,0],
          cfrt: [0,0,0,0,0,0,0,0,0,0,0,0],
          ctc:  [0,0,0,0,0,0,0,0,0,0,0,0],
        },
        total: {
          cit: 0,
          cft: 0,
          crcn: 0,
          cfrt: 0,
          ctc: 0,
        },
        tableTotal: 0
      },
      iTa: {
        columns : {
          cit:  [0,0,0,0,0,0,0,0,0,0,0,0],
        },
        total: {
          cit: 0,
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
        total += Math.round(parseFloat(state[base].cNI));
        total += Math.round(parseFloat(state[base].fH));
        total += Math.round(parseFloat(state[base].iS));
        if (state.global.com == "af") {
          total += state[base].iR.tableTotal;
          total += state[base].iT.tableTotal;
        } else {
          total += state[base].iRa.tableTotal;
          total += state[base].iTa.tableTotal;
        }
      } else {
        total += Math.round(parseFloat(state[base].cS));
        total += state[base].iJ.tableTotal;
        total += state[base].fTA;
        total += state[base].fTM;
        total += state[base].fTC.tableTotal;
        total += Math.round(parseFloat(state[base].fB));
        total += Math.round(parseFloat(state[base].fCMB));
        total += Math.round(parseFloat(state[base].fTI));
        total += Math.round(parseFloat(state[base].fBa));
        total += Math.round(parseFloat(state[base].fDR));
        total += Math.round(parseFloat(state[base].fL));
        total += Math.round(parseFloat(state[base].fF));
      }

      return total;
    }
  },
  mutations: {
    updateField(state, payload) {
      let {base, field, value} = payload;
      state[base][field] = value;
    },
    updateDataField(state, payload) {
      let {base, field, value} = payload;
        state[base][field] = value;
    },
    updateDataTableField(state, payload) {
      let { base, field, value } = payload;
      let column = value['column'];
      let index = value['index'];
      value = value['value'];

      state[base][field].columns[column][index] = Math.round(parseFloat(value));
      // if (typeof state[base][field].columns[column][index] === "number") {

      // } else {
      //   state[base][field].columns[column][index] = value;
      // }
      // is there a total column ?
      if (state[base][field].total[column] !== undefined) {
        // update column total
        state[base][field].total[column] = state[base][field].columns[column].reduce(
          (a,b) => { return a + b }, 0
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
        (acc, item) => acc + Math.round(item.value), 0
      );
    }
  },
}