import React from 'react';
import PrimaryBtn from '../../share/PrimaryBtn';
import treatment from '../../assets/images/treatment.png'

const Exceptional = () => {
    return (
        <section className='mb-24'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img className=' lg:w-[458px] lg:h-[576px]' src={treatment} alt='' />
                    <div className='basis-2/4 '>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryBtn>GET STARTED</PrimaryBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exceptional;