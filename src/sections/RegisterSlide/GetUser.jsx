// cuarto slide del registro: ingreso de nombre, apellido y correo institucional
const GetUser = ({ next }) => {
  return (
    <div>
      <h2>Dinos quién eres !!</h2>
      <button
        className="mb-3 mt-2 flex min-h-8 w-full items-center justify-center rounded-xl bg-cach-l3 text-cach-l1"
        onClick={next}
      >
        Siguiente
      </button>
    </div>
  );
};

export default GetUser;
