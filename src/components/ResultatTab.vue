<template>
  <b-card>
    <b-button-group>
      <b-button size="sm" @click="savePDF()">Sauvegarder en PDF</b-button>
    </b-button-group>
    <h1>A déclarer</h1>
    <table id="declarer-table" class="table">
      <thead>
        <tr>
          <th scope="col">A déclarer</th>
          <th scope="col">Détail</th>
          <th scope="col">Montant</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ f.cNI.label }}</td>
          <td class="">{{ f.cNI.description }}</td>
          <td>{{ cNI }}</td>
        </tr>
        <tr>
          <td>{{ f.fH.label }}</td>
          <td class="">{{ f.fH.description }}</td>
          <td>{{ fH }}</td>
        </tr>
        <tr>
          <td>{{ f.iS.label }}</td>
          <td class="">{{ f.iS.description }}</td>
          <td>{{ iS }}</td>
        </tr>
        <tr>
          <slot v-if="com == 'af'">
            <td>{{ f.iR.label }}</td>
            <td>
              <MonthlyTable v-bind:edit="false" v-model="iR" v-bind:field="f.iR"></MonthlyTable>
            </td>
            <td>{{ iR.tableTotal }}</td>
          </slot>
          <slot v-else>
            <td>{{ f.iRa.label }}</td>
            <td>
              <MonthlyTable v-bind:edit="false" v-model="iRa" v-bind:field="f.iRa"></MonthlyTable>
            </td>
            <td>{{ iRa.tableTotal }}</td>
          </slot>
        </tr>

        <tr>
          <slot v-if="com == 'af'">
            <td>{{ f.iT.label }}</td>
            <td class="">
              <MonthlyTable v-bind:edit="false" v-model="iT" v-bind:field="f.iT"></MonthlyTable>
            </td>
            <td>{{ iT.tableTotal }}</td>
          </slot>
          <slot v-else>
              <td>{{ f.iTa.label }}</td>
              <td class="">
                <MonthlyTable v-bind:edit="false" v-model="iTa" v-bind:field="f.iTa"></MonthlyTable>
              </td>
              <td>{{ iTa.tableTotal }}</td>
          </slot>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="h3" colspan="2">{{ f.totalDeclarer.label }}</td>
          <td class="h3">{{ getTotal('declarer') }}</td>
        </tr>
      </tfoot>
    </table>
    <h1>A déduire</h1>
    <table id="deduire-table" class="table">
      <thead>
        <tr>
          <th scope="col">A déduire</th>
          <th scope="col">Détail</th>
          <th scope="col">Montant</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ f.iJ.label }}</td>
          <td class="">
            <IdemnitesJournalieres
              v-bind:edit="false"
              v-model="iJ"
              v-bind:field="f.iJ">
            </IdemnitesJournalieres>
          <td>{{ iJ.tableTotal }}</td>
        </tr>

        <tr>
          <td>{{ f.fTA.label }}</td>
          <td class="">
            <div v-html="f.fTA.description"></div>
            <MonthlyTable v-bind:edit="false" v-model="fTAd" v-bind:field="f.fTAd"></MonthlyTable>
          </td>
          <td>{{ fTA }}</td>
        </tr>

        <tr>
          <td>{{ f.fTM.label }}</td>
          <td class="">
            <div v-html="f.fTM.description"></div>
            <slot v-if="fTM > 0">
              <MonthlyTable v-bind:edit="false" v-model="fTMd" v-bind:field="f.fTMd"></MonthlyTable>
            </slot>
          </td>
          <td>{{ fTM }}</td>
        </tr>

        <tr>
          <td>{{ f.fTC.label }}</td>
          <td class="">
            <MonthlyTable v-bind:edit="false" v-model="fTC" v-bind:field="f.fTC"></MonthlyTable>
          </td>
          <td>{{ fTC.tableTotal }}</td>
        </tr>

        <tr>
          <td>{{ f.cS.label }}</td>
          <td class="">{{ f.cS.description }}</td>
          <td>{{ cS }}</td>
        </tr>

        <tr>
          <td>{{ f.fB.label }}</td>
          <td class="">{{ f.fB.description }}</td>
          <td>{{ fB }}</td>
        </tr>

        <tr>
          <td>{{ f.fCMB.label }}</td>
          <td class="">{{ f.fCMB.description }}</td>
          <td>{{ fCMB }}</td>
        </tr>

        <tr>
          <td>{{ f.fTI.label }}</td>
          <td class="">{{ f.fTI.description }}</td>
          <td>{{ fTI }}</td>
        </tr>

        <tr>
          <td>{{ f.fBa.label }}</td>
          <td class="">{{ f.fBa.description }}</td>
          <td>{{ fBa }}</td>
        </tr>

        <tr>
          <td>{{ f.fDR.label }}</td>
          <td class="">{{ f.fDR.description }}</td>
          <td>{{ fDR }}</td>
        </tr>

        <tr>
          <td>{{ f.fL.label }}</td>
          <td class="">{{ f.fL.description }}</td>
          <td>{{ fL }}</td>
        </tr>

        <tr>
          <td>{{ f.fF.label }}</td>
          <td class="">{{ f.fF.description }}</td>
          <td>{{ fF }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="h3" colspan="2">{{ f.totalDeduire.label }}</td>
          <td class="h3">{{ getTotal('deduire') }}</td>
        </tr>
      </tfoot>
    </table>
  </b-card>
</template>
<script>

import MonthlyTable from './MonthlyTable';
import IdemnitesJournalieres from './IdemnitesJournalieres';
import fieldsMixin from '../model/fieldsMixin';
import modelFields from '../model/fields';

import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../model/logob64';

import { mapGetters } from 'vuex'

export default {
  mixins: [fieldsMixin],
  name: 'ResultatTab',
  components: {
    MonthlyTable,
    IdemnitesJournalieres
  },
  data() {
    return {
      logo,
      f : modelFields,
      com: this.$store.state.global.com
    }
  },
  computed: {
    ...mapGetters(['getTotal']),
    ...fieldsMixin.mapFields("declarer", "updateField", ["cNI", "fH", "iS", 'iR', 'iT', 'iRa', 'iTa']),
    ...fieldsMixin.mapFields("deduire", "updateField", ["fTAp", "fTMp"]),
    ...fieldsMixin.mapFields("deduire", "updateIdemnitesJournalieres", ["iJ"]),
    ...fieldsMixin.mapFields("deduire", "updateDataTableField", ["fTAd", "fTMd", "fTC"]),
    ...fieldsMixin.mapFields(
      "deduire",
      "updateDataField",
      ["fTA", "fTM", "cS", "fB", "fCMB", "fTI", "fBa", "fDR", "fL", "fF"]
    ),
  },
  methods: {
    savePDF() {
      let doc = new jsPDF()
      let finalY = 0;
      let docTitle = 'SNPNC impôts frais réels ' + modelFields.year;

      doc.setProperties({
          title: docTitle,
          subject: docTitle,
          author: 'SNPNC',
          creator: 'SNPNC'
      });

      const pageSize = doc.internal.pageSize;
      const pageWidth = pageSize.getWidth();

      doc.setFont('Helvetica');
      // Title
      doc.setFontSize(21);
      doc.text(docTitle, (pageWidth / 2), 20, 'center');

      // addImage(imageData, format, x, y, width, height, alias, compression, rotation)
      doc.addImage(logo, 'PNG', 14, 35, 40, 40);

      doc.setFontSize(11);
      doc.setTextColor(100);
      doc.setFont('Helvetica', 'normal');
      var div = document.createElement("div");
      div.innerHTML = modelFields.intro;
      var text = doc.splitTextToSize(div.innerText, pageWidth - 75, {})
      doc.text(text, 60, 38)

      finalY = 90;
      // Title
      doc.setFontSize(18);
      doc.setFont('Helvetica', 'bold');
      doc.text('A déclarer', 14, finalY);

      finalY = 95;

      let bodyDeclarer;
      if (this.com == 'af') {
        bodyDeclarer = [
          [modelFields.cNI.label, this.cNI],
          [modelFields.fH.label, this.fH],
          [modelFields.iS.label, this.iS],
          [modelFields.iR.label, this.iR.tableTotal],
          [modelFields.iT.label, this.iT.tableTotal]
        ];
      } else {
        bodyDeclarer = [
          [modelFields.cNI.label, this.cNI],
          [modelFields.fH.label, this.fH],
          [modelFields.iS.label, this.iS],
          [modelFields.iR.label, this.iRa.tableTotal],
          [modelFields.iT.label, this.iTa.tableTotal]
        ];
      }

      // A déclarer table
      doc.autoTable({
        head: [['A déclarer', 'Montant']],
        body: bodyDeclarer,
        foot: [[modelFields.totalDeclarer.label, this.getTotal('declarer')]],
        startY: finalY,
        rowPageBreak: 'auto',
        bodyStyles: { valign: 'top' },
        styles: { cellWidth: 'wrap', overflow: 'hidden' },
        columnStyles: {
          1 : { fontStyle: 'bold' },
        },
      })

      finalY = doc.autoTable.previous.finalY;
      // Title
      doc.setFontSize(18);
      doc.setFont('Helvetica', 'bold');
      doc.text('A déduire', 14, finalY + 15);

      finalY += 15;

      // A déduire table
      doc.autoTable({
        head: [['A déduire', 'Montant']],
        body: [
          [modelFields.iJ.label, this.iJ.tableTotal],
          [modelFields.fTA.label, this.fTA],
          [modelFields.fTM.label, this.fTM],
          [modelFields.fTC.label, this.fTC.tableTotal],
          [modelFields.cS.label, this.cS],
          [modelFields.fB.label, this.fB],
          [modelFields.fCMB.label, this.fCMB],
          [modelFields.fTI.label, this.fTI],
          [modelFields.fBa.label, this.fBa],
          [modelFields.fDR.label, this.fDR],
          [modelFields.fL.label, this.fL],
          [modelFields.fF.label, this.fF]
        ],
        foot: [[modelFields.totalDeduire.label, this.getTotal('deduire')]],
        startY: finalY + 5,
        rowPageBreak: 'auto',
        bodyStyles: { valign: 'top' },
        styles: { cellWidth: 'wrap', overflow: 'hidden' },
        columnStyles: {
          1 : { fontStyle: 'bold' },
        },
      })

      // Idemnités journalières
      if (this.iJ.items.length > 0) {
        let iJtotal = this.iJ.tableTotal;
        doc.addPage();
        doc.setFontSize(18);
        doc.text('Indemnités journalières', 14, 22);
        doc.setFontSize(11);
        doc.autoTable({
          columns: [
              { dataKey: 'startDate', header: 'Début' },
              { dataKey: 'endDate', header: 'Fin' },
              { dataKey: 'comment', header: 'Calcul' },
              { dataKey: 'value', header: 'Montant' },
          ],
          body: this.iJ.items,
          foot: [ [{ content: 'Total', colSpan: 3}, iJtotal] ],
          startY: 30,
          rowPageBreak: 'auto',
          bodyStyles: { valign: 'middle' },
          styles: { cellWidth: 'wrap' },
          columnStyles: {
            comment : { cellWidth: 'auto', fontSize: 8 },
          },
        })
      }
      if (this.fTA > 0) {
        finalY = doc.autoTable.previous.finalY;
        // Title
        doc.setFontSize(18);
        doc.setFont('Helvetica', 'bold');
        doc.text(modelFields.fTA.label, 14, finalY + 20);

        finalY += 25;

        doc.autoTable({
          body: [
            [modelFields.fTAp.label, this.fTAp],
            [modelFields.fTAd.label, this.fTAd.tableTotal],
            [modelFields.fTA.label, modelFields.fTA.description]
          ],
          foot: [ ['Total', this.fTA] ],
          startY: finalY,
          rowPageBreak: 'auto',
          bodyStyles: { valign: 'top' },
        });

      }

      if (this.fTM > 0) {
        finalY = doc.autoTable.previous.finalY;
        // Title
        doc.setFontSize(18);
        doc.setFont('Helvetica', 'bold');
        doc.text(modelFields.fTM.label, 14, finalY + 20);

        finalY += 25;

        doc.autoTable({
          body: [
            [modelFields.fTMp.label, this.fTMp],
            [modelFields.fTMd.label, this.fTMd.tableTotal],
            [modelFields.fTM.label, modelFields.fTM.description]
          ],
          foot: [ ['Total', this.fTM] ],
          startY: finalY,
          rowPageBreak: 'auto',
          bodyStyles: { valign: 'top' },
        });

      }

      doc.save(docTitle.replaceAll(" ", "-") + '.pdf');
    }
  }
}
</script>

<style scoped></style>