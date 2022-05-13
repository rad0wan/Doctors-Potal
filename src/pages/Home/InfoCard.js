import React from 'react';

const InfoCard = ({ info }) => {

    const { title, details, img, classNam } = info;

    return (
        <div className={`card lg:card-side bg-${classNam} shadow-xl lg:px-6 py-8 text-white`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p className='text-sm'>{details}</p>
            </div>
        </div>
    );
};

export default InfoCard;