import { Link } from "react-router-dom";
import { CachimboLogo } from "@/components/icons/CachimoLogo";
const Register = () => {
  return (
    <section className="flex flex-col w-[500px] m-auto">
      <CachimboLogo />
      <div className="mt-5 flex justify-center">
      </div>
      
      <div className="mt-8 flex justify-center text-cach-l3 dark:text-cach-l2 font-bold text-5xl">
        Registrarse
      </div>
      <div className="w-full">
        <form className="rounded px-8 py-12">
          <div className="mb-4">
            <label htmlFor="username">
              <input
                className="border border-cach-l3 dark:bg-transparent dark:text-cach-l1 rounded-xl w-full py-3 px-4 text-gray-700 placeholder:text-cach-l2 focus:outline-none focus:shadow-outline"
                type="text"
                id="username"
                placeholder="Nombre de usuario"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="email">
              <input
                className="border border-cach-l3 dark:bg-transparent dark:text-cach-l1 rounded-xl w-full py-3 px-4 text-gray-700 placeholder:text-cach-l2 focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                placeholder="Correo electrónico"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="password">
              <input
                className="border border-cach-l3 dark:bg-transparent dark:text-cach-l1 rounded-xl w-full py-3 px-4 text-gray-700 placeholder:text-cach-l2 focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                placeholder="Contraseña"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword">
              <input
                className="border border-cach-l3 dark:bg-transparent dark:text-cach-l1 rounded-xl w-full py-3 px-4 text-gray-700 placeholder:text-cach-l2 focus:outline-none focus:shadow-outline"
                type="password"
                id="confirmPassword"
                placeholder="Confirmar contraseña"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="lastname">
              <input
                className="border border-cach-l3 dark:bg-transparent dark:text-cach-l1 rounded-xl w-full py-3 px-4 text-gray-700 placeholder:text-cach-l2 focus:outline-none focus:shadow-outline"
                type="text"
                id="lastname"
                placeholder="Apellido"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="age">
              <input
                className="border border-cach-l3 dark:bg-transparent dark:text-cach-l1 rounded-xl w-full py-3 px-4 text-gray-700 placeholder:text-cach-l2 focus:outline-none focus:shadow-outline"
                type="number"
                id="age"
                placeholder="Edad"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="degree">
              <input
                className="border border-cach-l3 dark:bg-transparent dark:text-cach-l1 rounded-xl w-full py-3 px-4 text-gray-700 placeholder:text-cach-l2 focus:outline-none focus:shadow-outline"
                type="text"
                id="degree"
                placeholder="Grado"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="startYear">
              <input
                className="border border-cach-l3 dark:bg-transparent dark:text-cach-l1 rounded-xl w-full py-3 px-4 text-gray-700 placeholder:text-cach-l2 focus:outline-none focus:shadow-outline"
                type="number"
                id="startYear"
                placeholder="Año de inicio"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="term">
              <input
                className="border border-cach-l3 dark:bg-transparent dark:text-cach-l1 rounded-xl w-full py-3 px-4 text-gray-700 placeholder:text-cach-l2 focus:outline-none focus:shadow-outline"
                type="text"
                id="term"
                placeholder="Término"
              />
            </label>
          </div>
          <div className="mb-4 flex items-center justify-center">
            <button
              className="bg-cach-l3 w-full text-white font-bold py-4 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              type="submit"
              value="Submit"
            >
              Registrarse
            </button>
          </div>
          <div className="text-cach-l3 font-light dark:text-cach-l2 flex justify-center">
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
