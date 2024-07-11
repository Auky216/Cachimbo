// cuarto slide del registro: seleccion de otros cursos de interes
const otherCourses = ({ next }) => {
  return (
    <div>
      <h2>Cursos que podría interesarte</h2>
      <button
        className="mb-3 mt-2 flex min-h-8 w-full items-center justify-center rounded-xl bg-cach-l3 text-cach-l1"
        onClick={next}
      >
        Siguiente
      </button>
    </div>
  );
};

export default otherCourses;
