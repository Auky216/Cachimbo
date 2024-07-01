import React from 'react';
import { useParams } from "react-router-dom";
import { teachers } from '../../constant/teachers';

const TeachersIndividualPage = () => {
    const params = useParams();
    const teacher = teachers.find(t => t.id === parseInt(params.id));
    return (
        <div>
            {/* The profile will come here */}
            <div>
                <div>
                    {teacher.name}
                    {
                        teacher.courses.map((course, index) => (
                            <div key={index}>
                                {course}
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div>
                        {teacher.descrip}
                    </div>
                </div>
            </div>
            {/* The section concerning  will come here */}
        </div>
    );
};

export default TeachersIndividualPage;