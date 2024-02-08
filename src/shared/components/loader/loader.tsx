import React from 'react';

export const Loader = () => {
    return (
        <div className='relative z-50 w-full h-[100%] flex justify-center items-center'>
            <div className='flex gap-4'>
                <div className='animate-bounce-x1 border-2 border-black w-10 h-10 rounded-full bg-cyan-300'></div>
                <div className='animate-bounce-x2 border-2 border-black w-10 h-10 rounded-full bg-cyan-300'></div>
                <div className='animate-bounce-x3 border-2 border-black w-10 h-10 rounded-full bg-cyan-300'></div>
            </div>
        </div>
    );
};
