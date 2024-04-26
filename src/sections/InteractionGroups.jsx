import React, { useState } from "react";

import students from "../assets/icons8-grupo-de-primer-plano-seleccionado-96.png";
import expertsPanel from "../assets/icons8-panel-of-experts-96.png";
import teacher from "../assets/icons8-profesor-96.png";
import university from "../assets/icons8-university-48.png";
import utec from "../assets/Utec_Icon.png"
import marketing from "../assets/Comunity_Icon.png"

const InteractionGroups = () => {

    return (
        <section id="interactionGroups">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Busca tu grupo de amigos"
                    className="w-full rounded-full border border-cach-l3 bg-cach-l1 p-2 text-cach-l3 placeholder-cach-l3 focus:outline-none dark:border-cach-l2 dark:bg-[#2B2C41] dark:text-cach-l2 dark:placeholder-cach-l2"
                />
            </div>

            <div className="mb-4 flex space-x-4">
                <button className="rounded-full bg-cach-l3 px-5 py-1 text-sm text-cach-l1 focus:outline-none">
                    Todos
                </button>
                <button className="rounded-full bg-cach-l3 px-5 py-1 text-sm text-cach-l1 focus:outline-none">
                    Unidos
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4">

            {/*Group Ajedrez*/}
            <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
                <div className="flex items-center space-x-4">
                    <img
                        src={expertsPanel}
                        className="h-34 w-40"
                        alt="panelistas"
                        loading="lazy"
                    />
                    <div>
                        <h1 className="text-lg font-bold text-cach-l3 dark:text-cach-l2">Grupo de ajedrez</h1>
                        <div className="flex items-center space-x-2">
                            <img
                                src={students}
                                className="h-16 w-15"
                                alt="fig asistente"
                                loading="lazy"
                            />
                            <span className="text-pretty text-cach-l3 dark:text-cach-l2">+12</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img
                                src={utec}
                                className="h-12 w-14"
                                alt="logo de la universidad"
                                loading="lazy"
                            />
                            <p className="text-pretty text-cach-l3 dark:text-cach-l2">UTEC</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full mt-4">
                    <button className="bg-cach-l3 px-14 py-2 rounded-full text-sm text-cach-l1 focus:outline-none">
                        Unirse
                    </button>
                </div>
            </div>

            {/*Group Left 4 Dead 2 UPC*/}

            <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
                <div className="flex items-center space-x-4">
                    <img
                        src={expertsPanel}
                        className="h-34 w-40"
                        alt="panelistas"
                        loading="lazy"
                    />
                    <div>
                        <h1 className="text-lg font-bold text-cach-l3 dark:text-cach-l2">Group Left 4 Dead 2</h1>
                        <div className="flex items-center space-x-2">
                            <img
                                src={students}
                                className="h-16 w-15"
                                alt="fig asistente"
                                loading="lazy"
                            />
                            <span className="text-pretty text-cach-l3 dark:text-cach-l2">+122</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img
                                src={university}
                                className="h-12 w-14"
                                alt="logo de la universidad"
                                loading="lazy"
                            />
                            <p className="text-pretty text-cach-l3 dark:text-cach-l2">UPC</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full mt-4">
                    <button className="bg-cach-l3 px-14 py-2 rounded-full text-sm text-cach-l1 focus:outline-none">
                        Unido
                    </button>
                </div>
            </div>

            {/*Calculo 1 se pasa Solo*/}
            <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
                <div className="flex items-center space-x-4">
                    <img
                        src={teacher}
                        className="h-34 w-40"
                        alt="panelistas"
                        loading="lazy"
                    />
                    <div>
                        <h1 className="text-lg font-bold text-cach-l3 dark:text-cach-l2">Calculo 1 se pasa Solo</h1>
                        <div className="flex items-center space-x-2">
                            <img
                                src={students}
                                className="h-16 w-15"
                                alt="fig asistente"
                                loading="lazy"
                            />
                            <span className="text-pretty text-cach-l3 dark:text-cach-l2">+99</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img
                                src={utec}
                                className="h-12 w-14"
                                alt="logo de la universidad"
                                loading="lazy"
                            />
                            <p className="text-pretty text-cach-l3 dark:text-cach-l2">UTEC</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full mt-4">
                    <button className="bg-cach-l3 px-14 py-2 rounded-full text-sm text-cach-l1 focus:outline-none">
                        Unirse
                    </button>
                </div>
            </div>


            {/*Los Marketeros*/}
            <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
                <div className="flex items-center space-x-4">
                    <img
                        src={marketing}
                        className="h-34 w-40"
                        alt="panelistas"
                        loading="lazy"
                    />
                    <div>
                        <h1 className="text-lg font-bold text-cach-l3 dark:text-cach-l2">Los Marketeros</h1>
                        <div className="flex items-center space-x-2">
                            <img
                                src={students}
                                className="h-16 w-15"
                                alt="fig asistente"
                                loading="lazy"
                            />
                            <span className="text-pretty text-cach-l3 dark:text-cach-l2">+2</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img
                                src={university}
                                className="h-12 w-14"
                                alt="logo de la universidad"
                                loading="lazy"
                            />
                            <p className="text-pretty text-cach-l3 dark:text-cach-l2">UP</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full mt-4">
                    <button className="bg-cach-l3 px-14 py-2 rounded-full text-sm text-cach-l1 focus:outline-none">
                        Unirse
                    </button>
                </div>
            </div>
                

                {/*Bla bla bla ... more groups*/}


            </div>
        </section>
    );
};

export default InteractionGroups;
