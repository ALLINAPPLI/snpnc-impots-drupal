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
        options     : ["Air France", "Autre Compagnie"],
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
        description : `Le cumul net imposable est le montant figurant sur
        votre déclaration préremplie 2018.`
      },
      nuites : {
        id          : "nuites",
        type        : "number",
        value       : 0,
        title       : `Nuités (Frais d'hébergement)`,
        description : `Document fourni par la compagnie avec les EP4 de
        février.`
      },
      idemnitesSecu : {
        id          : "idemnitesSecu",
        type        : "number",
        value       : 0,
        title       : `Idemnités journalières de la Sécurité Sociale`,
        description : `IJ perçues de la Sécurité Sociale pour congés maladie
        ou maternité ou paternité selon le relevé adressé par la CPAM.
        Ne jamais déclarer les IJ consécutives à un accident du travail
        ni celles faisant suite à des affections comportant un traitement
        prolongé et une thérapeutique particulièrement coûteuse - article
        L.322-3 du Code de la Sécurité Sociale.`
      },
      idemnitesRepas : {
        id          : "idemnitesRepas",
        type        : "table",
        title : 'Idemnités répas',
        description : `Reportez les lignes 241 et 340 ou les colonnes 'Ventilation
        PN imposable' et 'PN non imposable' sur les EP4 de l´année.`,
        columns : [
          {
            key: "id240",
            title : "id240",
            value : []
          },
          {
            key: "id241",
            title : "id241",
            value : []
          }
        ]
      }
    },
    deduire : {}
  }
}