import React from 'react';
import { useParams } from "react-router-dom";
import { teachers } from '../../constant/teachers';
import Default from "../../assets/profile-template.png";
import { NavLink } from "react-router-dom";
import { Star } from "../../components/icons/Star";
import { MAX_RATE } from "../../constant/opinion";

const TeachersIndividualPage = () => {
    const stars = Array(MAX_RATE).fill(0);
    const params = useParams();
    const teacher = teachers.find(t => t.id === parseInt(params.id));
    return (
        <div>
            <div className='w-full mt-16'>
                <NavLink to="/dashboard/main/teachers">
                    <button className="mb-3 mt-2 flex min-h-8 w-1/6 items-center justify-center rounded-xl bg-cach-l3 text-cach-l1">
                        Regresar
                    </button>
                </NavLink>
            </div>
            {/* The profile will come here */}
            <div className='w-full mt-8'>
                <div className='flex w-3/4 m-auto items-center gap-1'>
                    <div className="w-1/2 flex items-center">
                        <img src={teacher.photo || Default} alt="tchr" className="w-3/4 m-auto"/>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold text-cach-l3 dark:text-cach-l2'>
                            {"Prof. " + teacher.name}
                        </h1>
                        <div className='flex w-full justify-between mt-3 mb-3'>
                            {stars.map((_, index) => (
                                <Star className="" key={index} bg={index < Math.round(teacher.rate)} l="19"
                                ></Star>
                            ))}
                        </div>
                        <div className='flex justify-center gap-3'>
                            {
                                teacher.courses.map((course, index) => (
                                    <div className='text-xl text-cach-l3 dark:text-cach-l2'>
                                        {course}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <br />
                <div className='w-full'>
                    <div className='w-5/6 text-center mt-5 mb-5 rounded-2xl font-bold dark:text-cach-l1 border-2 p-5 m-auto text-cach-l4'>
                        {teacher.descrip}
                    </div>
                </div>
            </div>
            {/* The section concerning  will come here */}
            <div className='w-full'>
                <div className='w-full flex'>
                    <div className='w-2/4'>
                        <span className='text-xl font-bold text-cach-l3 dark:text-cach-l2'>
                            Califica a este profesor
                        </span>
                    </div>
                    <div className='w-2/4'>
                        {/*I want to made 5 starts interactable that according how the cursor cliked*/}
                        <div className='flex justify-center gap-3'>
                            {stars.map((_, index) => (
                                <Star className="" key={index} bg={index < Math.round(teacher.rate)} l="19"
                                ></Star>
                            ))}
                        </div>
                    </div> 
                </div>
                <input type="text" placeholder="Escribe tu opinión" className='w-full rounded-xl border-2 border-cach-l2 p-2'/>
            </div>
        </div>
    );
};

export default TeachersIndividualPage;