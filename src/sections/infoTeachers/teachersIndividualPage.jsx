import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Default from "../../assets/profile-template.png";
import { Star } from "../../components/icons/Star";
import { MAX_RATE } from "../../constant/opinion";
import StarRating from './teacherRater';
import CommentInput from '../../components/CustomInput';
import TOpinion from './TOpinion';
import BackButton from '../../components/buttons';
import Loader from '../../components/Loading';
import { carrers } from '../../static/academic';
import {fetchDataCustom} from '../../components/fetchingData';
import { useUserStore } from '../../store/utils';

const TeachersIndividualPage = () => {
    const {name} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useUserStore();
    const[info, setInfo] = useState([[]]);
    const careerName = user.career;
    
    const [opinions, setOpinions] = useState([]);
    
    const stars = Array(MAX_RATE).fill(0);
    const [teacherRate, setTheacherRate] = useState(4);
    const [selectedRate, setSelectedRate] = useState(4);
    
    const handleStarClick = (index) => {
        setSelectedRate(index + 1);
    };
    
    const [comment, setComment] = useState('');
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const sendOpinion = async () => {
        // Aquí se enviaría la opinión
        //console.log(opinions);
        const [res, body, state] = await fetchDataCustom({
            teacher_name: name,
            nickname: user.nickname,
            career: careerName,
            comment,
            score: selectedRate,
            token: user.token,
        }, "test/api/teacher/calification/send")
        //console.log(res, body, state);
        const new_comment = {comment: comment, 
            teacher_name: name,
            score: selectedRate,
            career: careerName,
            nickname: user.nickname, 
            date: `${new Date().toISOString()}`};
        setOpinions([...opinions, new_comment]);
        setComment("")
    }

    const token = user.token;
    
    const fetchData = async (search_value) => {
        setIsLoading(true);
        const [result, body, state] = await fetchDataCustom({
            "name": search_value,
            "token": token
        }, "test/api/teacher/get_information")
        const [result2, body2, state2] = await fetchDataCustom({"teacher_name":name, "token":token}, "test/api/teacher/calification/get")
        console.log(body2.comments, result2);
        
        if (result2.statusCode == 200){
            setInfo(body);
        
            setIsLoading(state);
            setOpinions(body2.comments)
            setTheacherRate(body2.score);
            setSelectedRate(body2.score);
        };
        
    };
    

    useEffect(() => {
        fetchData(name);
    }, []); 

    
    return (
        <div className='overflow-scroll h-full'>
            {isLoading && info? <Loader/> : 
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
                                        <Star key={index} className="" item={index} bg={index < Math.round(teacherRate)} l="19"
                                        onClick={() => handleStarClick(index)}></Star>
                                    ))}
                                </div>
                                {/* <div className='flex justify-center gap-3'>
                                    Curso Teacher
                                </div> */}
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
                                        key={opinion.date} // Asumiendo que cada 'opinion' tiene un 'id' único. Es importante proporcionar una prop 'key' cuando se renderizan listas.
                                        profile_author_route={opinion.profile_author_route}
                                        rate={opinion.score}
                                        author={opinion.nickname}
                                        date={opinion.date.split('T')[0]}
                                        comment={opinion.comment}
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
            