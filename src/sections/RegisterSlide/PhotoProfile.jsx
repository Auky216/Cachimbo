// octavo slide del registro: ingreso de foto de perfil
const PhotoProfile = ({ next }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [nickname, setNickname] = useState("");
  return (
    <section className="flex h-full w-full flex-col items-center rounded-[3.5rem]">
      <div className="flex h-[80%] w-full flex-col items-center">
        <div className="mt-2 flex px-1 text-center text-[1.6rem] font-bold text-cach-l4 dark:text-cach-l1">
          Añade tu foto de perfil
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center"></div>
      </div>
      <div className="flex h-[22%] w-full items-center justify-center">
        <div className="flex w-full items-center justify-around">
          <button
            className="mb-3 mt-2 flex h-10 min-h-8 w-[20%] items-center justify-center rounded-xl bg-cach-l3 text-cach-l1 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => next(nickname, "nickname")}
            disabled={nickname === ""}
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotoProfile;
