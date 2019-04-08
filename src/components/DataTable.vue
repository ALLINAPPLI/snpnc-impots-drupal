<template>
  <b-table>

  </b-table>
</template>
<script>
export default {
  name: "DataTable",
  props: {

  },
  data() {
    return {
      fields : {
        mois : {
          label : "Mois"
        },
        id241 : {
          label: "Idemnités 241"
        }
        id240 : {
         label: "Idemnités 340"
        },
      },
      items : []
    }
  },
  methods: {

  }
}
</script>
<style scoped>

</style>