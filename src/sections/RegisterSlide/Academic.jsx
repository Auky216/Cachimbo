import { UTECcourses } from "../../static/academic";
import { useUserStore } from "../../store/utils";
import { useState } from "react";

// tercer slide del registro: seleccion de ciclo de ingreso y cursos matriculados
const Academic = ({ next }) => {
  const loadcarrer = useUserStore(state => state.user.carrer);
  /*
  const UTECcourses = {
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
  */
  const courses = UTECcourses[loadcarrer];
  const [level, setLevel] = useState(0);

  return (
    <div>
      <h2>Tu avance académico</h2>
      <button
        className="mb-3 mt-2 flex min-h-8 w-full items-center justify-center rounded-xl bg-cach-l3 text-cach-l1"
        onClick={next}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Academic;
