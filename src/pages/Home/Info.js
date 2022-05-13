import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {

    const infoData = [
        {
            _id: 1,
            img: clock,
            title: 'Opening Hours',
            details: 'Lorem Ipsum is simply dummy text of the prig',
            classNam: 'gradient-to-r from-secondary to-primary'
        },
        {
            _id: 2,
            img: marker,
            title: 'Visit our location',
            details: 'Brooklyn, NY 10036, United States',
            classNam: 'accent'
        },
        {
            _id: 3,
            img: phone,
            title: 'Contact us now',
            details: '+000 123 456789',
            classNam: 'gradient-to-r from-secondary to-primary'
        }
    ]

    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 px-3 lg:px-5 pb-32'>
            {
                infoData.map(info => <InfoCard
                    key={info._id}
                    info={info}
                ></InfoCard>)
            }
        </section>
    );
};

export default Info;