import { Link } from "react-router-dom";
import { CachimboLogo } from "../components/icons/CachimoLogo";
import ThemeButton from "../components/ThemeButton";
const Register = () => {
  return (
    <section className="m-auto mt-12 flex w-[500px] flex-col">
      <div className="mt-5 flex justify-center">
        <Link to="/">
          <CachimboLogo />
        </Link>
      </div>

      <div className="mt-5 flex justify-center">
        <ThemeButton />
      </div>

      <div className="mt-8 flex justify-center text-5xl font-bold text-cach-l3 dark:text-cach-l2">
        Registrarse
      </div>
      <div className="w-full">
        <form className="rounded px-8 py-12">
          <div className="mb-4">
            <label htmlFor="username">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="text"
                id="username"
                placeholder="Nombre de usuario"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="email">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="email"
                id="email"
                placeholder="Correo electrónico"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="password">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="password"
                id="password"
                placeholder="Contraseña"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="password"
                id="confirmPassword"
                placeholder="Confirmar contraseña"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="lastname">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="text"
                id="lastname"
                placeholder="Apellido"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="age">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="number"
                id="age"
                placeholder="Edad"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="degree">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="text"
                id="degree"
                placeholder="Grado"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="startYear">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="number"
                id="startYear"
                placeholder="Año de inicio"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="term">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="text"
                id="term"
                placeholder="Término"
              />
            </label>
          </div>
          <div className="mb-4 flex items-center justify-center">
            <button
              className="focus:shadow-outline w-full rounded-xl bg-cach-l3 px-4 py-4 font-bold text-white focus:outline-none"
              type="submit"
              value="Submit"
            >
              Registrarse
            </button>
          </div>
          <div className="flex justify-center font-light text-cach-l3 dark:text-cach-l2">
            ¿Ya tienes una cuenta? &nbsp;
            <Link to="/login">
              <strong>Iniciar sesión</strong>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
