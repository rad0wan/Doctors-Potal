import React from 'react';


const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="w-40 h-40 border-t-4 border-b-4 border-secondary rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;