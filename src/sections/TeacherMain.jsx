import { TeacherMiniCard } from "../components/Cards";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {teachers} from '../constant/teachers';
import { getCursos } from "../constant/course";
import BackButton from "../components/backButton";

const TeacherMain = () => {
    /** Estoy pensando en que cuando se pase
    el nombre al componente teacherMinicard usar 
    un parametro en especifico para cargar la imagen
    -De momento haré que el componente reciba la imagen como parametro
    */
    const cursosArray = Object.keys(getCursos);
    const [techers_section, filterTeachers] = useState(teachers);
    const [inputValue, setInputValue] = useState("");

    const token = import.meta.env.VITE_TOKEN;
    useEffect(() => {
        const fetchData = async () => {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify({
                "name": "J",
                "token": token
            });
    
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };
            try {
                const response = await fetch("/api/test/api/teacher/find_teacher", requestOptions);
                const result = await response.json();
                console.log((JSON.parse(result.body)));
            } catch (error) {
                console.error('Error:', error);
            }
            };
        
        fetchData();
    }, []); 


    const changeInputValue = (e) => {
        setInputValue(e.target.value)
    }
    
    return (
        <div className="w-full pt-7 overflow-scroll h-full">
            <div className="flex w-full justify-between items-center mb-5">
                <h1 className="text-2xl font-bold text-cach-l3 dark:text-cach-l2" >Tus Queridos Profes</h1>
                    <BackButton className="mb-3 mt-2 flex min-h-8 w-full items-center justify-center rounded-xl bg-cach-l3 text-cach-l1">
                    </BackButton>

            </div>
            <p className="text-xl text-cach-l3 dark:text-cach-l2 mb-5" >
                Filros por nombre:
            </p>
            <div className="w-full">
                <input
                    onChange={e => changeInputValue(e)}
                    type="text"
                    onKeyUp={e => {
                        if (e.key === "Enter") filterTeachers(teachers.filter(teacher => teacher.name.includes(inputValue)));
                    }}
                    value={inputValue}
                    placeholder="Prof."
                    className="w-full my-5 rounded-full border border-cach-l3 bg-cach-l1 bg-transparent px-5 py-2 text-cach-l3 placeholder-cach-l3/70 focus:outline-none dark:border-cach-l2 dark:text-cach-l2 dark:placeholder-cach-l2/40"
                />
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(224px,_1fr))] gap-4">
                {/* Se usará un map para generar todos los teaches mini card necesarios */}
                {techers_section.map((teacher, index) => (
                    <NavLink to={`/dashboard/main/teachers/${teacher.id}`} key={teacher.id}>
                        <TeacherMiniCard
                            key={index}
                            name={teacher.name.split(' ').slice(0, 2).join(' ')}
                            imageRoute={teacher.photo}
                            course={getCursos[teacher.courses[0]].title} // Asumiendo que quieres mostrar el primer curso
                            rate={teacher.rate}
                        />
                    </NavLink>
                ))
                }
            </div>
        </div>
    );
};

export default TeacherMain;
