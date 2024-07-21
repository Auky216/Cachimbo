import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {teachers} from '../constant/teachers';
import { data_user } from '../constant/user_data';
import { getCursos } from "../constant/course";
import {MiniCard } from "../components/Cards";
import Curso from "../assets/icons8-cursos-96.png";

const TeacherMain = () => {

    const cursosArrayUser = Object.keys(data_user);
    const cursosTotales = Object.keys(getCursos);
    const progress = (((data_user[cursosArrayUser[4]].length/cursosTotales.length))*100).toFixed(1);
    const [next_courses, update_course] = useState([]);

    useEffect(() => {
        const coursesSet = new Array();
        data_user[cursosArrayUser[4]].forEach((c) => {
            if ((getCursos[c]["nextCourses"]).length > 0) {
                coursesSet.push(getCursos[c]["nextCourses"]);
            }
        });
        update_course(coursesSet);
    }, []);
    //console.log(data_user[cursosArrayUser[4]]);
    console.log(next_courses);
    return(
        <div>
            <div className='w-full mt-16'>
                <NavLink to="/dashboard/main/">
                    <button className="mb-3 mt-2 flex min-h-8 w-1/6 items-center justify-center rounded-xl bg-cach-l3 text-cach-l1">
                        Regresar
                    </button>
                </NavLink>
            </div>
            <h1>{progress}%</h1>
            <div>
                {
                    Object.values(next_courses).map((c) => (
                        <MiniCard
                            key={c}
                            classimg="size-[50px]"
                            classcont="text-md w-64"
                            link={`/dashboard/main/course/${c}`}
                            image={Curso}
                            title={getCursos[c].title}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TeacherMain;