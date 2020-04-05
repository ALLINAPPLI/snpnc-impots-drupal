<template>
  <b-container>
    <b-card no-body>
      <b-tabs card>
        <b-tab no-body
            v-for="tab in tabs"
            :key="tab.id"
            :title="tab.title"
            :active="activeTab == tab.id"
            :disabled="tab.disabled"
            @click="setActiveTab(tab.id)"
        >
          <b-card-text><component v-bind:is="activeTab"/></b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>

import fieldsMixin from '../model/fieldsMixin';
import fields from '../model/fields';

import HomeTab from './HomeTab'
import DeclarerTab from './DeclarerTab'
import DeduireTab from './DeduireTab'
import ResultatTab from './ResultatTab'

export default {
    mixins: [fieldsMixin],
    name: 'app',
    components: {
        HomeTab,
        DeclarerTab,
        DeduireTab,
        ResultatTab
    },
    data() {
      return { f: fields }
    },
    computed: {
      ...fieldsMixin.mapFields("global", "updateField", ["tabs", "activeTab", "com", "started"]),
    },
    methods: {
      setActiveTab(id) {
        this.activeTab = id;
      }
    }
}
</script>