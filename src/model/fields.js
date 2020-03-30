export default {
  months: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ],
  year: new Date().getFullYear(),
  intro: `<p>
          Le calcul de vos frais réels est facilité et optimisé par
          ce logiciel que vous propose le SNPNC. Il permet d'effectuer des simulations
          personnalisées et d'imprimer le détail des montants à déclarer AJ ou BJ ainsi
          que les montants à déduire AK ou BK. La méthode de déclaration des frais
          réels est celle que le SNPNC a négociée avec la Direction de la Législation
          Fiscale du Ministère de l’Economie, des Finances et de l’Industrie en 1999.
        </p>
        <p>
          <strong>
          NB : L'utilisation de cet outil informatique ne saurait engager la
          responsabilité du SNPNC, si des erreurs ou omissions étaient relevées
          par l'administration.
          </strong>
        </p>`,
  com: {
    id            : "compagnie",
    label         : `Compagnie`,
    description   : `Merci d'indiquer votre compagnie afin d'ajuster le formulaire
    à vos spécificités compagnie.`,
    options       : [
      { value : "null", text: `Sélectionnez votre compagnie` },
      { value : "af", text : `Air France` },
      { value : "autre", text : `Autre Compagnie` }
    ],
    default: "null"
  },

  /**
   * Declarer
   */
  cNI: {
    id          : "cNI",
    label       : `Cumul net imposable`,
    description : `Cumul net imposable figurant dans l’encadré au bas de la
    feuille de paie de décembre.`,
    default: 0
  },
  fH : {
    id          : "fH",
    label       : `Nuitées (frais d'hébergement)`,
    description : `Certaines Compagnies déclinent un montant global dans une
    attestation individuelle, d’autres laissent faire le calcul au PN en
    fournissant le prix des chambres hôtel par hôtel`,
    default: 0
  },
  iS : {
    id          : "iS",
    label       : `Idemnités journalières de la Sécurité Sociale`,
    description : `IJ perçues de la Sécurité Sociale pour congés maladie ou
    maternité ou paternité selon le relevé adressé par la CPAM. Déclarer 50%
    des IJ consécutives à un accident du travail,  ne pas déclarer celles
    faisant suite à des affections comportant un traitement prolongé et une
    thérapeutique particulièrement coûteuse – article L.322-3 du Code de
    la Sécurité Sociale.`,
    default: 0
  },
  iR : {
    id          : "iR",
    label       : "Idemnités répas",
    description : `Les lignes 241 et 340 ou les colonnes 'Ventilation
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
  },

  /**
   * Deduire
   */
  iJ: {
    id          : "indemnites-journalieres",
    label       : `Idemnités journalières`,
    description : `Attention ! Si vous effectuez un découcher dans au moins une
    escale de la "Zone monde" au cours de votre rotation CC-MC, alors votre type
    de rotation est "Zone monde" et non "Zone Euro-Moyen".`
  },
  fTA: {
    id          : "frais-transport-automobile",
    label       : `Frais transport automobile`,
    description : ``,
  },
  fTAp: {
    id          : "frais-transport-automobile-puissance",
    label       : `Puissance fiscale automobile`,
    description : `Puissance administrative fiscale de votre automobile.`,
    default     : "null"
  },
  fTAd: {
    id          : "frais-transport-vehicule-distance",
    label       : `Distance parcourue automobile`,
    description : ``,
    columns     : [ { key: "cfTAd", label : "Distance parcourue" } ],
    default     : { 'cfTAd' : ['0','0','0','0','0','0','0','0','0','0','0','0'] },
  },
  fTM: {
    id          : "frais-transport-deuxroues",
    label       : `Frais transport deux roues`,
    description : ``
  },
  fTMp: {
    id          : "frais-transport-deuxroues-puissance",
    label       : `Puissance fiscale deux roues`,
    description : `Puissance administrative fiscale de votre deux roues.`,
    default     : "null"
  },
  fTMd: {
    id          : "frais-transport-moto-distance",
    label       : `Distance parcourue deux roues`,
    description : ``,
    columns     : [ { key: "cfTMd", label : "Distance parcourue" } ]
  },
  fTC: {
    id          : "frais-transport-commun",
    label       : `Frais transports en commun`,
    description : `Un abonnement à un ou des moyens de transports en commun
    peuvent venir en déduction. Il convient de conserver le ou les coupons ou
    justificatif et de déduire le total des montants correspondants.`,
    columns     : [ { key: "cfTC", label : "Frais mensuels" } ]
  },
  cS: {
    id          : "cotisations-syndicales",
    label       : `Cotisations syndicales`,
    description : `Montant total figurant sur le reçu SNPNC.`
  },
  fB: {
    id          : "frais-blanchissage",
    label       : `Blanchissage`,
    description : `Les frais de blanchissage peuvent être portés en déduction
    sous réserve que d'une part vous n'utilisiez pas la carte de pressing d'Air
    France et d'autre part que vous soyez en mesure de présenter des justificatifs
    de pressing.`,
  },
  fCMB: {
    id          : "frais-frais-coiffeur",
    label       : `Coiffeur, maquillage, bas/collants`,
    description : `La plupart des entreprises de transport aérien font obligation
    au PNC de respecter l´image de marque de la compagnie en édictant des règles
    figurant dans un RPNC ou ce qui en tient lieu - coupe de cheveux réglementaire,
    maquillage discret mais soigneux, mains manucurées, collant couleur chair,
    etc.... Beaucoup d´inspecteurs acceptent d´en prendre en compte une partie,
    quelques uns estiment que coupe de cheveux, maquillage, manucure et collant
    ne sont pas l´apanage des seuls PNC et que nombre d´hommes et de femmes y
    sont soumis de fait.`,
  },
  fTI: {
    id          : "frais-telephone-internet",
    label       : `Téléphone/Internet`,
    description : `Certaines inspections acceptent de prendre en compte 30%
    (maximum) de la facture personnelle annuelle au titre de communications
    passées pour motif professionnel.`,
  },
  fBa: {
    id          : "frais-bagage",
    label       : `Bagage`,
    description : `L´achat ou la réparation de bagage peuvent être pris en
    compte étant donné l´usage intensif que le PN en fait pour des raisons
    professionnelles.`,
  },
  fDR: {
    id          : "frais-double-residence",
    label       : `Double résidence`,
    description : `Ils peuvent être pris en compte dans la mesure où, par ses
    obligations professionnelles, votre conjoint est tenu de résider en un
    endroit qui n´est pas la résidence principale du foyer fiscal ou encore
    dans le cas de PN provinciaux en contrat de travail à durée déterminée ou
    en période d´essai devant se loger à Paris. Ces frais font l´objet d´une
    prise en compte très restrictive.`,
  },
  fL: {
    id          : "frais-locaux",
    label       : `Locaux à usage professionnel`,
    description : `Lorsque le PN utilise une surface dédiée dans sa résidence
    principale à des fins professionnelles - rayonnage pour documentations de
    vol, ordinateur pour consulter le planning. Là encore, ces frais font l´objet
    d´une prise en compte très restrictive.`,
  },
  fF: {
    id          : "frais-formation",
    label       : `Formation`,
    description : `En vue d´acquérir une qualification permettant d´améliorer
    la situation professionnelle, ils peuvent faire l´objet d´une déduction.`,
  }
}