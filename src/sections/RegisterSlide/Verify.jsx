// septimo slide del registro: confirmacion de la cuenta desde el correo institucional
const Verify = ({ next }) => {
  return (
    <div>
      <h2>Confirmación de registro</h2>
      <button
        className="mb-3 mt-2 flex min-h-8 w-full items-center justify-center rounded-xl bg-cach-l3 text-cach-l1"
        onClick={next}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Verify;
