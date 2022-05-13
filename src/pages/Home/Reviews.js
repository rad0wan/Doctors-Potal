import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import Review from './Review';

const Reviews = () => {

    const reviewsData = [
        {
            _id: 1,
            img: people1,
            name: 'Winson Herry',
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            img: people1,
            name: 'Peter Json',
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Sanfansisco'
        },
        {
            _id: 3,
            img: people1,
            name: 'Herry Poter',
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'New York'
        }
    ]

    return (
        <section>
            <div className='flex justify-between mx-12 mb-20'>
                <div>
                    <h3 className='text-xl font-bold text-secondary'>Testimonial</h3>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-[192px] h-[156px]' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 pb-36 mx-5 lg:mx-20'>
                {
                    reviewsData.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;