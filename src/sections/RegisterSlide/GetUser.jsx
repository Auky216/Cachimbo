import { useState } from "react";
import { useUserStore } from "../../store/utils";

// cuarto slide del registro: ingreso de nombre, apellido, correo institucional y nickname
const GetUser = ({ next }) => {
  const univUser = useUserStore(state => state.university) || "UTEC";
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    email: "",
  });

  const handleNameChange = e => {
    e.preventDefault();
    setName(e.target.value);
    setErrors({ ...errors, name: e.target.value ? "" : "El nombre es requerido" });
  };

  const handleLastnameChange = e => {
    e.preventDefault();
    setLastname(e.target.value);
    setErrors({ ...errors, lastname: e.target.value ? "" : "El apellido es requerido" });
  };

  const handleEmailChange = e => {
    e.preventDefault();
    setEmail(e.target.value);

    if (e.target.value === "") {
      setErrors({ ...errors, email: "El correo es requerido" });
      return;
    }

    // Validar que el correo tenga un patrón válido: nombre@univ_dominio.edu.pe
    if (!/^[^\s@]+@[^\s@]+\.edu\.pe+$/.test(e.target.value)) {
      setErrors({ ...errors, email: "El correo no es válido" });
      return;
    }

    let getDomain = e.target.value.split("@")[1].split(".")[0];
    const univUserL = univUser.toLowerCase();
    if (getDomain !== univUserL) {
      setErrors({ ...errors, email: "El correo no es de la universidad" });
      return;
    }

    setErrors({ ...errors, email: "" });
  };

  const handleNicknameChange = e => {
    e.preventDefault();
    setNickname(e.target.value);
    setErrors({ ...errors, nickname: e.target.value ? "" : "El nickname es requerido" });
  };

  return (
    <section className="flex h-full w-full flex-col items-center rounded-[3.5rem]">
      <div className="flex h-[84%] w-full flex-col items-center">
        <div className="mb-8 mt-2 flex px-1 text-center text-[1.6rem] font-bold text-cach-l4 dark:text-cach-l1">
          Dinos quién eres !!
        </div>

        <div className="flex h-full w-[50%] flex-col gap-3">
          <div className="mb-4">
            <label htmlFor="name">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l3 placeholder:opacity-30 focus:outline-none dark:text-cach-l1 dark:placeholder:text-cach-l2"
                type="text"
                id="name"
                placeholder="Nombre completo"
                value={name}
                onChange={handleNameChange}
              />
            </label>
            {errors.name && (
              <div className="mb-4 text-center text-red-400 dark:text-red-700">
                {errors.name}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="lastname">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l3 placeholder:opacity-30 focus:outline-none dark:text-cach-l1 dark:placeholder:text-cach-l2"
                type="text"
                id="lastname"
                placeholder="Apellidos completos"
                value={lastname}
                onChange={handleLastnameChange}
              />
            </label>
            {errors.lastname && (
              <div className="mb-4 text-center text-red-400 dark:text-red-700">
                {errors.lastname}
              </div>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="email">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l3 placeholder:opacity-30 focus:outline-none dark:text-cach-l1 dark:placeholder:text-cach-l2"
                type="text"
                id="email"
                placeholder="Correo Institucional"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            {errors.email && (
              <div className="mb-4 text-center text-red-400 dark:text-red-700">
                {errors.email}
              </div>
            )}
          </div>
        </div>
        <div className="flex h-[22%] w-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-around">
            <button
              className="mb-3 mt-2 flex h-10 min-h-8 w-[20%] items-center justify-center rounded-xl bg-cach-l3 text-cach-l1 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => next({ name, lastname, email })}
              disabled={name === "" || lastname === "" || email === ""}
            >
              Siguiente
            </button>
          </div>
          <div className="pt-4 text-xl text-cach-l3 opacity-30 dark:text-cach-l2">
            <em>Muy pronto, mejoraremos nuestro diseño !!</em>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetUser;
