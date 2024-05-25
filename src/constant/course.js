/** Archivo TEMPORAL con los cursos de UTEC */
import Antonio from "../assets/TeamPhoto/Antonio.jpg";

export const getCursos = {
  calcvar: {
    iconfile: "",
    bannerImage: Antonio,
    title: "Cálculo de una Variable",
    info: "Resolución de problemas en mediciones y tasas en el tiempo del mundo real mediante modelos matemáticos aplicando cálculo diferencial e integración",
    requiredCourses: [""],
    nextCourses: ["calvect"],
    rate: 0,
    keyKnowledges: [""],
  },
  matedisc1: {
    iconfile: "",
    bannerImage: Antonio,
    title: "Matemáticas Discretas I",
    info: "",
    requiredCourses: [""],
    nextCourses: [""],
    rate: 0,
    keyKnowledges: [""],
  },
  progra1: {
    iconfile: "",
    bannerImage: Antonio,
    title: "Programación I",
    info: "",
    requiredCourses: [""],
    nextCourses: [""],
    rate: 0,
    keyKnowledges: [""],
  },
  pi1: {
    iconfile: "",
    bannerImage: Antonio,
    title: "Proyectos Interdisciplinarios I",
    info: "",
    requiredCourses: [""],
    nextCourses: [""],
    rate: 0,
    keyKnowledges: [""],
  },
  // { ... }
};

/**
 * Proximamente con el usuario de hara un useEffect donde se cargara en vivo los cursos que actualmente
 * esta llevando y almacenara dentro de los componentes que usan la info de cursos ↑
 */
