<template>
    <main>
        <ValidationProvider :name="f.cNI.label.toLowerCase()" rules="required|numeric|min_value:0" v-slot="vCtx">
          <b-form-group :id="f.cNI.id + '-group' " :label="f.cNI.label" :label-for="f.cNI.id">
            <b-form-text :id="f.cNI.id + '-help'">{{ f.cNI.description }}</b-form-text>
            <b-form-input :id="f.cNI.id" v-model="cNI" :state="getValidationState(vCtx)" :placeholder="f.cNI.label"/>
            <b-form-invalid-feedback :id="f.cNI.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider :name="f.fH.label.toLowerCase()" rules="required|numeric|min_value:0" v-slot="vCtx">
          <b-form-group :id="f.fH.id + '-group' " :label="f.fH.label" :label-for="f.fH.id">
            <b-form-text :id="f.fH.id + '-help'">{{ f.fH.description }}</b-form-text>
            <b-form-input :id="f.fH.id" v-model="fH" :state="getValidationState(vCtx)" :placeholder="f.fH.label"/>
            <b-form-invalid-feedback :id="f.fH.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider :name="f.iS.label.toLowerCase()" rules="required|numeric|min:1|min_value:0" v-slot="vCtx">
          <b-form-group :id="f.iS.id + '-group' " :label="f.iS.label" :label-for="f.iS.id">
            <b-form-text :id="f.iS.id + '-help'">{{ f.iS.description }}</b-form-text>
            <b-form-input :id="f.iS.id" v-model="iS" :state="getValidationState(vCtx)" :placeholder="f.iS.label"/>
            <b-form-invalid-feedback :id="f.iS.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <b-form-group :id="f.iR.id + '-group' " :label="f.iR.label" :label-for="f.iR.id">
          <MonthlyTable :id="f.iR.id" v-bind:edit="true" v-bind:field="f.iR"></MonthlyTable>
        </b-form-group>
  </main>
</template>

<script>
// import { mapState, mapActions, mapMutations } from 'vuex';
// import { mapMutations } from 'vuex';
import fields from '../model/declarer';
import { mapBasicFields } from '../util';
import MonthlyTable from './MonthlyTable';

export default {
  name: 'DeclarerTab',
  components: {
    MonthlyTable,
  },
  data() {
    return { f : fields };
  },
  computed: {
    ...mapBasicFields({
      fields: ["cNI", "fH", "iS", "iR"],
      base: "declarer",
      mutation: "updateBasicField"
    }),
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  }
}
</script>

<style scoped></style>