import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { useThemeStore } from '../store/utils';

const BackButton = ({message="Regresar"}) => {
    const {route, history, goBack} = useThemeStore();
    const navigate = useNavigate();

    const handleGoBack = () => {
        goBack();
    };
    useEffect(() => {
        if (history.length > 0) {
            //console.log('history', history);
            //console.log('route', route);
            navigate(route);
        }
        else{
            navigate('/dashboard/main');
        }

    }, [route, history, navigate]);
    //console.log('Route del utils', route);
    return <button onClick={handleGoBack} className='mb-3 mt-2 flex min-h-8 w-1/6 items-center justify-center rounded-xl bg-cach-l3 text-cach-l1'>{message}</button>;
};

export default BackButton;


export const Checkbox = ({checked, handleChange}) => {

    return (
        <div className="flex justify-center items-center">
            <label className="container">
                <input
                className="peer cursor-pointer hidden"
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                />
                <span
                className={`inline-block w-6 h-6 border-2 relative cursor-pointer 
                border-cach-l2 after:content-[''] after:absolute after:top-2/4 after:left-2/4 
                after:-translate-x-1/2 after:-translate-y-1/2 after:w-3 
                after:h-3 after:bg-cach-l3 after:rounded-sm after:opacity-0
                transition-opacity duration-200
                ${checked ? 'after:opacity-100' : 'after:opacity-0'}`}
                ></span>
            </label>
        </div>
    );
};
