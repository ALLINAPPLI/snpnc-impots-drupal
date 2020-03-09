export default {
  auto: [
    {
      key : '3CV',
      label: "3 CV",
      distance: [
        { min: 0, coef: 0.451, ajust: 0 },
        { min: 5000, coef: 0.27, ajust: 906 },
        { min: 20000, coef: 0.315, ajust: 0 },
      ]
    },
    {
      key : '4CV',
      label: "4 CV",
      distance: [
        { min: 0, coef: 0.518, ajust: 0 },
        { min: 5000, coef: 0.291, ajust: 1136 },
        { min: 20000, coef: 0.349, ajust: 0 },
      ]
    },
    {
      key : '5CV',
      label: "5 CV",
      distance: [
        { min: 0, coef: 0.543, ajust: 0 },
        { min: 5000, coef: 0.305, ajust: 1188 },
        { min: 20000, coef: 0.364, ajust: 0 },
      ]
    },
    {
      key : '6CV',
      label: "6 CV",
      distance: [
        { min: 0, coef: 0.568, ajust: 0 },
        { min: 5000, coef: 0.320, ajust: 1244 },
        { min: 20000, coef: 0.382, ajust: 0 },
      ]
    },
    {
      key : '7CV',
      label: "7 CV et plus",
      distance: [
        { min: 0, coef: 0.595, ajust: 0 },
        { min: 5000, coef: 0.337, ajust: 1288 },
        { min: 20000, coef: 0.401, ajust: 0 },
      ]
    },
  ],
  moto: [
    {
      key : '50',
      label: "< 50cm³",
      distance: [
        { min: 0, coef: 0.269, ajust: 0 },
        { min: 2000, coef: 0.063, ajust: 412 },
        { min: 5000, coef: 0.146, ajust: 0 },
      ]
    },
    {
      key : '2CV',
      label: "1 ou 2 CV",
      distance: [
        { min: 0, coef: 0.338, ajust: 0 },
        { min: 3000, coef: 0.084, ajust: 760 },
        { min: 6000, coef: 0.211, ajust: 0 },
      ]
    },
    {
      key : '5CV',
      label: "3, 4 ou 5 CV",
      distance: [
        { min: 0, coef: 0.4, ajust: 0 },
        { min: 3000, coef: 0.07, ajust: 989 },
        { min: 6000, coef: 0.235, ajust: 0 },
      ]
    },
    {
      key : '6',
      label: "6 CV et plus",
      distance: [
        { min: 0, coef: 0.518, ajust: 0 },
        { min: 3000, coef: 0.067, ajust: 1351 },
        { min: 6000, coef: 0.292, ajust: 0 },
      ]
    },
  ],
}
