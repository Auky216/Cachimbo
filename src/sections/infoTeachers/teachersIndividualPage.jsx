import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { teachers } from '../../constant/teachers';
import Default from "../../assets/profile-template.png";
import { NavLink } from "react-router-dom";
import { Star } from "../../components/icons/Star";
import { MAX_RATE } from "../../constant/opinion";
import StarRating from './teacherRater';
import CommentInput from './CustomInput';
import {TeachersOpinion} from '../../constant/opinion'
import TOpinion from './TOpinion';
import { getCursos } from '../../constant/course';
import BackButton from '../../components/backButton';
import Loader from '../../components/Loading';

const TeachersIndividualPage = () => {
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const[info, setInfo] = useState();
    const name = params.id;
    //const teacher = teachers.find(t => t.id === parseInt(params.id));
    
    const token = import.meta.env.VITE_TOKEN;
    
    const fetchData = async (search_value) => {
        setIsLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "name": search_value,
            "token": token
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        try {
            const response = await fetch("/api/test/api/teacher/get_information", requestOptions);
            const result = await response.json();
            const newInfo = JSON.parse(result.body);
            setInfo(newInfo);
            setIsLoading(false);
            console.log(info);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    useEffect(() => {
        fetchData(name);
    }, []); 

    const [opinions, setOpinions] = useState(TeachersOpinion.filter(o => o.teachercode === params.id));
    
    const stars = Array(MAX_RATE).fill(0);
    const [selectedRate, setSelectedRate] = useState(4);
    
    const handleStarClick = (index) => {
        setSelectedRate(index + 1);
    };
    
    const [comment, setComment] = useState('');
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    
    const sendOpinion = () => {
        // Aquí se enviaría la opinión
        const new_comment = {teachercode: params.id, description: comment, rate: selectedRate, carrerUser: "Computer Science", timestamp: `${new Date().toISOString().split('T')[0]}`};
        setOpinions([...opinions, new_comment]);
        setComment("")
    }
    return (
        <div className='overflow-scroll h-full' key={params.id}>
            {isLoading ? <Loader/> : 
                <div className='w-full'>
                    <div className='w-full mt-16'>
                        <BackButton></BackButton>
                    </div>
                    {/* The profile will come here */}
                    <div className='w-full mt-8'>
                        <div className='flex w-3/4 m-auto items-center gap-1'>
                            <div className="w-1/2 flex items-center">
                                <img src={info[0].img || Default} alt="tchr" className="w-3/4 m-auto"/>
                            </div>
                            <div className='text-center'>
                                <h1 className='text-2xl font-bold text-cach-l3 dark:text-cach-l2'>
                                    {"Prof. " + info[0].name}
                                </h1>
                                <div className='flex w-full justify-between mt-3 mb-3'>
                                    {stars.map((_, index) => (
                                        <Star key={index} className="" item={index} bg={index < Math.round(4)} l="19"
                                        onClick={() => handleStarClick(index)}></Star>
                                    ))}
                                </div>
                                <div className='flex justify-center gap-3'>
                                    Curso Teacher
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className='w-full'>
                            <div className='w-5/6 text-center mt-5 mb-5 rounded-2xl font-bold dark:text-cach-l1 border-2 p-5 m-auto text-cach-l4'>
                                {info[0].description}
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

                                <StarRating selectedRate={selectedRate} setSelectedRate={setSelectedRate} />

                            </div> 
                        </div>
                        <br />
                        <div className='w-full flex items-center justify-between'>
                            {/* <input type="text" placeholder="Escribe tu opinión" className='w-3/5 rounded-xl border-2 border-cach-l2 p-2'/> */}
                            <CommentInput
                                placeholder="Escribe tu comentario aquí..."
                                maxLength={500}
                                value={comment}
                                className="w-3/5"
                                onChange={handleCommentChange}
                            />
                            <div className='w-1/3' >
                                <button className='w-32 bg-cach-l3 m-auto block rounded-md h-8' onClick={sendOpinion}>
                                    Enviar
                                </button>
                            </div>
                        </div>
                        {/* The comments will come here */}
                        <br />
                        <div className='w-full'>
                            <p className='text-xl font-bold mt-2 mb-4 text-cach-l3 dark:text-cach-l2 '>
                                Comentarios:
                            </p>
                            <div className='grid grid-cols-[repeat(auto-fill,_minmax(210px,_1fr))] gap-4'>
                            {
                                opinions.length === 0 ? (
                                    <div className='w-full text-center'>
                                    <p className='text-cach-l3 dark:text-cach-l2'>
                                        No hay comentarios.
                                    </p>
                                    </div>
                                ) : (
                                    opinions.map((opinion) => (
                                    <TOpinion
                                        key={opinion.id} // Asumiendo que cada 'opinion' tiene un 'id' único. Es importante proporcionar una prop 'key' cuando se renderizan listas.
                                        profile_author_route={opinion.profile_author_route}
                                        rate={opinion.rate}
                                        author={opinion.carrerUser}
                                        date={opinion.timestamp}
                                        comment={opinion.description}
                                    />
                                    ))
                                )
                            }
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default TeachersIndividualPage;

            