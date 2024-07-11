// ultimo slide del registro: felicitaciones y descripcion del usuario
const DescFinal = ({ next }) => {
  return (
    <div>
      <h2>Felicideas, ahora añade una dexcripción</h2>
      <button
        className="mb-3 mt-2 flex min-h-8 w-full items-center justify-center rounded-xl bg-cach-l3 text-cach-l1"
        onClick={next}
      >
        Siguiente
      </button>
    </div>
  );
};

export default DescFinal;
