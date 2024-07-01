import React from 'react';
import { useParams } from "react-router-dom";
import { teachers } from '../../constant/teachers';
import Default from "../../assets/profile-template.png";

const TeachersIndividualPage = () => {
    const params = useParams();
    const teacher = teachers.find(t => t.id === parseInt(params.id));
    return (
        <div>
            {/* The profile will come here */}
            <div className='w-full mt-16'>
                <div className='flex w-1/2 m-auto items-center'>
                    <div className="w-1/2 flex items-center">
                        <img src={teacher.photo || Default} alt="tchr" className="w-3/4 m-auto"/>
                    </div>
                    <div className='text-center'>
                        {teacher.name}
                        {
                            teacher.courses.map((course, index) => (
                                <div key={index}>
                                    {course}
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
                <br />
                <div>
                    <div className='text-center'>
                        {teacher.descrip}
                    </div>
                </div>
            </div>
            {/* The section concerning  will come here */}
        </div>
    );
};

export default TeachersIndividualPage;