"use client";  // Para que sea un Client Component en Next.js

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const router = useRouter();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        // Aquí puedes agregar tu lógica de autenticación en el futuro
        setTimeout(() => {
            if (email === "admin@admin.com" && password === "admin") {
                setIsLoading(false);
                setError(null);
                router.push("/dashboard/main"); // Redirigir después del login exitoso
            } else {
                setIsLoading(false);
                setError("Credenciales incorrectas");
            }
        }, 1500); // Simulando un retraso de autenticación
    };

    return (
        <div className="m-auto flex flex-col min-h-screen w-[500px] items-center">
            <div className="mt-5 flex w-full justify-between py-4">
                <div className="flex items-center px-4">
                    <a href="/">
                        <h1 className="text-2xl font-bold text-white">Cachimbo</h1>
                    </a>
                </div>
                <div className="flex items-center px-8">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full transition duration-300">
                        Cambiar Tema
                    </button>
                </div>
            </div>

            <section className="m-auto flex w-full flex-col">
                <div className="flex justify-center text-5xl font-bold text-purple-600 dark:text-purple-300">
                    Iniciar sesión
                </div>
                <div className="w-full">
                    <form className="rounded px-8 py-12" onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email">
                                <input
                                    className="focus:shadow-outline w-full rounded-xl border border-purple-600 bg-transparent px-4 py-3 text-gray-700 placeholder:text-purple-400 focus:outline-none dark:text-white"
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
                                    className="focus:shadow-outline w-full rounded-xl border border-purple-600 bg-transparent px-4 py-3 text-gray-700 placeholder:text-purple-400 focus:outline-none dark:text-white"
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
                                className="flex items-center justify-center focus:shadow-outline w-full rounded-xl bg-purple-600 px-4 py-4 font-bold text-white focus:outline-none hover:bg-purple-700 transition duration-300"
                                type="submit"
                            >
                                {isLoading ? "Cargando..." : "Iniciar Sesión"}
                            </button>
                        </div>
                        <div className="flex justify-center font-light text-purple-600 dark:text-purple-300">
                            ¿No tienes una cuenta? &nbsp;
                            <a href="/register">
                                <strong>Regístrate</strong>
                            </a>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;
