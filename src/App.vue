<template>
    <b-container>
        <b-card no-body>
            <b-tabs card>
                <b-tab
                    v-for="tab in tabs"
                    :key="tab.id"
                    :title="tab.title"
                    :active="currentTab == tab.id"
                    @click="currentTab = tab.id"
                >
                    <b-card-text>
                        <component
                            :model="model"
                            @dataUpdated="updateResult"
                            v-bind:is="currentTab"
                        />
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </b-container>
</template>

<script>
    import HomeTab         from './components/HomeTab'
    import DeclarerTab      from './components/DeclarerTab'
    import DeduireTab       from './components/DeduireTab'
    import ResultatTab      from './components/ResultatTab'
    import DataModel        from './data/model.js';

    export default {
        name: 'app',
        components: {
            HomeTab,
            DeclarerTab,
            DeduireTab,
            ResultatTab
        },
        data() {
            return {
                model : DataModel,
                tabs: [
                    {
                        id : "HomeTab",
                        title: "Hello",
                    },
                    {
                        id : "DeclarerTab",
                        title: "A déclarer",
                    },
                    {
                        id : "DeduireTab",
                        title: "A déduire",
                    },
                    {
                        id : "ResultatTab",
                        title: "Résultat",
                    }
                ],
                currentTab: "HomeTab",
            }
        },
        methods: {
            updateResult: function(context, key, value) {
                console.log("update result: ", key, value);
                this.model[context][key] = value;
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
