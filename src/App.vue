<template>
  <div id="app" class="container">
    <b-card no-body>
      <b-tabs card>
        <b-tab
          v-for="tab in tabs"
          v-bind:key="tab.id"
          v-bind:title="tab.title"
          v-bind:active="currentTab == tab.id"
          v-on:click="currentTab = tab.id"
        >
          <b-card-text>
            <component v-bind:is="currentTab"></component>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import HelloTab from './components/HelloTab.vue'
import DeclarerTab from './components/DeclarerTab.vue'
import DeduireTab from './components/DeduireTab.vue'
import ResultatTab from './components/ResultatTab.vue'

export default {
  name: 'app',
  components: {
    HelloTab,
    DeclarerTab,
    DeduireTab,
    ResultatTab
  },
  data() {
    return {
      r: [],
      tabs: [
        {
          id : "HelloTab",
          title: "Hello",
        },
        {
          id : "DeclarerTab",
          title: "A déclarer"
        },
        {
          id : "DeduireTab",
          title: "A déduire"
        },
        {
          id : "ResultatTab",
          title: "Résultat"
        }
      ],
      currentTab: "HelloTab",
    }
  }
}
</script>

<style>

small, .small {
  font-size: 90%;
}

</style>
