import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import { teachers } from '../../constant/teachers';
import Default from "../../assets/profile-template.png";
import { NavLink } from "react-router-dom";
import { Star } from "../../components/icons/Star";
import { MAX_RATE } from "../../constant/opinion";
import StarRating from './teacherRater';
import CommentInput from './CustomInput';

const TeachersIndividualPage = () => {
    const params = useParams();
    const teacher = teachers.find(t => t.id === parseInt(params.id));
    const stars = Array(MAX_RATE).fill(0);
    const [selectedRate, setSelectedRate] = useState(teacher.rate);
    const handleStarClick = (index) => {
        setSelectedRate(index + 1);
    };
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
                                <Star className="" item={index} bg={index < Math.round(teacher.rate)} l="19"
                                onClick={() => handleStarClick(index)}></Star>
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
            {/* The section concerning comments will come here */}
            <div className='w-full'>
                <div className='w-full flex'>
                    <div className='w-2/4'>
                        <span className='text-xl font-bold text-cach-l3 dark:text-cach-l2'>
                            Califica a este profesor
                        </span>
                    </div>
                    <div className='w-2/4'>
                        {/*I want to made 5 starts interactable that according how the cursor cliked*/}

                        <StarRating initialRate={teacher.rate} />

                    </div> 
                </div>
                <br />
                <div className='w-full flex items-center justify-between'>
                    {/* <input type="text" placeholder="Escribe tu opinión" className='w-3/5 rounded-xl border-2 border-cach-l2 p-2'/> */}
                    <CommentInput
                        placeholder="Escribe tu comentario aquí..."
                        maxLength={500}
                        className="w-3/5"
                    />
                    <div className='w-1/3' >
                        <button className='w-32 bg-cach-l3 m-auto block rounded-md h-8'>
                            Enviar
                        </button>
                    </div>
                </div>
                {/* The comments will come here */}
                
            </div>
        </div>
    );
};

export default TeachersIndividualPage;