import { useState } from "react";

// octavo slide del registro: ingreso de foto de perfil
const LastRegister = ({ next }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [nickname, setNickname] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleNickameChange = e => {
    e.preventDefault();
    setNickname(e.target.value);
    if (e.target.value === "") {
      setError("Sería genial si aplicas un alias");
    } else {
      setError("");
    }
  };

  const handleDescriptionChange = e => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  return (
    <section className="flex h-full w-full flex-col items-center rounded-[3.5rem]">
      <div className="flex h-[75%] w-full flex-col items-center">
        <div className="mb-10 mt-2 flex px-1 text-center text-[1.8rem] font-bold text-cach-l4 dark:text-cach-l1">
          ¡ Lo último !
        </div>
        <div className="flex h-full w-[90%] flex-row justify-center">
          {/* <div className="flex h-[80%] w-[40%] flex-col items-center justify-center gap-10">
            <div className="border-3 flex size-[17rem] items-center justify-center rounded-3xl border border-cach-l3 bg-cach-l3 bg-transparent text-cach-l1">
              {uploadedImage ? (
                <img
                  className="rounded-3xl"
                  src={URL.createObjectURL(uploadedImage)}
                  alt="profile"
                />
              ) : (
                <div className="text-[2rem]">+</div>
              )}
            </div>
            <div className="flex h-[20%] w-full items-center justify-center">
              <label
                htmlFor="upload-photo"
                className="flex h-10 w-[40%] cursor-pointer items-center justify-center rounded-xl bg-cach-l3 text-cach-l1"
              >
                Subir foto
              </label>
              <input
                id="upload-photo"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => setUploadedImage(e.target.files[0])}
              />
            </div>
          </div> */}
          <div className="w-[28rem]">
            <label htmlFor="nickname" className="flex flex-col items-center">
              <span className="font-bold text-cach-l2">
                Dinos una forma de llamarte
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-cach-l2">@</span>
                <input
                  className="focus:shadow-outline mt-3 w-[14rem] h-[2.5rem] rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                  type="name"
                  id="nickname"
                  value={nickname}
                  onChange={handleNickameChange}
                />
              </div>
              
            </label>
            {error && (
              <div className="text-center text-orange-400 dark:text-orange-700">
                Sería genial si aplicas un alias
              </div>
            )}
            <div className={`mb-4 mt-${error ? "2" : "8"}`}>
              <label htmlFor="description">
                <span className="font-bold text-cach-l2">
                  Alguna descripción sobre ti
                </span>
                <textarea
                  className="focus:shadow-outline mt-3 h-[9rem] w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-xs text-gray-700 placeholder:text-cach-l3 placeholder:opacity-30 focus:outline-none dark:text-cach-l1 dark:placeholder:text-cach-l2"
                  id="description"
                  placeholder=" (opcional)"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[20%] w-full flex-col items-center justify-center">
        <div className="flex w-full items-center justify-around">
          <button
            className="mb-3 mt-2 flex h-10 min-h-8 w-[20%] items-center justify-center rounded-xl bg-cach-l3 text-cach-l1 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => next({ nickname, description })}
            disabled={nickname === ""}
          >
            Finalizar
          </button>
        </div>
        <div className="text-xl text-cach-l3 opacity-30 dark:text-cach-l2">
          <em>Muy pronto, mejoraremos nuestro diseño !!</em>
        </div>
      </div>
    </section>
  );
};

export default LastRegister;
