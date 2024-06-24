import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CachimboLogo } from "../components/icons/CachimoLogo";
import ThemeButton from "../components/extras/ThemeButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleLogin = async event => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    try {
      const response = await fetch(
        "https://iownbjppr5.execute-api.us-east-1.amazonaws.com/test/student/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        },
      );
      if (response.ok) {
        console.log("Inicio de sesión exitoso");
      } else {
        console.error("Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    // DIV para ajustar el centrado con todo el h-screen del #App
    <div className="m-auto flex min-h-screen w-[500px] items-center">
      <section className="m-auto flex w-full flex-col">
        <div className="mt-5 flex justify-center">
          <Link to="/">
            <CachimboLogo />
          </Link>
        </div>

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
                  className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                  type="text"
                  id="email"
                  placeholder="Correo"
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
            </div>
            <div className="mb-6">
              <label htmlFor="password">
                <input
                  className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
            </div>
            <div className="mb-4 flex items-center justify-center">
              <button
                className="focus:shadow-outline w-full rounded-xl bg-cach-l3 px-4 py-4 font-bold text-white focus:outline-none"
                type="submit"
                onClick={handleLogin}
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
    </div>
  );
};

export default Login;
