import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UploadTargetIcon from '../assets/upload-target-icon.png';
import { useUserStore } from '../store/utils';
import { universities } from '../static/academic';
import UniDefault from "../assets/university-icon.png"
import Curso from "../assets/icons8-cursos-96.png";
import { Checkbox } from '../components/backButton';
// const UploadIcon = () => {
//     return(
//     <svg 
//         xmlns="http://www.w3.org/2000/svg" 
//         viewBox="0 0 64 64" 
//         width="64" 
//         height="64" 
//         fill="currentColor" 
//         stroke="currentColor"
//     >
//         <path 
//             d="M32 8c-9.941 0-18 8.059-18 18 0 1.199.104 2.372.308 3.513A9.998 9.998 0 0 0 4 38c0 5.523 4.477 10 10 10h36c6.627 0 12-5.373 12-12s-5.373-12-12-12a11.968 11.968 0 0 0-4.923 1.075C46.413 17.62 39.742 12 32 12c-6.627 0-12 5.373-12 12H16c0-8.836 7.164-16 16-16s16 7.164 16 16H32V32H28v-8h-8v4h4v8h-4v4h4v4h4v-4h4v4h4v-4h-4v-4h4v-4h-4v-8h8v8h-4v4h4v-8h4c0-10.493-8.507-19-19-19zm0 0z" 
//         />
//     </svg>
// )};



const FileUploadForm = () => {
    const {user} = useUserStore();
    const [university, setUniversity] = useState(null);
    const [course, setCourse] = useState('');
    const [nickname, setNickname] = useState(user.nickname);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [file, setFile] = useState(null);
    const [isReceiving, setIsReceiving] = useState(true);
    const location = useLocation();


    useEffect(() => {
        if (location.state) {
            setFile(location.state.file);
            //console.log(location.state.file);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();


        if (!file) {
            alert('Por favor, selecciona un archivo');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const fileContentBase64 = btoa(reader.result);
            console.log(fileContentBase64);
            const requestBody = {
                university,
                course,
                nickname,
                is_anonymous: isAnonymous,
                file_name: file.name,
                file_content: fileContentBase64,
                title
            };
            //console.log(requestBody);
            fetch('/api/test/api/library/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            })
            .then(response => console.log(response))
            .then(data => {
                alert('Archivo subido con éxito y registrado en DynamoDB');
            })
            .catch(error => {
                alert('Error al subir el archivo: ' + error.message);
            });
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <div className='w-full h-screen overflow-y-auto dark:text-cach-l1'>
            <form onSubmit={handleSubmit} className='w-full max-w-md mx-auto my-5'>
                <div className='flex mx-auto font-semibold'>
                    <div className='w-1/2 flex items-center justify-center'>
                        <img src={UploadTargetIcon} alt="xd" width={150}/>
                    </div>
                    <div className='w-1/2 flex flex-col'>
                        <div className='flex flex-col'>
                            <label className='flex' >
                                Título:
                            </label>
                            <input 
                                    type="text" 
                                    value={title} 
                                    onChange={(e) => setTitle(e.target.value)} 
                                    required 
                                    className='border-2 border-cach-l2 rounded focus:outline-cach-l3 dark:border-cach-l3 dark:focus:outline-cach-l2'
                                />
                        </div>
                        <div className='flex flex-col'>
                            <label>
                                Descripcción:
                            </label>
                            <textarea 
                                    type="text" 
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)} 
                                    required
                                    className='border-2 border-cach-l2 rounded focus:outline-cach-l3 dark:border-cach-l3 dark:focus:outline-cach-l2' 
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
                    <div className='w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4'>
                        {user.enrolledCourses.map((course_list, index) => (
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
                    </div>
                    
                </div>

                <br /><br />

                <div className='flex w-full'>
                    <label className='font-semibold w-1/2 text-center'>
                        ¿Es anónimo?
                    </label>
                    <div className='w-1/2 flex items-center justify-center'>
                        <Checkbox checked={isAnonymous} handleChange={(e) => setIsAnonymous(e.target.checked)}/>
                    </div>
                    
                </div>

                <br /><br />

                {file ? <div>
                    {file.name}
                    <button type="button" onClick={()=>{setFile(null)}} className='font-semibold'> Delete</button>
                    </div> : <div>
                        <label>
                            Selecciona un archivo:
                            <input 
                                type="file" 
                                onChange={(e) => setFile(e.target.files[0])} 
                                required 
                                accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.jpg,.jpeg,.png"
                            />
                        </label>
                    </div> }
                <br /><br />
                
                <div>
                    <button type="submit">Subir Archivo</button>
                </div>
            </form>
        </div>
    );
}

export default FileUploadForm;
