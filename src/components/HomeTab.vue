<template>
  <b-container>
    <b-row class="mt-3">
      <b-col><b-img rounded fluid :src="require('../assets/logo.png')"></b-img></b-col>
      <b-col cols="9" v-html="f.intro"></b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col>
        <ValidationProvider :name="f.com.label.toLowerCase()" rules="required" v-slot="vCtx">
          <b-form-group :id="f.com.id + '-group' " :label="f.com.label" :label-for="f.com.id">
            <b-form-text :id="f.com.id + '-help'">{{ f.com.description }}</b-form-text>
            <b-form-select
              :id="f.com.id"
              v-model="com"
              :options="f.com.options"
              :state="getValidationState(vCtx)"
            ></b-form-select>
            <b-form-invalid-feedback :id="f.com.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <b-form-group>
            <b-button :disabled="com == 'null' || started" id="start" @click="toggleForm">
              Démarrer
            </b-button>
        </b-form-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import fieldsMixin from '../model/fieldsMixin';
import fields from '../model/fields';

export default {
  mixins: [fieldsMixin],
  name: 'HomeTab',
  data() {
    return { f: fields };
  },
  computed: {
    ...fieldsMixin.mapFields("global", "updateField", ["com", "tabs", "activeTab", "started"]),
    canStart() {
      return !this.started;
    }
  },
  methods: {
    toggleForm() {
      if (this.started) {
        // reset
        this.tabs.map(tab => tab.disabled = true);
      } else {
        this.tabs.map(tab => tab.disabled = false);
        this.activeTab = 'DeclarerTab';
      }
      this.started = !this.started;
    },
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
