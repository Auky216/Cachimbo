import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigationType, useNavigate } from 'react-router-dom';

const useSafeNavigate = () => {
    const navigate = useNavigate();

    const safeNavigate = (steps) => {
        navigate(steps);
    };

    return safeNavigate;
};

const usePreviousUrl = () => {
    const [previousUrl, setPreviousUrl] = useState(null);
    const location = useLocation();
    const navigationType = useNavigationType();
    const prevLocationRef = useRef(location);
    useEffect(() => {
        if (navigationType === 'PUSH') {
            setPreviousUrl(prevLocationRef.current.pathname + prevLocationRef.current.search);
        }
        prevLocationRef.current = location;
    }, [location, navigationType]);  
    return previousUrl;
};

const BackButton = ({message}) => {
    const last_path = usePreviousUrl();
    const safeNavigate = useSafeNavigate();
    const navigate = useNavigate();

    const handleGoBack = () => {
        //console.log('safeNavigate', last_path);
        if (last_path) {
            safeNavigate(-1);
        }
        else{
            navigate('/dashboard/main');
        }
        //safeNavigate(-1);
    };

    return <button onClick={handleGoBack} className='mb-3 mt-2 flex min-h-8 w-1/6 items-center justify-center rounded-xl bg-cach-l3 text-cach-l1'>{message || "Regresar"}</button>;
};

export default BackButton;
