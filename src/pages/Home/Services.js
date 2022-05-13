import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            _id: 1,
            img: fluoride,
            title: 'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            _id: 2,
            img: cavity,
            title: 'Cavity Filling',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            _id: 3,
            img: whitening,
            title: 'Cavity Filling',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        }
    ]

    return (
        <section className='mx-3 lg:mx-5'>
            <div className='text-center mb-16'>
                <h3 className='text-secondary text-xl font-bold uppercase'>Our Services</h3>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-36'>
                {
                    servicesData.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default Services;