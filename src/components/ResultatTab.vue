<template>
    <main>
        <ul v-for="(item, index) in model">
            <li><strong>{{ index }}</strong> : {{ item }}</li>
        </ul>
    </main>
</template>

<script>
export default {
  name: 'ResultatTab',
  props: {
    model: Object
  },
}
</script>

<style scoped>

</style>