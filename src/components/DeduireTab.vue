<template>
  <b-card no-body>
    <b-tabs card fill>
      <b-tab title="Idemnités Journalières" active><b-card-text>
        TODO
      </b-card-text></b-tab>
      <b-tab title="Frais transport"><b-card-text>

        <ValidationProvider :name="f.fTVp.label.toLowerCase()" rules="required" v-slot="vCtx">
          <b-form-group :id="f.fTVp.id + '-group' " :label="f.fTVp.label" :label-for="f.fTVp.id">
            <b-form-text :id="f.fTVp.id + '-help'">{{ f.fTVp.description }}</b-form-text>
            <b-form-select :id="f.fTVp.id" v-model="fTVp" :state="getValidationState(vCtx)" :options="fTVpoptions"/>
            <b-form-invalid-feedback :id="f.fTVp.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <b-form-group :id="f.fTVd.id + '-group' " :label="f.fTVd.label" :label-for="f.fTVd.id">
          <MonthlyTable :id="f.fTVd.id" v-bind:edit="true" v-model="fTVd" v-bind:field="f.fTVd"></MonthlyTable>
        </b-form-group>

      </b-card-text></b-tab>

      <b-tab title="Cotisations syndicales"><b-card-text>

        <ValidationProvider :name="f.cS.label.toLowerCase()" rules="required|numeric|min_value:0" v-slot="vCtx">
          <b-form-group :id="f.cS.id + '-group' " :label="f.cS.label" :label-for="f.cS.id">
            <b-form-text :id="f.cS.id + '-help'">{{ f.cS.description }}</b-form-text>
            <b-form-input :id="f.cS.id" v-model="cS" :state="getValidationState(vCtx)"/>
            <b-form-invalid-feedback :id="f.cS.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

      </b-card-text></b-tab>

      <b-tab title="Autres frais"><b-card-text>

        <ValidationProvider :name="f.fB.label.toLowerCase()" rules="required|numeric|min_value:0" v-slot="vCtx">
          <b-form-group :id="f.fB.id + '-group' " :label="f.fB.label" :label-for="f.fB.id">
            <b-form-text :id="f.fB.id + '-help'">{{ f.fB.description }}</b-form-text>
            <b-form-input :id="f.fB.id" v-model="fB" :state="getValidationState(vCtx)"/>
            <b-form-invalid-feedback :id="f.fB.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider :name="f.fCMB.label.toLowerCase()" rules="required|numeric|min_value:0" v-slot="vCtx">
          <b-form-group :id="f.fCMB.id + '-group' " :label="f.fCMB.label" :label-for="f.fCMB.id">
            <b-form-text :id="f.fCMB.id + '-help'">{{ f.fCMB.description }}</b-form-text>
            <b-form-input :id="f.fCMB.id" v-model="fCMB" :state="getValidationState(vCtx)"/>
            <b-form-invalid-feedback :id="f.fCMB.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider :name="f.fTI.label.toLowerCase()" rules="required|numeric|min_value:0" v-slot="vCtx">
          <b-form-group :id="f.fTI.id + '-group' " :label="f.fTI.label" :label-for="f.fTI.id">
            <b-form-text :id="f.fTI.id + '-help'">{{ f.fTI.description }}</b-form-text>
            <b-form-input :id="f.fTI.id" v-model="fTI" :state="getValidationState(vCtx)"/>
            <b-form-invalid-feedback :id="f.fTI.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider :name="f.fBa.label.toLowerCase()" rules="required|numeric|min_value:0" v-slot="vCtx">
          <b-form-group :id="f.fBa.id + '-group' " :label="f.fBa.label" :label-for="f.fBa.id">
            <b-form-text :id="f.fBa.id + '-help'">{{ f.fBa.description }}</b-form-text>
            <b-form-input :id="f.fBa.id" v-model="fBa" :state="getValidationState(vCtx)"/>
            <b-form-invalid-feedback :id="f.fBa.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider :name="f.fDR.label.toLowerCase()" rules="required|numeric|min_value:0" v-slot="vCtx">
          <b-form-group :id="f.fDR.id + '-group' " :label="f.fDR.label" :label-for="f.fDR.id">
            <b-form-text :id="f.fDR.id + '-help'">{{ f.fDR.description }}</b-form-text>
            <b-form-input :id="f.fDR.id" v-model="fDR" :state="getValidationState(vCtx)"/>
            <b-form-invalid-feedback :id="f.fDR.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider :name="f.fL.label.toLowerCase()" rules="required|numeric|min_value:0" v-slot="vCtx">
          <b-form-group :id="f.fL.id + '-group' " :label="f.fL.label" :label-for="f.fL.id">
            <b-form-text :id="f.fL.id + '-help'">{{ f.fL.description }}</b-form-text>
            <b-form-input :id="f.fL.id" v-model="fL" :state="getValidationState(vCtx)"/>
            <b-form-invalid-feedback :id="f.fL.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider :name="f.fF.label.toLowerCase()" rules="required|numeric|min_value:0" v-slot="vCtx">
          <b-form-group :id="f.fF.id + '-group' " :label="f.fF.label" :label-for="f.fF.id">
            <b-form-text :id="f.fF.id + '-help'">{{ f.fF.description }}</b-form-text>
            <b-form-input :id="f.fF.id" v-model="fF" :state="getValidationState(vCtx)"/>
            <b-form-invalid-feedback :id="f.fF.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

      </b-card-text></b-tab>

    </b-tabs>
  </b-card>
</template>

<script>
import fields from '../model/deduire';
import { mapBasicFields } from '../util';

import baremeIT from '../store/bareme-transport';
// import baremeIJ from '../store/bareme-idemnites-journalieres';

import MonthlyTable from './MonthlyTable';

export default {
  name: 'DeduireTab',
  components: {
    MonthlyTable,
  },
  data() {
    let fTVpoptions = baremeIT.auto.map(a => { return { value: a.key, text: a.label }} );
    // console.log(fields.fTVp.options);
    // fields.fTMp.options
    return { f : fields, fTVpoptions : fTVpoptions};
  },
  computed: {
    ...mapBasicFields({
      fields: ["fTVp","cS", "fB", "fCMB", "fTI", "fBa", "fDR", "fL", "fF"],
      base: "deduire",
      mutation: "deduire/updateBasicField"
    }),
    fTVd: {
      get() {
        return this.$store.state.deduire.fTVd;
      },
      set(payload) {
        this.$store.commit("deduire/updateTableField", { field: 'fTVd', ...payload });
      }
    },
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  }
}
</script>

<style scoped></style>