export default {
  year: 2019,
  idtransport:  {
    auto: [
      {
        key : 'null',
        label: `Je n'ai pas de frais d'automobile à déduire`,
      },
      {
        key : '3CV',
        label: '3 CV',
        distance: [
          { min: 20000, coef: 0.318, ajust: 0 },
          { min: 5000, coef: 0.273, ajust: 915 },
          { min: 0, coef: 0.456, ajust: 0 },
        ]
      },
      {
        key : '4CV',
        label: '4 CV',
        distance: [
          { min: 20000, coef: 0.352, ajust: 0 },
          { min: 5000, coef: 0.294, ajust: 1147 },
          { min: 0, coef: 0.523, ajust: 0 },
        ]
      },
      {
        key : '5CV',
        label: "5 CV",
        distance: [
          { min: 20000, coef: 0.368, ajust: 0 },
          { min: 5000, coef: 0.308, ajust: 1200 },
          { min: 0, coef: 0.548, ajust: 0 },
        ]
      },
      {
        key : '6CV',
        label: "6 CV",
        distance: [
          { min: 20000, coef: 0.386, ajust: 0 },
          { min: 5000, coef: 0.323, ajust: 1256 },
          { min: 0, coef: 0.574, ajust: 0 },
        ]
      },
      {
        key : '7CV',
        label: "7 CV et plus",
        distance: [
          { min: 20000, coef: 0.405, ajust: 0 },
          { min: 5000, coef: 0.340, ajust: 1301 },
          { min: 0, coef: 0.601, ajust: 0 },
        ]
      },
    ],
    moto: [
      {
        key : 'null',
        label: `Je n'ai pas de frais deux roues à déduire`,
      },
      {
        key : '50',
        label: "< 50cm³",
        distance: [
          { min: 5000, coef: 0.147, ajust: 0 },
          { min: 2000, coef: 0.064, ajust: 416 },
          { min: 0, coef: 0.272, ajust: 0 },
        ]
      },
      {
        key : '2CV',
        label: "1 ou 2 CV",
        distance: [
          { min: 6000, coef: 0.213, ajust: 0 },
          { min: 3000, coef: 0.085, ajust: 768 },
          { min: 0, coef: 0.341, ajust: 0 },
        ]
      },
      {
        key : '5CV',
        label: "3, 4 ou 5 CV",
        distance: [
          { min: 6000, coef: 0.237, ajust: 0 },
          { min: 3000, coef: 0.071, ajust: 999 },
          { min: 0, coef: 0.404, ajust: 0 },
        ]
      },
      {
        key : '6',
        label: "6 CV et plus",
        distance: [
          { min: 6000, coef: 0.295, ajust: 0 },
          { min: 3000, coef: 0.068, ajust: 1365 },
          { min: 0, coef: 0.523, ajust: 0 },
        ]
      },
    ]
  },
  idemniteZoneEurope: 156,
  zoneMonde: { key: "L", label: "Zone Monde" },
  zoneEurope: { key: "E", label: "Zone Euro-Moyen" },
  idjournalieres: [
    {
      "pays": "AFGHANISTAN",
      "zone": "L",
      "idemnite": 245.99,
      "du": ""
    },
    {
      "pays": "AFRIQUE DU SUD",
      "zone": "L",
      "idemnite": 185,
      "du": ""
    },
    {
      "pays": "AFRIQUE DU SUD",
      "zone": "L",
      "idemnite": 138,
      "du": "01/03/2019"
    },
    {
      "pays": "ANGOLA",
      "zone": "L",
      "idemnite": 300,
      "du": ""
    },
    {
      "pays": "ANGUILLA",
      "zone": "L",
      "idemnite": 183.39,
      "du": ""
    },
    {
      "pays": "ANTIGUA",
      "zone": "L",
      "idemnite": 202.79,
      "du": ""
    },
    {
      "pays": "ARABIE SAOUDITE",
      "zone": "L",
      "idemnite": 158,
      "du": ""
    },
    {
      "pays": "ARGENTINE",
      "zone": "L",
      "idemnite": 138.42,
      "du": ""
    },
    {
      "pays": "ARMENIE",
      "zone": "L",
      "idemnite": 186,
      "du": ""
    },
    {
      "pays": "ARUBA",
      "zone": "L",
      "idemnite": 132.25,
      "du": ""
    },
    {
      "pays": "AUSTRALIE",
      "zone": "L",
      "idemnite": 216.05,
      "du": ""
    },
    {
      "pays": "AZERBAIDJAN",
      "zone": "L",
      "idemnite": 204,
      "du": ""
    },
    {
      "pays": "BAHAMAS",
      "zone": "L",
      "idemnite": 182.51,
      "du": ""
    },
    {
      "pays": "BAHREIN",
      "zone": "L",
      "idemnite": 200,
      "du": ""
    },
    {
      "pays": "BANGLADESH",
      "zone": "L",
      "idemnite": 258,
      "du": ""
    },
    {
      "pays": "BARBADE",
      "zone": "L",
      "idemnite": 273.32,
      "du": ""
    },
    {
      "pays": "BELIZE",
      "zone": "L",
      "idemnite": 156.06,
      "du": ""
    },
    {
      "pays": "BENIN",
      "zone": "L",
      "idemnite": 145,
      "du": ""
    },
    {
      "pays": "BERMUDES",
      "zone": "L",
      "idemnite": 171.07,
      "du": ""
    },
    {
      "pays": "BIELORUSSIE",
      "zone": "L",
      "idemnite": 150,
      "du": ""
    },
    {
      "pays": "BOLIVIE",
      "zone": "L",
      "idemnite": 119.03,
      "du": ""
    },
    {
      "pays": "BOTSWANA",
      "zone": "L",
      "idemnite": 119,
      "du": ""
    },
    {
      "pays": "BRESIL",
      "zone": "L",
      "idemnite": 216,
      "du": ""
    },
    {
      "pays": "BRUNEI DARUSSALAM",
      "zone": "L",
      "idemnite": 166.05,
      "du": ""
    },
    {
      "pays": "BURKINA FASO",
      "zone": "L",
      "idemnite": 145,
      "du": ""
    },
    {
      "pays": "BURUNDI",
      "zone": "L",
      "idemnite": 140,
      "du": ""
    },
    {
      "pays": "CAMBODGE",
      "zone": "L",
      "idemnite": 132.25,
      "du": ""
    },
    {
      "pays": "CAMEROUN",
      "zone": "L",
      "idemnite": 120,
      "du": ""
    },
    {
      "pays": "CANADA",
      "zone": "L",
      "idemnite": 172.17,
      "du": ""
    },
    {
      "pays": "CAP-VERT",
      "zone": "L",
      "idemnite": 123.11,
      "du": ""
    },
    {
      "pays": "CHILI",
      "zone": "L",
      "idemnite": 191.32,
      "du": ""
    },
    {
      "pays": "CHINE",
      "zone": "L",
      "idemnite": 216.62,
      "du": ""
    },
    {
      "pays": "CHINE (SHANGAI)",
      "zone": "L",
      "idemnite": 216.62,
      "du": ""
    },
    {
      "pays": "COLOMBIE",
      "zone": "L",
      "idemnite": 155.18,
      "du": ""
    },
    {
      "pays": "COMORES",
      "zone": "L",
      "idemnite": 150,
      "du": ""
    },
    {
      "pays": "CONGO",
      "zone": "L",
      "idemnite": 106.53,
      "du": ""
    },
    {
      "pays": "COREE DU NORD",
      "zone": "L",
      "idemnite": 239.82,
      "du": ""
    },
    {
      "pays": "COREE DU SUD",
      "zone": "L",
      "idemnite": 210,
      "du": ""
    },
    {
      "pays": "COSTA RICA",
      "zone": "L",
      "idemnite": 149,
      "du": ""
    },
    {
      "pays": "COTE D’IVOIRE",
      "zone": "L",
      "idemnite": 208.86,
      "du": ""
    },
    {
      "pays": "CUBA",
      "zone": "L",
      "idemnite": 200,
      "du": ""
    },
    {
      "pays": "CURACAO",
      "zone": "L",
      "idemnite": 132.25,
      "du": ""
    },
    {
      "pays": "DJIBOUTI",
      "zone": "L",
      "idemnite": 179.95,
      "du": ""
    },
    {
      "pays": "DOMINIQUE",
      "zone": "L",
      "idemnite": 177.22,
      "du": ""
    },
    {
      "pays": "EGYPTE",
      "zone": "L",
      "idemnite": 148,
      "du": ""
    },
    {
      "pays": "EMIRATS ARABES UNIS",
      "zone": "L",
      "idemnite": 300,
      "du": ""
    },
    {
      "pays": "EQUATEUR",
      "zone": "L",
      "idemnite": 132.25,
      "du": ""
    },
    {
      "pays": "ERYTHREE",
      "zone": "L",
      "idemnite": 171.93,
      "du": ""
    },
    {
      "pays": "ETATS - UNIS",
      "zone": "L",
      "idemnite": 282.14,
      "du": ""
    },
    {
      "pays": "ETATS - UNIS (NEW-YORK)",
      "zone": "L",
      "idemnite": 282.14,
      "du": ""
    },
    {
      "pays": "ETATS - UNIS (NEW-YORK)",
      "zone": "L",
      "idemnite": 396.76,
      "du": "01/09/2019"
    },
    {
      "pays": "ETHIOPIE",
      "zone": "L",
      "idemnite": 123,
      "du": ""
    },
    {
      "pays": "FIDJI",
      "zone": "L",
      "idemnite": 92.08,
      "du": ""
    },
    {
      "pays": "GABON",
      "zone": "L",
      "idemnite": 213.43,
      "du": ""
    },
    {
      "pays": "GAMBIE",
      "zone": "L",
      "idemnite": 43.12,
      "du": ""
    },
    {
      "pays": "GEORGIE",
      "zone": "L",
      "idemnite": 171.93,
      "du": ""
    },
    {
      "pays": "GHANA",
      "zone": "L",
      "idemnite": 220.42,
      "du": ""
    },
    {
      "pays": "GRENADE",
      "zone": "L",
      "idemnite": 175.45,
      "du": ""
    },
    {
      "pays": "GUATEMALA",
      "zone": "L",
      "idemnite": 160,
      "du": ""
    },
    {
      "pays": "GUINEE (CONAKRY)",
      "zone": "L",
      "idemnite": 170,
      "du": ""
    },
    {
      "pays": "GUINEE BISSAU",
      "zone": "L",
      "idemnite": 105,
      "du": ""
    },
    {
      "pays": "GUINEE EQUATORIALE",
      "zone": "L",
      "idemnite": 137.97,
      "du": ""
    },
    {
      "pays": "GUYANA (GEORGETOWN)",
      "zone": "L",
      "idemnite": 176.34,
      "du": ""
    },
    {
      "pays": "HAITI",
      "zone": "L",
      "idemnite": 193.97,
      "du": ""
    },
    {
      "pays": "HONDURAS",
      "zone": "L",
      "idemnite": 134.02,
      "du": ""
    },
    {
      "pays": "HONG-KONG",
      "zone": "L",
      "idemnite": 248.38,
      "du": ""
    },
    {
      "pays": "ILES CAIMANS",
      "zone": "L",
      "idemnite": 124.32,
      "du": ""
    },
    {
      "pays": "ILES COOK",
      "zone": "L",
      "idemnite": 237.33,
      "du": ""
    },
    {
      "pays": "ILES MARSHALL",
      "zone": "L",
      "idemnite": 135.78,
      "du": ""
    },
    {
      "pays": "ILES PALAOS",
      "zone": "L",
      "idemnite": 274.2,
      "du": ""
    },
    {
      "pays": "INDE",
      "zone": "L",
      "idemnite": 210,
      "du": ""
    },
    {
      "pays": "INDONESIE",
      "zone": "L",
      "idemnite": 160,
      "du": ""
    },
    {
      "pays": "IRAK",
      "zone": "L",
      "idemnite": 300,
      "du": ""
    },
    {
      "pays": "IRAN",
      "zone": "L",
      "idemnite": 163.99,
      "du": ""
    },
    {
      "pays": "ISRAEL",
      "zone": "L",
      "idemnite": 230,
      "du": ""
    },
    {
      "pays": "JAMAIQUE",
      "zone": "L",
      "idemnite": 142.83,
      "du": ""
    },
    {
      "pays": "JAPON",
      "zone": "L",
      "idemnite": 205.82,
      "du": ""
    },
    {
      "pays": "JAPON (TOKYO)",
      "zone": "L",
      "idemnite": 242.14,
      "du": ""
    },
    {
      "pays": "JORDANIE",
      "zone": "L",
      "idemnite": 187.69,
      "du": ""
    },
    {
      "pays": "KAZAKHSTAN",
      "zone": "L",
      "idemnite": 290,
      "du": ""
    },
    {
      "pays": "KENYA",
      "zone": "L",
      "idemnite": 124.32,
      "du": ""
    },
    {
      "pays": "KIRGHIZIE",
      "zone": "L",
      "idemnite": 150,
      "du": ""
    },
    {
      "pays": "KIRIBATI",
      "zone": "L",
      "idemnite": 90.85,
      "du": ""
    },
    {
      "pays": "KOWEIT",
      "zone": "L",
      "idemnite": 245,
      "du": ""
    },
    {
      "pays": "LAOS",
      "zone": "L",
      "idemnite": 132.25,
      "du": ""
    },
    {
      "pays": "LESOTHO",
      "zone": "L",
      "idemnite": 120,
      "du": ""
    },
    {
      "pays": "LIBAN",
      "zone": "L",
      "idemnite": 154,
      "du": ""
    },
    {
      "pays": "LIBERIA",
      "zone": "L",
      "idemnite": 202.79,
      "du": ""
    },
    {
      "pays": "LIBYE",
      "zone": "L",
      "idemnite": 176.8,
      "du": ""
    },
    {
      "pays": "MACAO",
      "zone": "L",
      "idemnite": 248.38,
      "du": ""
    },
    {
      "pays": "MADAGASCAR",
      "zone": "L",
      "idemnite": 114,
      "du": ""
    },
    {
      "pays": "MALAISIE",
      "zone": "L",
      "idemnite": 100.35,
      "du": ""
    },
    {
      "pays": "MALAWI",
      "zone": "L",
      "idemnite": 188.68,
      "du": ""
    },
    {
      "pays": "MALDIVES",
      "zone": "L",
      "idemnite": 320,
      "du": ""
    },
    {
      "pays": "MALI",
      "zone": "L",
      "idemnite": 94.52,
      "du": ""
    },
    {
      "pays": "MAURICE",
      "zone": "L",
      "idemnite": 137.34,
      "du": ""
    },
    {
      "pays": "MAURITANIE",
      "zone": "L",
      "idemnite": 143,
      "du": ""
    },
    {
      "pays": "MEXIQUE",
      "zone": "L",
      "idemnite": 150,
      "du": ""
    },
    {
      "pays": "MICRONESIE",
      "zone": "L",
      "idemnite": 138.42,
      "du": ""
    },
    {
      "pays": "MOLDAVIE",
      "zone": "L",
      "idemnite": 165.76,
      "du": ""
    },
    {
      "pays": "MONGOLIE",
      "zone": "L",
      "idemnite": 102,
      "du": ""
    },
    {
      "pays": "MOZAMBIQUE",
      "zone": "L",
      "idemnite": 166.64,
      "du": ""
    },
    {
      "pays": "MYANMAR (BIRMANIE)",
      "zone": "L",
      "idemnite": 220.42,
      "du": ""
    },
    {
      "pays": "NAMIBIE",
      "zone": "L",
      "idemnite": 90,
      "du": ""
    },
    {
      "pays": "NAURU",
      "zone": "L",
      "idemnite": 85.5,
      "du": ""
    },
    {
      "pays": "NEPAL",
      "zone": "L",
      "idemnite": 123.44,
      "du": ""
    },
    {
      "pays": "NICARAGUA",
      "zone": "L",
      "idemnite": 135.78,
      "du": ""
    },
    {
      "pays": "NIGER",
      "zone": "L",
      "idemnite": 118.91,
      "du": ""
    },
    {
      "pays": "NIGERIA",
      "zone": "L",
      "idemnite": 273,
      "du": ""
    },
    {
      "pays": "NIUE",
      "zone": "L",
      "idemnite": 121.04,
      "du": ""
    },
    {
      "pays": "NOUVELLE-CALEDONIE",
      "zone": "L",
      "idemnite": 120,
      "du": ""
    },
    {
      "pays": "NOUVELLE-ZELANDE",
      "zone": "L",
      "idemnite": 219.53,
      "du": ""
    },
    {
      "pays": "OMAN",
      "zone": "L",
      "idemnite": 265,
      "du": ""
    },
    {
      "pays": "OUGANDA",
      "zone": "L",
      "idemnite": 130,
      "du": ""
    },
    {
      "pays": "OUZBEKISTAN",
      "zone": "L",
      "idemnite": 173.69,
      "du": ""
    },
    {
      "pays": "PAKISTAN",
      "zone": "L",
      "idemnite": 152.53,
      "du": ""
    },
    {
      "pays": "PANAMA",
      "zone": "L",
      "idemnite": 156.94,
      "du": ""
    },
    {
      "pays": "PAPOUASIE-NOUVELLE-GUINEE",
      "zone": "L",
      "idemnite": 172,
      "du": ""
    },
    {
      "pays": "PARAGUAY",
      "zone": "L",
      "idemnite": 158.7,
      "du": ""
    },
    {
      "pays": "PEROU",
      "zone": "L",
      "idemnite": 149.89,
      "du": ""
    },
    {
      "pays": "PHILIPPINES",
      "zone": "L",
      "idemnite": 149.9,
      "du": ""
    },
    {
      "pays": "POLYNESIE FRANCAISE",
      "zone": "L",
      "idemnite": 120,
      "du": ""
    },
    {
      "pays": "QATAR",
      "zone": "L",
      "idemnite": 278,
      "du": ""
    },
    {
      "pays": "REP CENTRAFRICAINE",
      "zone": "L",
      "idemnite": 121.96,
      "du": ""
    },
    {
      "pays": "REPUBLIQUE DEM DU CONGO",
      "zone": "L",
      "idemnite": 195,
      "du": ""
    },
    {
      "pays": "REPUBLIQUE DOMINICAINE",
      "zone": "L",
      "idemnite": 125.2,
      "du": ""
    },
    {
      "pays": "REP SOUDAN DU SUD",
      "zone": "L",
      "idemnite": 269.79,
      "du": ""
    },
    {
      "pays": "REPUBLIQUE DU YEMEN",
      "zone": "L",
      "idemnite": 188,
      "du": ""
    },
    {
      "pays": "RUSSIE",
      "zone": "L",
      "idemnite": 230,
      "du": ""
    },
    {
      "pays": "RWANDA",
      "zone": "L",
      "idemnite": 244.23,
      "du": ""
    },
    {
      "pays": "SAINT-KITTS-ET-NEVIS",
      "zone": "L",
      "idemnite": 178.1,
      "du": ""
    },
    {
      "pays": "SAINT-VINCENT",
      "zone": "L",
      "idemnite": 165.76,
      "du": ""
    },
    {
      "pays": "SAINTE-LUCIE",
      "zone": "L",
      "idemnite": 175.45,
      "du": ""
    },
    {
      "pays": "SALVADOR",
      "zone": "L",
      "idemnite": 156.06,
      "du": ""
    },
    {
      "pays": "SAMOA OCCIDENTALES",
      "zone": "L",
      "idemnite": 202.79,
      "du": ""
    },
    {
      "pays": "SAO TOME-ET-PRINCIPE",
      "zone": "L",
      "idemnite": 119.03,
      "du": ""
    },
    {
      "pays": "SENEGAL",
      "zone": "L",
      "idemnite": 139.95,
      "du": ""
    },
    {
      "pays": "SEYCHELLES",
      "zone": "L",
      "idemnite": 300,
      "du": ""
    },
    {
      "pays": "SIERRA LEONE",
      "zone": "L",
      "idemnite": 229.24,
      "du": ""
    },
    {
      "pays": "SINGAPOUR",
      "zone": "L",
      "idemnite": 200,
      "du": ""
    },
    {
      "pays": "SOMALIE",
      "zone": "L",
      "idemnite": 139.31,
      "du": ""
    },
    {
      "pays": "SOUDAN",
      "zone": "L",
      "idemnite": 154.29,
      "du": ""
    },
    {
      "pays": "SRI LANKA",
      "zone": "L",
      "idemnite": 180,
      "du": ""
    },
    {
      "pays": "SURINAM",
      "zone": "L",
      "idemnite": 158.7,
      "du": ""
    },
    {
      "pays": "SYRIE",
      "zone": "L",
      "idemnite": 154,
      "du": ""
    },
    {
      "pays": "TAIWAN",
      "zone": "L",
      "idemnite": 174.55,
      "du": ""
    },
    {
      "pays": "TANZANIE",
      "zone": "L",
      "idemnite": 135,
      "du": ""
    },
    {
      "pays": "TCHAD",
      "zone": "L",
      "idemnite": 225,
      "du": ""
    },
    {
      "pays": "THAILANDE",
      "zone": "L",
      "idemnite": 141.91,
      "du": ""
    },
    {
      "pays": "TIMOR ORIENTAL",
      "zone": "L",
      "idemnite": 150,
      "du": ""
    },
    {
      "pays": "TOGO",
      "zone": "L",
      "idemnite": 125.98,
      "du": ""
    },
    {
      "pays": "TONGA",
      "zone": "L",
      "idemnite": 87.97,
      "du": ""
    },
    {
      "pays": "TRINITE ET TOBAGO",
      "zone": "L",
      "idemnite": 235.41,
      "du": ""
    },
    {
      "pays": "TURKMENISTAN",
      "zone": "L",
      "idemnite": 102,
      "du": ""
    },
    {
      "pays": "TURQUIE",
      "zone": "L",
      "idemnite": 165,
      "du": ""
    },
    {
      "pays": "TUVALU",
      "zone": "L",
      "idemnite": 78.92,
      "du": ""
    },
    {
      "pays": "UKRAINE",
      "zone": "L",
      "idemnite": 208,
      "du": ""
    },
    {
      "pays": "URUGUAY",
      "zone": "L",
      "idemnite": 119.03,
      "du": ""
    },
    {
      "pays": "VANUATU",
      "zone": "L",
      "idemnite": 210,
      "du": ""
    },
    {
      "pays": "VENEZUELA",
      "zone": "L",
      "idemnite": 195,
      "du": ""
    },
    {
      "pays": "VIETNAM",
      "zone": "L",
      "idemnite": 158,
      "du": ""
    },
    {
      "pays": "WALLIS ET FUTUNA",
      "zone": "L",
      "idemnite": 120,
      "du": ""
    },
    {
      "pays": "ZAMBIE",
      "zone": "L",
      "idemnite": 180,
      "du": ""
    },
    {
      "pays": "ZIMBABWE",
      "zone": "L",
      "idemnite": 158.7,
      "du": ""
    },
    {
      "pays": "ALBANIE",
      "zone": "E",
      "idemnite": 130,
      "du": ""
    },
    {
      "pays": "ALGERIE",
      "zone": "E",
      "idemnite": 152.28,
      "du": ""
    },
    {
      "pays": "BOSNIE-HERZEGOVINE",
      "zone": "E",
      "idemnite": 169,
      "du": ""
    },
    {
      "pays": "BULGARIE",
      "zone": "E",
      "idemnite": 145,
      "du": ""
    },
    {
      "pays": "CROATIE",
      "zone": "E",
      "idemnite": 142,
      "du": ""
    },
    {
      "pays": "DANEMARK",
      "zone": "E",
      "idemnite": 222.24,
      "du": ""
    },
    {
      "pays": "GRANDE-BRETAGNE",
      "zone": "E",
      "idemnite": 206.26,
      "du": ""
    },
    {
      "pays": "HONGRIE",
      "zone": "E",
      "idemnite": 175,
      "du": ""
    },
    {
      "pays": "ISLANDE",
      "zone": "E",
      "idemnite": 255.74,
      "du": ""
    },
    {
      "pays": "LIECHTENSTEIN",
      "zone": "E",
      "idemnite": 207.93,
      "du": ""
    },
    {
      "pays": "MACEDOINE",
      "zone": "E",
      "idemnite": 117,
      "du": ""
    },
    {
      "pays": "MAROC",
      "zone": "E",
      "idemnite": 175,
      "du": ""
    },
    {
      "pays": "MONTENEGRO",
      "zone": "E",
      "idemnite": 150,
      "du": ""
    },
    {
      "pays": "NORVEGE",
      "zone": "E",
      "idemnite": 147.89,
      "du": ""
    },
    {
      "pays": "POLOGNE",
      "zone": "E",
      "idemnite": 175,
      "du": ""
    },
    {
      "pays": "REPUBLIQUE TCHEQUE",
      "zone": "E",
      "idemnite": 180,
      "du": ""
    },
    {
      "pays": "ROUMANIE",
      "zone": "E",
      "idemnite": 160,
      "du": ""
    },
    {
      "pays": "SERBIE",
      "zone": "E",
      "idemnite": 150,
      "du": ""
    },
    {
      "pays": "SUEDE",
      "zone": "E",
      "idemnite": 192.93,
      "du": ""
    },
    {
      "pays": "SUISSE",
      "zone": "E",
      "idemnite": 207.93,
      "du": ""
    },
    {
      "pays": "TUNISIE",
      "zone": "E",
      "idemnite": 125,
      "du": ""
    },
    {
      "pays": "ALLEMAGNE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "AUTRICHE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "BELGIQUE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "CHYPRE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "ESPAGNE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "ESTONIE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "FINLANDE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "FRANCE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "GRÈCE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "GUADELOUPE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "GUYANE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "IRLANDE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "ITALIE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "LA RÉUNION",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "LETTONIE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "LITUANIE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "LUXEMBOURG",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "MALTE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "MARTINIQUE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "MAYOTTE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "PAYS-BAS",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "PORTUGAL",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "SAINT BARTHÉLÉMY",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "SAINT-MARTIN",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "SAINT PIERRE ET MIQUELON",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "SLOVAQUIE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    },
    {
      "pays": "SLOVÉNIE",
      "zone": "E",
      "idemnite": 156,
      "du": ""
    }
  ]
}