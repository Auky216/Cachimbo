// octavo slide del registro: ingreso de foto de perfil
const PhotoProfile = ({ next }) => {
  return (
    <div>
      <h2>Añade tu foto de perfil</h2>
      <button
        className="mb-3 mt-2 flex min-h-8 w-full items-center justify-center rounded-xl bg-cach-l3 text-cach-l1"
        onClick={next}
      >
        Siguiente
      </button>
    </div>
  );
};

export default PhotoProfile;
