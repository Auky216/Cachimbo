import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {teachers} from '../constant/teachers';
import { data_user } from '../constant/user_data';
import { getCursos } from "../constant/course";
import {MiniCard } from "../components/Cards";
import { useUserStore } from '../store/utils';
import Curso from "../assets/icons8-cursos-96.png";
import BackButton from '../components/backButton';

const TeacherMain = () => {

    const cursosArrayUser = useUserStore(state => state.user.enrolledCourses);
    const cursosTotales = Object.keys(getCursos);
    const progress = (((cursosArrayUser.length/cursosTotales.length))*100).toFixed(1);
    const [next_courses, update_course] = useState([]);

    useEffect(() => {
        const coursesSet = new Array();
        cursosArrayUser.forEach((c) => {
            if ((getCursos[c]["nextCourses"]).length > 0) {
                coursesSet.push(getCursos[c]["nextCourses"]);
            }
        });
        update_course(coursesSet);
    }, []);
    //console.log(data_user[cursosArrayUser[4]]);
    //console.log(next_courses);
    return(
        <div className='w-full'>
            <div className="flex justify-between items-center mt-4 mb-5 m-auto">
                <BackButton></BackButton>
            </div>
            <div className='w-5/6 text-cach-l5 dark:text-cach-l1'>
                {/*Sección de la barra de progreso*/}
                <div className='m-auto'>
                    <h1 className='text-center my-4 text-2xl font-bold'> Tienes un avance del <span className='text-cach-l3'>{progress}%</span></h1>
                    <div className='w-full border rounded-lg'>
                        <div style={{ width: `${progress}%` }} className={`rounded h-5 bg-cach-l3`}></div>
                    </div>
                </div>
                <div className='mt-7'>
                    <p className='font-bold'>Cursos del siguiente ciclo: </p>
                    <div className="grid grid-cols-1 gap-2 pt-3 md:grid-cols-2">
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
            </div>
        </div>
    )
}

export default TeacherMain;