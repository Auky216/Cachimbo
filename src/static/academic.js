export const universities = [
  {
    sigle: "PUCP",
    name: "Pontificia Universidad Católica del Perú",
    logo: "",
  },
  {
    sigle: "UTEC",
    name: "Universidad de Ingeniería y Tecnología",
    logo: "",
  },
  {
    sigle: "UPC",
    name: "Universidad Peruana de Ciencias Aplicadas",
    logo: "",
  },
];

export const carrers = {
  // solo en UTEC, por ahora
  UTEC: [
    {
      code: "AD",
      name: "Administración y Negocios Digitales",
    },
    {
      code: "AM",
      name: "Ingeniería Ambiental",
    },
    {
      code: "BI",
      name: "Bioingeniería",
    },
    {
      code: "CI",
      name: "Ingeniería Civil",
    },
    {
      code: "CS",
      name: "Ciencia de la Computación",
    },
    {
      code: "DS",
      name: "Ciencia de Datos",
    },
    {
      code: "EL",
      name: "Ingeniería Electrónica",
    },
    {
      code: "EN",
      name: "Ingeniería de la Energía",
    },
    {
      code: "IN",
      name: "Ingeniería Industrial",
    },
    {
      code: "IQ",
      name: "Ingeniería Química",
    },
    {
      code: "ME",
      name: "Ingeniería Mecánica",
    },
    {
      code: "MT",
      name: "Ingeniería Mecatrónica",
    },
    {
      code: "SI",
      name: "Sistemas de Información",
    },
  ],
};

// por ahora es constante para testear con UTEC
export const UTECcourses = {
  CS: [
    ["calcvar", "progra1", "matedisc1", "icc", "labcom1", "pi1"],
    ["calcvect", "progra2", "matedisc2", "optica", "labcom2", "alglin"],
  ], // etc
  DS: [
    ["calcvar", "progra1", "matedisc1", "icd", "labcom1", "pi1"],
    ["calcvect", "progra2", "matedisc2", "optica", "labcom2", "alglin"],
  ], // etc
  // etc, etc
};
