import ThemeButton from "@/components/ThemeButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex flex-col w-[500px] m-auto">
      <ThemeButton />
      <div className=" mt-8 flex justify-center text-cach-l3 dark:text-cach-l2 font-bold text-5xl">
        Iniciar sesión
      </div>
      <div className="w-full">
        <form className="rounded px-8 py-12">
          <div className="mb-4">
            <label htmlFor="email">
              <input
                className="border border-cach-l3 dark:bg-transparent dark:text-cach-l1 rounded-xl w-full py-3 px-4 text-gray-700 placeholder:text-cach-l2 focus:outline-none focus:shadow-outline"
                type="text"
                id="email"
                placeholder="Correo"
              />
            </label>
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <input
                className="border border-cach-l3 dark:bg-transparent dark:text-cach-l1 rounded-xl w-full py-3 px-4 text-gray-700 placeholder:text-cach-l2 focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                placeholder="Contraseña"
              />
            </label>
          </div>
          <div className="mb-4 flex items-center justify-center">
            <button
              className="bg-cach-l3 w-full text-white font-bold py-4 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              type="submit"
              value="Submit"
            >
              Iniciar Sesión
            </button>
          </div>
          <div className="text-cach-l3 font-light dark:text-cach-l2 flex justify-center">
            ¿No tienes una cuenta? &nbsp;{" "}
            <Link to="/register">
              <strong>Regístrate</strong>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
