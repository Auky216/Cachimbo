import React, { useState, useEffect } from "react";
import { useAuthStore } from "../store/session";
import { Link, useNavigate } from "react-router-dom";
import { CachimboLogo } from "../components/icons/CachimoLogo";
import ThemeButton from "../components/extras/ThemeButton";
import Loader from "../components/Loading";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { login, error } = useAuthStore();

    const move = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async (event) => {

        setIsLoading(true);
        event.preventDefault();
        login({ email, password }).finally(() => {
            setIsLoading(false);
            move("/dashboard/main");
        });
    };

    return (
        // DIV para ajustar el centrado con todo el h-screen del #App
        <div className="m-auto flex flex-col min-h-screen w-[500px] items-center">
            <div className="mt-5 flex w-full justify-between py-4">
                <div className="flex items-center px-4">
                    <Link to="/">
                        <CachimboLogo />
                    </Link>
                </div>
                <div className="flex items-center px-8">
                    <ThemeButton />
                </div>


            </div>
            <section className="m-auto flex w-full flex-col">

                <div className="flex justify-center text-5xl font-bold text-cach-l3 dark:text-cach-l2">
                    Iniciar sesión
                </div>
                <div className="w-full">
                    <form className="rounded px-8 py-12" onSubmit={handleLogin}>
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
                        {error && (
                            <div className="mb-4 text-center text-red-500">
                                {error}
                            </div>
                        )}
                        <div className="mb-4 flex items-center justify-center">
                            <button
                                className=" flex items-center justify-center focus:shadow-outline w-full rounded-xl bg-cach-l3 px-4 py-4 font-bold text-white focus:outline-none"
                                type="submit"
                            >
                                {isLoading ? <Loader dimensions_container="w-10 h-10" dimensions_loader="w-7 h-7" color="white" margin="my-2" /> : <span></span>} Iniciar Sesión
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
