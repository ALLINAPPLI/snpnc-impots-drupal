export default
{
  messages : {
    errorMontant  : "un montant arrondi supérieur ou égal à 0 est requis.",
    errorRequired : "est requis."
  },
  fields : {
    profil : {
      compagnie: {
        id          : "compagnie",
        title       : "Compagnie",
        type        : "string",
        options     : [
          {
            value   : "af",
            text : "Air France",
          },
          {
            value   : "default",
            text : "Autre Compagnie",
          }
        ],
        value       : "",
        description : `Merci d'indiquer votre compagnie afin d´ajuster le formulaire à vos spécificités compagnie.`
      }
    },
    declarer : {
      cumulNetImposable: {
        id          : "cumulNetImposable",
        type        : "number",
        value       : 0,
        title       : `Cumul net imposable`,
        description : `Cumul net imposable figurant dans l’encadré au bas de la
        feuille de paie de décembre.`
      },
      fraisHebergement : {
        id          : "fraisHebergement",
        type        : "number",
        value       : 0,
        title       : `Frais d'hébergement`,
        description : `Certaines Compagnies déclinent un montant global dans une
        attestation individuelle, d’autres laissent faire le calcul au PN en
        fournissant le prix des chambres hôtel par hôtel`
      },
      idemnitesSecu : {
        id          : "idemnitesSecu",
        type        : "number",
        value       : 0,
        title       : `Idemnités journalières de la Sécurité Sociale`,
        description : `IJ perçues de la Sécurité Sociale pour congés maladie ou
        maternité ou paternité selon le relevé adressé par la CPAM. Déclarer 50%
        des IJ consécutives à un accident du travail,  ne pas déclarer celles
        faisant suite à des affections comportant un traitement prolongé et une
        thérapeutique particulièrement coûteuse – article L.322-3 du Code de
        la Sécurité Sociale.
`
      },
      idemnitesRepas : {
        id          : "idemnitesRepas",
        type        : "table",
        title       : "Idemnités répas",
        description : `Reportez les lignes 241 et 340 ou les colonnes 'Ventilation
        PN imposable' et 'PN non imposable' sur les EP4 de l´année.`,
        columns : [
          {
            key: "id240",
            title : "id240",
            values : []
          },
          {
            key: "id241",
            title : "id241",
            values : []
          }
        ]
      },
      idemnitesTransport : {
        id          : "idemnitesTransport",
        type        : "table",
        title       : "Idemnités transport",
        description : `Additionner les sommes figurant sur chaque bulletin de
        paie de l’année concernant des indemnités kilométriques , une prise en
        charge (totale ou partielle) de Pass Navigo, ou encore d’un forfait
        montées au terrain`,
        columns      : [
          {
            key     : "idemnitesTransport",
            title   : "Idemnités transport",
            values  : []
          }
        ]
      }
    },
    deduire : {
      fraisEscale: {
        id          : "fraisEscale",
        type        : "table-escale",
        title       : "Frais en escale",
        description : ``
      }
    }
  }
}