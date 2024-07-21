/** Archivo TEMPORAL con los cursos de UTEC */
import Antonio from "../assets/TeamPhoto/Antonio.jpg";

export const getCursos = {
  calcvar: {
    bannerImage: Antonio,
    title: "Cálculo de una Variable",
    info: "Analisis de modelos en ciencia e ingeniería mediante \
          herramientas de cálculo diferencial e integral, con funciones reales de variable real, \
          derivadas de integrales de funciones reales de una variable, las cuales se utilizarán como base y apoyo para \
          el estudio de nuevos contenidos y materias en los problemas del mundo real.",
    reqcourses: [], // PARA TESTEAR
    nextCourses: ["calcvect"], //["progra1", "estad", "optica", "alglin"],
    rate: 0,
    keyKnowledges: [
      {
        key: "derivadas",
        title: "Derivadas",
        content: "Derivadas de funciones reales de una variable",
        image: Antonio,
      },
      {
        key: "integrales",
        title: "Integrales",
        content: "Integrales de funciones reales de una variable",
        image: Antonio,
      },
    ],
  },
  matedisc1: {
    bannerImage: Antonio,
    title: "Matemáticas Discretas I",
    info: "",
    reqcourses: [],
    nextCourses: ["matedisc2"],
    rate: 0,
    keyKnowledges: [],
  },
  matedisc2: {
    bannerImage: Antonio,
    title: "Matemáticas Discretas II",
    info: "",
    reqcourses: [],
    nextCourses: [],
    rate: 0,
    keyKnowledges: [],
  },
  progra1: {
    bannerImage: Antonio,
    title: "Programación I",
    info: "Se usa como loco Python",
    reqcourses: [],
    nextCourses: ["progra2"],
    rate: 0,
    keyKnowledges: [],
  },
  pi1: {
    bannerImage: Antonio,
    title: "Proyectos Interdisciplinarios I",
    info: "",
    reqcourses: [],
    nextCourses: ["pi2"],
    rate: 0,
    keyKnowledges: [],
  },
  calcvect: {
    bannerImage: Antonio,
    title: "Cálculo Vectorial",
    info: "",
    reqcourses: [],
    nextCourses: ["edo"],
    rate: 0,
    keyKnowledges: ["integración por partes", "áreas de curvas"],
  },
  progra2:{
    bannerImage: Antonio,
    title: "Programación II",
    info: "C++",
    reqcourses: ["progra1"],
    nextCourses: ["progra3"],
    rate: 0,
    keyKnowledges: [],
  },
  labcom1:{
    bannerImage: Antonio,
    title: "Laboratorio de comunicación I",
    info: "Lectura y lectura y más lecturas",
    reqcourses: [],
    nextCourses: ["labcom2"],
    rate: 0,
    keyKnowledges: [],
  },
  labcom2:{
    bannerImage: Antonio,
    title: "Laboratorio de comunicación II",
    info: "Lectura y lectura y más lecturas",
    reqcourses: [],
    nextCourses: [],
    rate: 0,
    keyKnowledges: [],
  },
  pi2: {
    bannerImage: Antonio,
    title: "Proyectos Interdisciplinarios II",
    info: "",
    reqcourses: [],
    nextCourses: ["pi3"],
    rate: 0,
    keyKnowledges: [],
  },
  // { ... }
};

/**
 * Proximamente con el usuario de hara un useEffect donde se cargara en vivo los cursos que actualmente
 * esta llevando y almacenara dentro de los componentes que usan la info de cursos ↑
 */
