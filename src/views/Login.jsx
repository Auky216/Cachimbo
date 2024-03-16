import { Link } from "react-router-dom";
import { CachimboLogo } from "@/components/icons/CachimoLogo";
import ThemeButton from "@/components/ThemeButton";

const Login = () => {
  return (
    <section className="m-auto flex w-[500px] flex-col">
      <CachimboLogo />
      <div className="mt-5 flex justify-center">
        <ThemeButton />
      </div>

      <div className="mt-8 flex justify-center text-5xl font-bold text-cach-l3 dark:text-cach-l2">
        Iniciar sesión
      </div>
      <div className="w-full">
        <form className="rounded px-8 py-12">
          <div className="mb-4">
            <label htmlFor="email">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:bg-transparent dark:text-cach-l1"
                type="text"
                id="email"
                placeholder="Correo"
              />
            </label>
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:bg-transparent dark:text-cach-l1"
                type="password"
                id="password"
                placeholder="Contraseña"
              />
            </label>
          </div>
          <div className="mb-4 flex items-center justify-center">
            <button
              className="focus:shadow-outline w-full rounded-xl bg-cach-l3 px-4 py-4 font-bold text-white focus:outline-none"
              type="submit"
              value="Submit"
            >
              Iniciar Sesión
            </button>
          </div>
          <div className="flex justify-center font-light text-cach-l3 dark:text-cach-l2">
            ¿No tienes una cuenta? &nbsp;
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
