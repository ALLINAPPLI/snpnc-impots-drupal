export default {
  cNI: {
    id          : "cumul-net-imposable",
    label       : `Cumul net imposable`,
    description : `Cumul net imposable figurant dans l’encadré au bas de la
    feuille de paie de décembre.`
  },
  fH : {
    id          : "fH",
    label       : `Nuitées (frais d'hébergement)`,
    description : `Certaines Compagnies déclinent un montant global dans une
    attestation individuelle, d’autres laissent faire le calcul au PN en
    fournissant le prix des chambres hôtel par hôtel`
  },
  iS : {
    id          : "iS",
    label       : `Idemnités journalières de la Sécurité Sociale`,
    description : `IJ perçues de la Sécurité Sociale pour congés maladie ou
    maternité ou paternité selon le relevé adressé par la CPAM. Déclarer 50%
    des IJ consécutives à un accident du travail,  ne pas déclarer celles
    faisant suite à des affections comportant un traitement prolongé et une
    thérapeutique particulièrement coûteuse – article L.322-3 du Code de
    la Sécurité Sociale.`
  },
  iR : {
    id          : "iR",
    label       : "Idemnités répas",
    description : `Reportez les lignes 241 et 340 ou les colonnes 'Ventilation
    PN imposable' et 'PN non imposable' sur les EP4 de l´année.`,
    columns     : [
      { key: "c241", label : "241" },
      { key: "c340", label : "340" }
    ]
  },
  iT : {
    id          : "iT",
    label       : "Idemnités transport",
    description : `Additionner les sommes figurant sur chaque bulletin de
    paie de l’année concernant des indemnités kilométriques , une prise en
    charge (totale ou partielle) de Pass Navigo, ou encore d’un forfait
    montées au terrain`,
    columns     : [
      { key: "c250", label: "250" },
      { key: "c270", label: "270" },
      { key: "c290", label: "290" },
      { key: "c292", label: "292" },
      { key: "c293", label: "293" },
      { key: "c294", label: "294" },
      { key: "c299", label: "299" }
    ]
  }
}
