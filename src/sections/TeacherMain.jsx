import { TeacherMiniCard } from "../components/Cards";
import { Link } from "react-router-dom";
import React, { useState, useRef } from 'react';
import {teachers} from '../constant/teachers';
import { getCursos } from "../constant/course";
import BackButton from "../components/buttons";
import Loader, {PageDefaultSearch} from "../components/Loading";
import { findTeachers } from "../store/services";

const TeacherMain = () => {
    /** Estoy pensando en que cuando se pase
    el nombre al componente teacherMinicard usar 
    un parametro en especifico para cargar la imagen
    -De momento haré que el componente reciba la imagen como parametro
    */
    const cursosArray = Object.keys(getCursos);
    const [techers_section, filterTeachers] = useState(teachers);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(null);
    const [page,setPage] = useState(1);
    const [last_page, setLastPage] = useState(20);
    
    const fetchData = async (search_value, page) => {
        if (search_value === ""){
            return;
        }
        setIsLoading(true)
        const data= await findTeachers(search_value, page);
        filterTeachers(data.items);
        setLastPage(data.total_pages);
        setIsLoading(false);

    };
    



    const changeInputValue = (e) => {
        setInputValue(e.target.value)
    }
    const changePage = (e) => {
        if (e.target.value <= last_page){
            setPage(parseInt(e.target.value))
        }
    }

    const inputRef = useRef(null);

    
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
                            setPage(1)
                            fetchData(inputValue, page);
                        }
                    }}
                    value={inputValue}
                    placeholder="Prof."
                    className="w-full my-5 rounded-full border border-cach-l3 bg-cach-l1 bg-transparent px-5 py-2 text-cach-l3 placeholder-cach-l3/70 focus:outline-none dark:border-cach-l2 dark:text-cach-l2 dark:placeholder-cach-l2/40"
                />
            </div>
            {/* Sección de páginas */}
            <div className="w-full my-6">
                <div className="text-cach-l4 w-5/6 justify-between m-auto flex items-center gap-2">
                    <button className="dark:text-cach-l1 border-2 p-1 rounded-lg" onClick={()=>{
                        if (page > 1){
                            setPage(parseInt(inputRef.current.value)-1)
                            fetchData(inputValue, page)
                        }
                        }}> Página anterior</button>
                    { page > 1 ? <span className="dark:text-cach-l2">{1}</span>:<span className="dark:text-cach-l2"></span>}
                    { page <= 2  ? <span></span> : <span className="dark:text-cach-l2">....</span>}
                    <input ref={inputRef} className="w-10 text-center bg-transparent border-cach-l3 border-2 rounded dark:text-cach-l1" value={page} onChange={ e => changePage(e)} onKeyUp={ e =>{
                        if (e.key === "Enter"){
                            if (inputRef.current){
                                fetchData(inputValue, page);
                                inputRef.current.blur();
                            }
                        }
                    }}/>
                    { page >= last_page - 1 ? <span></span> : <span className="dark:text-cach-l2">....</span>}
                    { page == last_page ? <span></span> : <span className="text-cach-l4 dark:text-cach-l2">{last_page}</span>}
                    <button className="dark:text-cach-l1 border-2 p-1 rounded-lg"  onClick={()=>{
                        if (page < last_page){
                            setPage(1 + parseInt(inputRef.current.value))
                            fetchData(inputValue, page)
                        }
                        }}> Página siguiente </button>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                {/* Se usará un map para generar todos los teaches mini card necesarios */}
                {isLoading === null ? <PageDefaultSearch/> : isLoading==true ? <Loader/> : <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(224px,_1fr))] gap-4">
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
                </div>}

            </div>
        </div>
    );
};

export default TeacherMain;
