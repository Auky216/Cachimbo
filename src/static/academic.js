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

export const careers = {
  // solo en UTEC, por ahora
  UTEC: [
    {
      code: "CS",
      name: "Ciencia de la Computación",
    },
    {
      code: "DS",
      name: "Ciencia de Datos",
    },
    {
      code: "SI",
      name: "Sistemas de Información",
    },
    {
      code: "IQ",
      name: "Ingeniería Química",
    },
    {
      code: "AM",
      name: "Ingeniería Ambiental",
    },
    {
      code: "IN",
      name: "Ingeniería Industrial",
    },
    {
      code: "EL",
      name: "Ingeniería Electrónica",
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
      code: "EN",
      name: "Ingeniería de la Energía",
    },
    {
      code: "CI",
      name: "Ingeniería Civil",
    },
    {
      code: "BI",
      name: "Bioingeniería",
    },
    {
      code: "AD",
      name: "Administración y Negocios Digitales",
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
    ["calcvar", "progra1", "matedisc1", "icc", "labcom1", "pi1"],
    ["calcvect", "progra2", "matedisc2", "optica", "labcom2", "alglin"],
  ], // etc
  // etc, etc
};
