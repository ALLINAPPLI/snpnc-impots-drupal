export default {
  state: {
    cNI: null,
    fH: null,
    iS: null,
    iR: {
      'ir241': [],
      'ir340': []
    },
    iT: {
      'it250': [],
      'it270': [],
      'it290': [],
      'it292': [],
      'it293': [],
      'it294': [],
      'it299': [],
    },
  },
  getters: {},
  actions: {},
  mutations: {
    updateBasicField(state, object) {
      for (let key in object) {
        state[key] = object[key];
      }
    }
    //
  }
}