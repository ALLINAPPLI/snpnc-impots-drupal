<template>
    <div id="app" class="container">
        <b-card no-body>
            <b-tabs card>
                <b-tab
                    v-for="tab in tabs"
                    :key="tab.id"
                    :title="tab.title"
                    :active="currentTab == tab.id"
                    :data="tab.data"
                    @click="currentTab = tab.id"
                    @data-updated="updateResult"
                >
                    <b-card-text>
                        <component v-bind:is="currentTab"></component>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
        <footer>
            <div>

            </div>
        </footer>
    </div>
</template>

<script>
    import HelloTab from './components/HelloTab'
    import DeclarerTab from './components/DeclarerTab'
    import DeduireTab from './components/DeduireTab'
    import ResultatTab from './components/ResultatTab'

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
                profile: [],
                declarer: {
                    tabId       : "DeclarerTab",
                    tabTitle    : "A déclarer",
                    tabColor    : "",
                    data        :      [],
                },
                deduireData: [],
                tabs: [
                    {
                        id : "HelloTab",
                        title: "Hello",
                        data    : [],
                    },
                    {
                        id : "DeclarerTab",
                        title: "A déclarer",
                        data    : [],
                    },
                    {
                        id : "DeduireTab",
                        title: "A déduire",
                        data    : [],
                    },
                    {
                        id : "ResultatTab",
                        title: "Résultat",
                        data    : [],
                    }
                ],
                currentTab: "HelloTab",
            }
        },
        methods: {
            updateResult: function(key, value) {
                console.log(key + ":" + value);
            }
        }
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
