<template>
  <b-card no-body>
    <b-tabs card fill>
      <b-tab title="Général" active><b-card-text>
        <ValidationProvider :name="f.cNI.label.toLowerCase()" rules="required|min:1|min_value:0" v-slot="vCtx">
          <b-form-group :id="f.cNI.id + '-group' " :label="f.cNI.label" :label-for="f.cNI.id">
            <b-form-text :id="f.cNI.id + '-help'">{{ f.cNI.description }}</b-form-text>
            <b-form-input :id="f.cNI.id" v-model="cNI" :state="getValidationState(vCtx)"/>
            <b-form-invalid-feedback :id="f.cNI.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider :name="f.fH.label.toLowerCase()" rules="required|min:1|min_value:0" v-slot="vCtx">
          <b-form-group :id="f.fH.id + '-group' " :label="f.fH.label" :label-for="f.fH.id">
            <b-form-text :id="f.fH.id + '-help'">{{ f.fH.description }}</b-form-text>
            <b-form-input :id="f.fH.id" v-model="fH" :state="getValidationState(vCtx)"/>
            <b-form-invalid-feedback :id="f.fH.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider :name="f.iS.label.toLowerCase()" rules="required|min:1|min_value:0" v-slot="vCtx">
          <b-form-group :id="f.iS.id + '-group' " :label="f.iS.label" :label-for="f.iS.id">
            <b-form-text :id="f.iS.id + '-help'">{{ f.iS.description }}</b-form-text>
            <b-form-input :id="f.iS.id" v-model="iS" :state="getValidationState(vCtx)"/>
            <b-form-invalid-feedback :id="f.iS.id + '-feedback'">{{ vCtx.errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

      </b-card-text></b-tab>
      <b-tab :title="f.iR.label" lazy><b-card-text>

        <b-form-group v-if="com == 'af'" :id="f.iR.id + '-group' " :label="f.iR.label" :label-for="f.iR.id">
          <MonthlyTable :id="f.iR.id" v-bind:edit="true" v-model="iR" v-bind:field="f.iR"></MonthlyTable>
        </b-form-group>

        <b-form-group v-else :id="f.iRa.id + '-group' " :label="f.iRa.label" :label-for="f.iRa.id">
          <MonthlyTable :id="f.iRa.id" v-bind:edit="true" v-model="iRa" v-bind:field="f.iRa"></MonthlyTable>
        </b-form-group>

      </b-card-text></b-tab>
      <b-tab :title="f.iT.label" lazy><b-card-text>

        <b-form-group v-if="com == 'af'" :id="f.iT.id + '-group' " :label="f.iT.label" :label-for="f.iT.id">
          <MonthlyTable :id="f.iT.id" v-bind:edit="true" v-model="iT" v-bind:field="f.iT"></MonthlyTable>
        </b-form-group>

        <b-form-group v-else :id="f.iTa.id + '-group' " :label="f.iTa.label" :label-for="f.iTa.id">
          <MonthlyTable :id="f.iTa.id" v-bind:edit="true" v-model="iTa" v-bind:field="f.iTa"></MonthlyTable>
        </b-form-group>

      </b-card-text></b-tab>

    </b-tabs>
  </b-card>
</template>

<script>

import fieldsMixin from '../model/fieldsMixin';
import fields from '../model/fields';
import MonthlyTable from './MonthlyTable';

export default {
  mixins: [fieldsMixin],
  name: 'DeclarerTab',
  components: {
    MonthlyTable,
  },
  data() {
    return { f : fields, com: this.$store.state.global.com };
  },
  computed: {
    ...fieldsMixin.mapFields("declarer", "updateDataField", ["cNI", "fH", "iS"]),
    ...fieldsMixin.mapFields("declarer", "updateDataTableField", ['iR', 'iT', 'iRa', 'iTa']),
  },
}
</script>