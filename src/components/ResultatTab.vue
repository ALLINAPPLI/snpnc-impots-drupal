<template>
  <b-container>
    <b-card no-body>
      <b-tabs card fill>
        <b-tab title="First" active><p>I'm the first tab</p></b-tab>
        <b-tab title="Second"><p>I'm the second tab</p></b-tab>
        <b-tab title="Third"><p>I'm a tab!</p></b-tab>
      </b-tabs>
    </b-card>

    <b-row>
      <b-col>1 of 3</b-col>
      <b-col>2 of 3</b-col>
      <b-col>3 of 3</b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'ResultatTab',
  components: {}
}
</script>

<style scoped></style>