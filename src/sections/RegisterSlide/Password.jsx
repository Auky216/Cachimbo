import { useState } from "react";

// sexto slide del registro: ingresamos la contraseña y confirmacion de la misma
const Password = ({ next }) => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <section className="flex h-full w-full flex-col items-center rounded-[3.5rem]">
      <div className="flex h-[60%] w-full flex-col items-center">
        <div className="mb-8 mt-2 flex px-1 text-center text-[1.6rem] font-bold text-cach-l4 dark:text-cach-l1">
          Ahora crea tu contraseña
        </div>

        <div className="flex h-full w-[50%] flex-col gap-3">
          <div className="mb-4">
            <label htmlFor="password">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="password"
                id="password"
                placeholder="Contraseña nueva"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="confirm">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="password"
                id="confirm"
                placeholder="Confirmar contraseña"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
              />
            </label>
          </div>
        </div>
        {/* Mensaje de error */}
        {confirm !== "" && password !== confirm && (
          <div className="mb-4 text-center text-red-400  dark:text-red-700">
            No coincide la contraseña
          </div>
        )}
        <div className="flex h-[22%] w-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-around">
            <button
              className="mb-3 mt-2 flex h-10 min-h-8 w-[20%] items-center justify-center rounded-xl bg-cach-l3 text-cach-l1 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => next(password, "password")}
              disabled={
                password === "" || confirm === "" || password !== confirm
              }
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

export default Password;
