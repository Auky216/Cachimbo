import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UploadTargetIcon from '../assets/upload-target-icon.png';
import { universities } from '../static/academic';
import UniDefault from "../assets/university-icon.png"
import Curso from "../assets/icons8-cursos-96.png";
import { Checkbox } from '../components/buttons';
import Loader, {PageDefaultSearch} from '../components/Loading';
import { pushFile, findCourses } from '../store/services';
import { ErrorModal, LoadingModal } from '../components/Modal';
import uploadIcon from "../assets/upload-icon.png";
import { useUserStore } from '../store/utils';




const FileUploadForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPushing, setIsPushing] = useState(false);
    const [error, setError] = useState(null);
    const [university, setUniversity] = useState(null);
    const [course, setCourse] = useState(null);
    const [termSearchCourse, setTermSearchCourse] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [file, setFile] = useState(null);
    const [pageSelected, setPageSelected] = useState(1);
    const [listCourses, setListCourses] = useState([]);
    const [isLoading, setIsloading] = useState(null);
    const location = useLocation();
    const {user} = useUserStore();

    const showModal = () => {
        setIsOpen(!isOpen);
    }

    const openPushing = () => {
        setIsPushing(!isPushing);
    }

    useEffect(() => {
        if (location.state) {
            setFile(location.state.file);
            //console.log(location.state.file);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const reader = new FileReader();
        reader.onloadend = async () => {
            const fileContentBase64 = btoa(reader.result);
            //console.log(fileContentBase64);
            setIsPushing(true);
            /* pushFile(fileContentBase64, file.name, file.name.split('.')[-1], title, university, course, isAnonymous).catch((error) => {
                setError(error);
                setIsPushing(false);
                showModal();
            }).finally(() => setIsPushing(false)); */
            //console.log(fileContentBase64);
            //type: file.name.split('.').pop(),
            console.log(user.nickname, user.token, isAnonymous, university, course, file.name, title, description);
            const requestBody = {
                token: "c1ac4eca-b677-4bb6-aa53-41982ea3f656", //user.token,
                university,
                course: "Programación I",
                file_name: file.name,
                file_content: fileContentBase64,
                nickname:"utecino", //user.nickname,
                is_anonymous: isAnonymous,
                title,
                description
            };
            /* const uploadData = {
                token: formData.get('token'),
                university: formData.get('university'),
                course: formData.get('course'),
                file_name: file.name,
                file_content: fileContentBase64,
                nickname: formData.get('nickname') || 'Anonymous',
                is_anonymous: formData.get('is_anonymous') === 'on',
                title: formData.get('title'),
                description: formData.get('description')
            }; */
            const res = await fetch('/api/test/api/library/send', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            })
            const data = await res.json();
            console.log(data);
            setIsPushing(false);
            /* .then(data => {
                console.log(data);
                alert('Archivo subido con éxito y registrado en DynamoDB');
                setIsPushing(false);
            })
            .catch(error => {
                setError(error);
                setIsPushing(false);
                setIsOpen(true);
            }); */

        };

        reader.readAsBinaryString(file);
    };

    const handleCourseSearchKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setIsloading(true);

            findCourses(termSearchCourse, pageSelected, university)
            .then((data) => {
                setListCourses(data.course_names);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setIsloading(false));
            //console.log(result, data, state, errorObject);
        }
    };

    return (
        <div className='w-full h-screen overflow-y-auto dark:text-cach-l1'>
            <form onSubmit={handleSubmit} className='w-full max-w-md mx-auto my-5'>
                <div className='flex mx-auto font-semibold gap-5'>
                    <div className='w-1/2 flex items-center justify-center'>
                        {file ? <div className='flex flex-col m-5 text-center w-full'>
                                <p className='break-words'>
                                    {file.name}
                                </p>
                                <button type="button" onClick={()=>{setFile(null)}} className='font-semibold text-red-600' accept='.pdf, .jpg, .jpeg, .png'> Delete</button>
                            </div> : 
                            <div className='flex flex-col m-5 w-full'>
                                <label className='cursor-pointer flex flex-col border-cach-l4 dark:border-cach-l1 items-center border-2 p-2 rounded-2xl'>
                                    <img src={UploadTargetIcon} className='dark:invert' alt="xd" width={100}/>
                                    <p className='w-full text-center'>Selecciona un archivo</p>
                                    <input 
                                        type="file" 
                                        onChange={(e) => setFile(e.target.files[0])} 
                                        className='hidden'
                                        accept='.pdf, .jpg, .jpeg, .png'
                                    />
                                </label>
                            </div> }
                    </div>
                    <div className='w-1/2 flex flex-col justify-center'>
                        <div className='flex flex-col'>
                            <label className='flex' >
                                Título:
                            </label>
                            <input 
                                    type="text" 
                                    value={title} 
                                    onChange={(e) => setTitle(e.target.value)} 
                                    required 
                                    className=' text-cach-l4 font-normal border-2 border-cach-l2 rounded focus:outline-cach-l3 dark:border-cach-l3 dark:focus:outline-cach-l2'
                                />
                        </div>
                        <div className='flex flex-col'>
                            <label>
                                Descripción:
                            </label>
                            <textarea 
                                    type="text" 
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)} 
                                    required
                                    className='text-cach-l4 font-normal border-2 border-cach-l2 rounded focus:outline-cach-l3 dark:border-cach-l3 dark:focus:outline-cach-l2' 
                                />
                        </div>
                    </div>
                    
                </div>
                <br />
                <div className='w-full flex flex-col justify-center items-center'>
                    <label className='font-semibold my-4 text-xl'>
                        Universidad:
                    </label>
                    <div className='w-full grid grid-cols-[repeat(auto-fill,_minmax(110px,_1fr))] gap-4'>
                        {universities.map((uni, index) => (
                            <div className={`flex items-center rounded-xl border-2 ${university == uni.sigle ? "border-cach-l3 bg-cach-l2 dark:text-cach-l4": "border-cach-l2"} p-2 cursor-pointer`} onClick={()=>{
                                setUniversity(uni.sigle)
                                }} key={index}>
                                <div className='mx-2 min-w-11 flex items-center justify-center'>
                                    <img src={uni.logo || UniDefault} width={40}/>
                                </div>
                                <div>
                                    {uni.sigle}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <label className='font-semibold my-4 text-xl'>
                        Curso:
                    </label>
                    <div>
                        <input
                            type="text"
                            value={termSearchCourse}
                            disabled={university == null}
                            onChange={(e) => setTermSearchCourse(e.target.value)}
                            onKeyDown={handleCourseSearchKeyDown}
                            placeholder="Buscar curso"
                            className='mb-4 text-cach-l4 px-3 py-2 font-normal border-2 border-cach-l2 rounded focus:outline-cach-l3 dark:text-cach-l4 dark:border-cach-l3 dark:focus:outline-cach-l2'
                        />
                    </div>
                    {isLoading == null ? <PageDefaultSearch text='Primero selecciona una universidad, después escribe el nombre de tu curso, le das al ENTER y selecciona el tuyo'/> : 
                        <div className='w-full'>
                            {isLoading ? <Loader/> : <div className='w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4'>
                                {listCourses.map((course_list, index) => (
                                <div className={`flex items-center rounded-xl border-2 ${course == course_list && university!=null? "border-cach-l3 bg-cach-l2 dark:text-cach-l4": "border-cach-l2"} p-2 ${university == null ? "cursor-no-drop":"cursor-pointer"}`} onClick={()=>{
                                    if (university == null) {
                                        alert("Por favor, selecciona una universidad")
                                        return
                                    } else {
                                        setCourse(course_list)
                                    }}} key={index}>
                                    <div className='mx-2 min-w-11 flex items-center justify-center'>
                                        <img src={Curso} className='w-[50px]'/>
                                    </div>
                                    <div className='text-center'>
                                        {course_list}
                                    </div>
                                </div>
                            ))}
                            </div>}
                        </div>
                        
                    }
                    
                </div>

                <div className='flex w-full mt-10'>
                    <label className='font-semibold w-1/2 text-center'>
                        ¿Es anónimo?
                    </label>
                    <div className='w-1/2 flex items-center justify-center'>
                        <Checkbox checked={isAnonymous} handleChange={(e) => setIsAnonymous(e.target.checked)}/>
                    </div>
                    
                </div>
                <br />
                <div className='w-2/3 mx-auto'>
                    {/* <button type="submit" className='flex flex-col justify-center items-center text-center w-full p-4 border-2 rounded-3xl border-cach-l4 dark:border-cach-l1'>
                        <img src={UploadTargetIcon} className='dark:invert' alt="xd" width={100}/>
                        <p className='w-full text-center'>Subir</p>
                    </button> */}
                    <button type="submit"
                        className="mb-3 mt-2 flex min-h-8 w-full cursor-pointer items-center justify-center rounded-xl bg-cach-l3 text-cach-l1"
                    >
                        <img src={uploadIcon} alt="icon" className="mr-1 w-4 invert" />
                        Subir
                    </button>
                </div>
                <br />
            </form>
            <ErrorModal isOpen={isOpen} setIsOpen={showModal} errorHeader={error ? error.name : null} errorMessage={error ? error.message: ""}/>
            <LoadingModal isOpen={isPushing}/>
        </div>
    );
}

export default FileUploadForm;
