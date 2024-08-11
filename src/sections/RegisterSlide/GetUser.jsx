import { useState } from "react";

// cuarto slide del registro: ingreso de nombre, apellido y correo institucional
const GetUser = ({ next }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleLastnameChange = e => {
    setLastname(e.target.value);
  };

  const handleNicknameChange = e => {
    setNickname(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
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
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="name"
                id="name"
                placeholder="Nombre completo"
                value={name}
                onChange={handleNameChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="lastname">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="text"
                id="lastname"
                placeholder="Apellidos completos"
                value={lastname}
                onChange={handleLastnameChange}
              />
            </label>
          </div>
          <div className="mb-6">
            <label htmlFor="email">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="text"
                id="email"
                placeholder="Correo Institucional"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
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
