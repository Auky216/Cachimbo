import React from 'react';

const Loader = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="loader my-10 ease-linear rounded-full border-8 border-t-8 border-zinc-200 h-12 w-12"></div>
            <style>
                {`
                .loader {
                    border-top-color: #7f6afc;
                    border-bottom-color: #7f6afc;
                    border-left-color: transparent;
                    border-right-color: transparent;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                `}
            </style>
        </div>
    );
};

export default Loader;

export const PageDefaultSearch = ({text="Para empezar escribe algo y presiona ENTER y verás los resultados"}) => {
    return(
        <div className='w-full h-40 flex items-center justify-center'>
            <div className='flex text-center w-8/12 text-xl font-medium'>
                {text}
            </div>
        </div>
    );
}