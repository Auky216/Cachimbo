import { TeacherMiniCard } from "../components/Cards";
import { NavLink, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {teachers} from '../constant/teachers';
import { getCursos } from "../constant/course";
import BackButton from "../components/backButton";
import Loader from "../components/Loading";
import fetchDataCustom from "../components/fetchingData";
import { useUserStore } from "../store/utils";

const TeacherMain = () => {
    /** Estoy pensando en que cuando se pase
    el nombre al componente teacherMinicard usar 
    un parametro en especifico para cargar la imagen
    -De momento haré que el componente reciba la imagen como parametro
    */
    const cursosArray = Object.keys(getCursos);
    const [techers_section, filterTeachers] = useState(teachers);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useUserStore();

    const token = user.token;
    
    const fetchData = async (search_value) => {
        setIsLoading(true)
        const [result, data, state] = await fetchDataCustom({
            name: search_value,
            token: token
        }, "test/api/teacher/find_teacher");
        filterTeachers(data.items);
        setIsLoading(state);

    };
    

    useEffect(() => {
        fetchData("a");
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
                        if (e.key === "Enter") {
                            fetchData(inputValue);
                        }
                    }}
                    value={inputValue}
                    placeholder="Prof."
                    className="w-full my-5 rounded-full border border-cach-l3 bg-cach-l1 bg-transparent px-5 py-2 text-cach-l3 placeholder-cach-l3/70 focus:outline-none dark:border-cach-l2 dark:text-cach-l2 dark:placeholder-cach-l2/40"
                />
            </div>
            <div className="w-full flex justify-center items-center">
                {/* Se usará un map para generar todos los teaches mini card necesarios */}
                
                {isLoading ? <Loader/> : <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(224px,_1fr))] gap-4">
                        {techers_section.map((teacher, index) => (
                            <Link to={`/dashboard/main/teachers/${teacher.name}`} key={index}>
                                <TeacherMiniCard
                                    key={index}
                                    name={teacher.name}//.split(' ').slice(0, 2).join(' ')}
                                    imageRoute={teacher.img}
                                    rate={2}
                                />
                            </Link>
                    ))}
                </div>
                }
            </div>
        </div>
    );
};

export default TeacherMain;
