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

import HomeTab from './components/HomeTab'
import DeclarerTab from './components/DeclarerTab'
import DeduireTab from './components/DeduireTab'
import ResultatTab from './components/ResultatTab'

import { mapState, mapMutations } from 'vuex';

export default {
    name: 'app',
    components: {
        HomeTab,
        DeclarerTab,
        DeduireTab,
        ResultatTab
    },
    computed: {
      ...mapState({
        tabs: state => state.global.tabs,
        activeTab: state => state.global.activeTab,
        compagnie: state => state.global.compagnie,
        started: state => state.global.started
      })
    },
    methods: {
      ...mapMutations(['setActiveTab'])
    },
}
</script>

