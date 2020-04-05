export default {
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  },
  // Based on : https://dev.to/matheusgomes062/how-to-make-a-form-handling-with-vuex-6g0
  mapFields(base, mutation, fields) {
    const object = {};
    for (let x = 0; x < fields.length; x++) {
      const field = [fields[x]];
      object[field] = {
        get() {
          return this.$store.state[base][field];
        },
        set(value) {
          this.$store.commit(mutation, { base: base, field: fields[x], value: value });
        },
      };
    }
    return object;
  },
}