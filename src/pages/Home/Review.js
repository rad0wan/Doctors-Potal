import React from 'react';

const Review = ({ review }) => {

    const { img, name, details, location } = review;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body ">
                <p className='mb-8'>{details}</p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-secondary ">
                            <img className='w-[75px] h-[75px]' src={img} alt='' />
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h4>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;