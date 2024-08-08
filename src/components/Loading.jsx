import React from 'react';

const Loader = ({dimensions_container="w-full", dimensions_loader="h-12 w-12", margin="my-10"}, color="#7f6afc") => {
    return (
        <div className={`${dimensions_container} flex items-center justify-center`}>
            <div className={`loader ${margin} ease-linear rounded-full border-8 border-t-8 border-zinc-200 ${dimensions_loader}`} ></div>
            <style>
                {`
                .loader {
                    border-top-color: ${color};
                    border-bottom-color: ${color};
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
            <div className='text-cach-l4 dark:text-cach-l1 flex text-center w-8/12 text-xl font-medium'>
                {text}
            </div>
        </div>
    );
}