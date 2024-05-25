/** Archivo TEMPORAL con los cursos de UTEC */
import Antonio from "../assets/TeamPhoto/Antonio.jpg";

export const getCursos = {
  calcvar: {
    iconfile: "",
    bannerImage: Antonio,
    title: "Cálculo de una Variable",
    info: "Analisis de modelos en ciencia e ingeniería mediante \
          herramientas de cálculo diferencial e integral, con funciones reales de variable real, \
          derivadas de integrales de funciones reales de una variable, las cuales se utilizarán como base y apoyo para \
          el estudio de nuevos contenidos y materias para abordar problemas del mundo real.",
    reqcourses: ["progra1"], // PARA TESTEAR
    nextCourses: ["calvect", "estad", "optica", "alglin"],
    rate: 0,
    keyKnowledges: [""],
  },
  matedisc1: {
    iconfile: "",
    bannerImage: Antonio,
    title: "Matemáticas Discretas I",
    info: "",
    reqcourses: [],
    nextCourses: ["matedisc2"],
    rate: 0,
    keyKnowledges: [""],
  },
  progra1: {
    iconfile: "",
    bannerImage: Antonio,
    title: "Programación I",
    info: "",
    reqcourses: [],
    nextCourses: ["progra2"],
    rate: 0,
    keyKnowledges: [""],
  },
  pi1: {
    iconfile: "",
    bannerImage: Antonio,
    title: "Proyectos Interdisciplinarios I",
    info: "",
    reqcourses: [],
    nextCourses: ["pi2"],
    rate: 0,
    keyKnowledges: [""],
  },
  // { ... }
};

/**
 * Proximamente con el usuario de hara un useEffect donde se cargara en vivo los cursos que actualmente
 * esta llevando y almacenara dentro de los componentes que usan la info de cursos ↑
 */
