<template>
  <main>
    <div v-for="(context, index) in model.fields">
      <h1>{{ index }}</h1>
      <dl v-for="item in context">
        <dt>{{ item.title }}</dt>
        <dd>
          <div v-if="item.type === 'string'">
            {{ item.value }}
          </div>
          <div v-else-if="item.type === 'number'">
            {{ item.value }} €
          </div>
          <div v-else-if="item.type === 'table'">
            <DataTable :field="item" :writable="false"></DataTable>
          </div>

        </dd>
      </dl>
  </div>
<!--       <div v-if="type === 'A'">
      A
      </div>
      <div v-else-if="type === 'B'">
      B
      </div>
      <div v-else-if="type === 'C'">
      C
      </div>
      <div v-else>
      Not A/B/C
      </div>
 -->  </main>
</template>

<script>
import DataTable from './DataTable';

export default {
  name: 'ResultatTab',
  props: {
    model: Object
  },
  components: {
    DataTable
  }
}
</script>

<style scoped>

</style>