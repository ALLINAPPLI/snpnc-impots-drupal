export default {
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  },
  // Based on : https://dev.to/matheusgomes062/how-to-make-a-form-handling-with-vuex-6g0
  mapFields(options) {
    const object = {};
    let { fields, base } = options;
    for (let x = 0; x < fields.length; x++) {
      const field = [options.fields[x]];
      object[field] = {
        get() {
          return this.$store.state[options.base][field];
        },
        set(value) {
          if (Array.isArray(value)) {
            this.$store.commit("updateField", { base, field: fields[x], value });
          } else if (typeof value === "object") {
            this.$store.commit( "updateTableField", { base, field: fields[x], ...value });
          } else {
            this.$store.commit("updateField", { base, field: fields[x], value });
          }
        },
      };
    }
    return object;
  },
}