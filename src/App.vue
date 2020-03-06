<template>
  <div class="container">
    <b-card no-body>
        <b-tabs card>
            <b-tab
                v-for="tab in tabs"
                :key="tab.id"
                :title="tab.title"
                :active="activeTab == tab.id"
                :disabled="tab.disabled"
                @click="setActiveTab"
            >
                <b-card-text>
                    <component v-bind:is="activeTab"/>
                </b-card-text>
            </b-tab>
        </b-tabs>
    </b-card>
  </div>
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
    watch: {

    },
    methods: {
      ...mapMutations(['setActiveTab'])
    },

}
</script>

<style>

/* Form element description is in small el, by default it's 80% which is not
very readable */
.form-group small {
    font-size: 100%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -moz-appearance: inherit;
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
}
</style>
