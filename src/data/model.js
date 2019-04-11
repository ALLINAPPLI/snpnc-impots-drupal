export default
{
  messages : {
    errorMontant  : "doit être un montant arrondi supérieur ou égal à 0.",
    errorRequired : "est requis."
  },
  home : {
    introduction : `
    <p>
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
    compagnie: {
      title       : "Compagnie",
      options     : ["Air France", "Autre Compagnie"],
      value       : "",
      description : `Merci d'indiquer votre compagnie afin d´ajuster le formulaire à vos spécificités compagnie.`
    }
  },
  declarer : {
    cumulNetImposable: {
      id          : "cumulNetImposable",
      value       : 0,
      title       : `Cumul net imposable`,
      description : `Le cumul net imposable est le montant figurant sur
      votre déclaration préremplie 2018.`
    },
    nuites : {
      id          : "nuites",
      value       : 0,
      title       : `Nuités (Frais d'hébergement)`,
      description : `Document fourni par la compagnie avec les EP4 de
      février.`
    },
    idemnitesSecu : {
      id          : "idemnitesSecu",
      value       : 0,
      title       : `Idemnités journalières de la Sécurité Sociale`,
      description : `IJ perçues de la Sécurité Sociale pour congés maladie
      ou maternité ou paternité selon le relevé adressé par la CPAM.
      Ne jamais déclarer les IJ consécutives à un accident du travail
      ni celles faisant suite à des affections comportant un traitement
      prolongé et une thérapeutique particulièrement coûteuse - article
      L.322-3 du Code de la Sécurité Sociale.`
    },
  },
  deduire : {},
  resultat : {},
}