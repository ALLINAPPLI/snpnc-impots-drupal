<template>
  <main class="container">
    <p v-html="introduction"></p>
    <b-form-group
      :label="compagnie.title"
      :label-for="compagnie.id"
      :description="compagnie.description"
    >
      <b-form-select
        :id="compagnie.id"
        :name="compagnie.id"
        v-model="compagnie.value"
        :options="compagnie.options"
        required
      ></b-form-select>
    <b-form-invalid-feedback>
      {{ compagnie.title }} {{ errorRequired }}
    </b-form-invalid-feedback>

    </b-form-group>
  </main>
</template>

<script>
export default {
  name: 'HomeTab',
  props: {
    model: Object
  },
  data() {
    return Object.assign({}, JSON.parse(JSON.stringify(this.model.home)), this.model.messages);
  },
  mounted() {
    this.$validator.validate();
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
