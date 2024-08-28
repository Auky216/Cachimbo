export const universities = [
  {
    sigle: "PUCP",
    name: "Pontificia Universidad Católica del Perú",
    logo: "https://cide.pucp.edu.pe/wp-content/uploads/2021/07/cropped-favicon-512px.png",
  },
  {
    sigle: "UTEC",
    name: "Universidad de Ingeniería y Tecnología",
    logo: "",
  },
  {
    sigle: "UPC",
    name: "Universidad Peruana de Ciencias Aplicadas",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gOeexEO6AXRa2ms2EQcIpgqjzgMAkTeCww&s",
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
    [
      {
        credits: 3,
        name: "Cálculo en una variable",
        code: "calcvar",
      },
      {
        credits: 4,
        name: "Programación I",
        code: "progra1",
      },
      {
        credits: 4,
        name: "Matemáticas Discreta I",
        code: "matedisc1",
      },
      {
        credits: 2,
        name: "Introducción a la Ciencia de la Computación",
        code: "icc",
      },
      {
        credits: 3,
        name: "Laboratorio de Comunicación I",
        code: "labcom1",
      },
      {
        credits: 3,
        name: "Proyectos Interdisciplinarios I",
        code: "pi1",
      },
    ],
    [
      {
        credits: 3,
        name: "Cálculo Vectorial",
        code: "calcvect",
      },
      {
        credits: 4,
        name: "Programación II",
        code: "progra2",
      },
      {
        credits: 4,
        name: "Matemáticas Discreta II",
        code: "matedisc2",
      },
      {
        credits: 3,
        name: "Óptica y Ondas",
        code: "optica",
      },
      {
        credits: 3,
        name: "Laboratorio de Comunicación II",
        code: "labcom2",
      },
      {
        credits: 3,
        name: "Álgebra Lineal",
        code: "alglin",
      },
    ],
  ], // etc
  DS: [
    [
      {
        credits: 3,
        name: "Cálculo en una variable",
        code: "calcvar",
      },
      {
        credits: 4,
        name: "Programación I",
        code: "progra1",
      },
      {
        credits: 4,
        name: "Matemáticas Discreta I",
        code: "matedisc1",
      },
      {
        credits: 2,
        name: "Introducción a la Ciencia de Datos",
        code: "icc",
      },
      {
        credits: 3,
        name: "Laboratorio de Comunicación I",
        code: "labcom1",
      },
      {
        credits: 3,
        name: "Proyectos Interdisciplinarios I",
        code: "pi1",
      },
    ],
    [
      {
        credits: 3,
        name: "Cálculo Vectorial",
        code: "calcvect",
      },
      {
        credits: 3,
        name: "Programación II",
        code: "progra2",
      },
      {
        credits: 4,
        name: "Matemáticas Discreta II",
        code: "matedisc2",
      },
      {
        credits: 3,
        name: "Óptica y Ondas",
        code: "optica",
      },
      {
        credits: 3,
        name: "Laboratorio de Comunicación II",
        code: "labcom2",
      },
      {
        credits: 3,
        name: "Álgebra Lineal",
        code: "alglin",
      },
    ],
  ], // etc
  // etc, etc
};
