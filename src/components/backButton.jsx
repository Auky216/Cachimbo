import React, { useEffect } from 'react';
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
