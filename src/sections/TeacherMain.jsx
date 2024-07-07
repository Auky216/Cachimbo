import { TeacherMiniCard } from "../components/Cards";
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import {teachers} from '../constant/teachers';

const TeacherMain = () => {
    /** Estoy pensando en que cuando se pase
    el nombre al componente teacherMinicard usar 
    un parametro en especifico para cargar la imagen
    -De momento haré que el componente reciba la imagen como parametro
    */
    const [seleccionCurso, setSeleccionCurso] = useState('');
    const [seleccionCarrera, setSeleccionCarrera] = useState('');

    const handleCambioCurso = (event) => {
        setSeleccionCurso(event.target.value);
        setSeleccionCarrera('');
    };

    const handleCambioCarrera = (event) => {
        setSeleccionCarrera(event.target.value);
        setSeleccionCurso('');
    };
    return (
        <div className="w-full pt-7">
            <div className="flex w-full justify-between items-center mb-5">
                <h1 className="text-2xl font-bold text-cach-l3 dark:text-cach-l2" >Tus Queridos Profes</h1>
                <NavLink to="/dashboard/main/" className="min-w-48">
                    <button className="mb-3 mt-2 flex min-h-8 w-full items-center justify-center rounded-xl bg-cach-l3 text-cach-l1">
                        Regresar al menu
                    </button>
                </NavLink>
            </div>
            <p className="text-xl text-cach-l3 dark:text-cach-l2 mb-5" >
                Filros por:
            </p>
            <div className="w-full">
                <div className="w-2/3 m-auto flex justify-between items-center">
                    <select value={seleccionCarrera} onChange={handleCambioCarrera} className="mb-3 mt-2 flex min-h-8 min-w-32 text-center items-center justify-center rounded-xl bg-cach-l3 text-cach-l1">
                        <option value="">Carrera</option>
                        <option value="opcion1">Carrera 1</option>
                        <option value="opcion2">Carrera 2</option>
                        <option value="opcion3">Carrera 3</option>
                    </select>
                    <span className="text-md font-normal text-cach-l5 dark:text-cach-l1" >Ó</span>
                    <select value={seleccionCurso} onChange={handleCambioCurso} className="mb-3 mt-2 flex min-h-8 min-w-32 text-center items-center justify-center rounded-xl bg-cach-l3 text-cach-l1">
                        <option value="">Curso</option>
                        <option value="opcion1">Curso 1</option>
                        <option value="opcion2">Curso 2</option>
                        <option value="opcion3">Curso 3</option>
                    </select>
                </div>
                
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(224px,_1fr))] gap-4">
                {/* Se usará un map para generar todos los teaches mini card necesarios */}
                {teachers.map((teacher, index) => (
                    <NavLink to={`/dashboard/main/teachers/${teacher.id}`} key={teacher.id}>
                        <TeacherMiniCard
                            name={teacher.name.split(' ').slice(0, 2).join(' ')}
                            imageRoute={teacher.photo}
                            course={teacher.courses[0]} // Asumiendo que quieres mostrar el primer curso
                            rate={teacher.rate}
                        />
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default TeacherMain;
