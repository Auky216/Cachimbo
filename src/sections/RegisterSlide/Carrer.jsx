import { useState } from "react";
import { careers } from "../../static/academic";

// segunda vista de registro: seleccion de carrera
const Carrer = ({ pre, next }) => {
  return (
    <div>
      <h2>Tu carrera actualmente</h2>
      <button
        className="mb-3 mt-2 flex min-h-8 w-full items-center justify-center rounded-xl bg-cach-l3 text-cach-l1"
        onClick={next}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Carrer;
